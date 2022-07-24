import express from 'express'
import * as endpoints from './endpoints/index.js'


export default function createApp() {
    const app = express()
    app.use(express.json())
    app.use('/api', endpoints.v1.cSGoServersCrudRouter)

    return app
}
