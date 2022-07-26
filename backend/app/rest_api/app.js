import express from 'express'
import dotenv from 'dotenv'
import controllers from './endpoints/index.js'
import swaggerUI from 'swagger-ui-express'
import cors from 'cors'
import swaggerBaseDoc from './swagger_base_doc.js'


dotenv.config()

export default function createApp() {
    const url = process.env.API_BASE_URL || 'http://localhost:3000'
    const port = process.env.API_PORT || 3000

    const app = express()
    app.use(express.json())
    app.use(cors())

    const router = express.Router()
    controllers.map(controller => controller.registerMethods(router))
    app.use('/api', router)

    swaggerBaseDoc.servers[0].url = `${url}/api`
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerBaseDoc))

    return { app, port }
}
