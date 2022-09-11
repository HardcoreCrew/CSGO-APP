import { Email, SteamId } from './domain/value_objects'
import { BcryptHasher } from './hasher_implementation'
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
import { AddUserInputDto } from './users_management/dtos'
import { AddUser } from './users_management/use_cases_implementation'


const models = [UserModel]
const initializeModelsUC = new InitializeModels(models)
const settings = new DotEnvSettings()
const dbConnector = new SequelizeDbConnector(settings, initializeModelsUC)
const userMapper = new SQLUserMapper()
const threadLocalStorage: any = {}
const userRepo = new SQLUserRepo(dbConnector.sequelize, threadLocalStorage, userMapper)
const hasher = new BcryptHasher()
const addUser = new AddUser(userRepo, hasher)


async function setTransaction() {
    const t = await dbConnector.sequelize.transaction()
    threadLocalStorage.transaction = t
}


async function runAddUserUC() {
    try {
        await setTransaction()
        
        const inputDto = new AddUserInputDto(
            'player1',
            'player1',
            new Email('player1@mail.com'),
            new SteamId('STEAM_1:0:123'),
            '123',
        )
        const outputDto = await addUser.execute(inputDto)
        console.log('User output', outputDto)

        threadLocalStorage.transaction.commit()
    } catch(e) {
        console.log('error', e)
        threadLocalStorage.transaction.rollback()
    }
}


runAddUserUC() // run once to add user, run twice to catch ObjectAlreadyExists error
