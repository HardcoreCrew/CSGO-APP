import { 
    UserModel,
 } from './repositories_implementation/sequelize/models'
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
console.log(dbConnector.sequelize.models)
console.log('User table created.')
