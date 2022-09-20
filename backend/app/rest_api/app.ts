import 'reflect-metadata'
import { container } from 'tsyringe'
import * as express from 'express'
import * as swaggerUI from 'swagger-ui-express'
import * as cors from 'cors'
import { 
    Request, 
    Response, 
    NextFunction, 
} from 'express'
import swaggerBaseDoc from './swagger_base_doc'
import { 
    sequelizeDbConnectorProvider,
    SequelizeStorage,
} from '../sequelize_db_connector'
import { Sequelize } from 'sequelize/types'
import hasherProvider from '../hasher_implementation'
import { ISettings } from '../settings'
import { 
    endpointsProvider, 
    IRegistrableEndpoint, 
} from './endpoints'
import settingsProvider from '../settings_implementation'
import { repositoriesProvider } from '../repositories_implementation'
import { usersManagementProvider } from '../users_management'


export default function createApp() {    
    setupDependencyInjection()

    const app = express()
    app.use(express.json())
    app.use(cors())
    app.use(expressUnitOfWork(container.resolve('ISequelize'), container.resolve(SequelizeStorage)))

    const router = express.Router()
    const endpoints: IRegistrableEndpoint[] = container.resolveAll('IRegistrableEndpoint')
    endpoints.map(endpoint => endpoint.registerMethods(router))
    app.use('/api', router)

    const settings: ISettings = container.resolve('ISettings')
    const url = settings.get('apiBaseUrl') || 'http://localhost:3000'
    const port = settings.get('apiPort') || 3001
    swaggerBaseDoc.servers[0].url = `${url}/api`
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerBaseDoc))

    return { app, port }
}


const setupDependencyInjection = () => {
    settingsProvider(container)
    sequelizeDbConnectorProvider(container)
    repositoriesProvider(container)
    hasherProvider(container)
    usersManagementProvider(container)
    endpointsProvider(container)
}


const expressUnitOfWork = (sequelize: Sequelize, storage: SequelizeStorage) => 
    async (req: Request, res: Response, next: NextFunction) => {
        if (req.method !== 'GET') {
            storage.transaction = await sequelize.transaction()
        }

        res.on('finish', async () => {
            if (req.method === 'GET') return
            try {
                if (res.statusCode < 400) {
                    storage.transaction.commit()
                }
                if (res.statusCode >= 400) {
                    storage.transaction.rollback()
                }
            } catch(e) {
                console.log('Db transaction error:', e)
                storage.transaction.forceCleanup()
            } finally {
                storage.transaction = null
            }
        });
        next();
    }
