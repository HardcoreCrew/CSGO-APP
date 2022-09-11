import * as express from 'express'
import * as swaggerUI from 'swagger-ui-express'
import * as cors from 'cors'
import { 
    Request, 
    Response, 
    NextFunction, 
} from 'express'
import controllers from './endpoints'
import swaggerBaseDoc from './swagger_base_doc'
import { DotEnvSettings } from '../settings_implementation'


// dotenv.config()


// function expressUnitOfWork(req: Request, res: Response, next: NextFunction) {
//     console.log('REQUEST STARTED');
//     res.on('finish', async () => {
//         console.log('REQUEST ENDED');
//         // You might have to add a logic here like if(req.user) then perform following things
//         // Do whatever you want to do here after every API call finishes
//         // you can access res.statusCode, req.method etc.
//         });
//         next();
// }


export default function createApp() {
    const settings = new DotEnvSettings()
    const url = settings.get('apiBaseUrl') || 'http://localhost:3000'
    const port = settings.get('apiPort') || 3001

    const app = express()
    app.use(express.json())
    app.use(cors())
    // app.use(expressUnitOfWork)

    const router = express.Router()
    controllers.map(controller => controller.registerMethods(router))
    app.use('/api', router)

    swaggerBaseDoc.servers[0].url = `${url}/api`
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerBaseDoc))

    return { app, port }
}