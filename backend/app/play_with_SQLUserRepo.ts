import { User } from './domain/entities'
import { IUserRepo } from './repositories'
import { SQLUserMapper } from './repositories_implementation/sequelize/mappers'
import { 
    UserModel,
 } from './repositories_implementation/sequelize/models'
import { SQLUserRepo } from './repositories_implementation/sequelize/repositories'
import { 
    InitializeModels, 
    SequelizeDbConnector,
 } from './sequelize_db_connector'
import {
    DotEnvSettings,
} from './settings_implementation'


const models = [UserModel]
const initializeModelsUC = new InitializeModels(models)
const settings = new DotEnvSettings()
const dbConnector = new SequelizeDbConnector(settings, initializeModelsUC)
const userMapper = new SQLUserMapper()
const threadLocalStorage: any = {}



async function setTransaction() {
    const t = await dbConnector.sequelize.transaction()
    threadLocalStorage.transaction = t
}


function getUserRepo() {
    return new SQLUserRepo(dbConnector.sequelize, threadLocalStorage, userMapper)
}


async function oneTransactionScenario(userRepo: IUserRepo, user: User) {
    try {
        let foundUser: User | null
        await setTransaction()

        await userRepo.add(user)
        if (!user.id) throw Error('No user id assigned by db.')

        foundUser = await userRepo.find(user.id)
        if (!foundUser) throw Error('User not found after being added to db.')
        console.log('Found user:', foundUser);

        foundUser.nickname = 'NewNickName'
        foundUser.password = 'NewPassword'
        console.log('Found user2:', foundUser);
        await userRepo.add(foundUser)
        foundUser = await userRepo.find(user.id)
        if (!foundUser) throw Error('User not found after being updated in db.')
        if (foundUser.nickname !== 'NewNickName' || foundUser.password !== 'NewPassword') {
            throw Error('User has not been updated.')
        }

        await userRepo.delete(user)

        foundUser = await userRepo.find(user.id)
        if (foundUser) throw Error('User found after being deleted from db.')

        threadLocalStorage.transaction.commit()
    } catch(e) {
        console.log('error', e);
        threadLocalStorage.transaction.rollback()
    }
}


async function multipleTransactionsScenario(userRepo: IUserRepo, user: User) {
    try {
        let foundUser: User | null
        await setTransaction()

        await userRepo.add(user)
        if (!user.id) throw Error('No user id assigned by db.')
        await threadLocalStorage.transaction.commit()
        await setTransaction()

        foundUser = await userRepo.find(user.id)
        if (!foundUser) throw Error('User not found after being added to db.')
        console.log('Found user:', foundUser);

        foundUser.nickname = 'NewNickName'
        foundUser.password = 'NewPassword'
        console.log('Found user2:', foundUser);
        await userRepo.add(foundUser)
        await threadLocalStorage.transaction.commit()
        await setTransaction()

        foundUser = await userRepo.find(user.id)
        if (!foundUser) throw Error('User not found after being updated in db.')
        if (foundUser.nickname !== 'NewNickName' || foundUser.password !== 'NewPassword') {
            throw Error('User has not been updated.')
        }

        await userRepo.delete(user)
        await threadLocalStorage.transaction.commit()
        await setTransaction()

        foundUser = await userRepo.find(user.id)
        if (foundUser) throw Error('User found after being deleted from db.')

    } catch(e) {
        console.log('error', e);
        await threadLocalStorage.transaction.rollback()
    }
}


const userRepo = getUserRepo()
const user = new User('player1', 'player1', '123', 'player1@mail.com', 'steam-id1')
// oneTransactionScenario(userRepo, user) // uncomment to test
multipleTransactionsScenario(userRepo, user) // only one of these scenario functions works at a time
