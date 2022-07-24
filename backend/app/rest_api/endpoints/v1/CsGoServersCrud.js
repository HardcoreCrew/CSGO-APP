import express from 'express'
import v1Url from './v1_base_url.js'


const url = `${v1Url}/cs-go-servers`
let idCounter = 0


class CsGoServersCrud {
    addServerRequest(req, res) {
        const { lobby_id, maps } = req.body

        let undefinedFields = []
        for (const [key, value] of Object.entries({lobby_id, maps})) {
            if (value === undefined) undefinedFields.push(key)
        }
        if (undefinedFields.length) {
            return res.status(400).json({Error: `Required fields are missing: ${undefinedFields.join(', ')}.`})
        }

        let typeErrors = []
        if (!Number.isInteger(lobby_id)) {
            typeErrors.push('Lobby id is not an integer')
        }
        if (!Array.isArray(maps)) {
            typeErrors.push('Maps is not an array')
        } else if (!maps.length) {
            typeErrors.push('Maps array is empty')
        } else if (maps.some(el => typeof el !== 'string')){
            typeErrors.push('Maps elements are not strings')
        }
        if (typeErrors.length) {
            return res.status(400).json({Error: `${typeErrors.join(', ')}.`})
        }
        if (lobby_id === 2) {
            return res.status(400).json({Error: `Lobby with id ${lobby_id} is inactive. Open a new lobby.`})
        }
        const unknownMap = maps.find(el => el === 'deck16')
        if (unknownMap) {
            return res.status(400).json({Error: `Map ${unknownMap} has not been found.`})
        }

        idCounter += 1
        res.status(202).json({id: idCounter, lobby_id, maps, state: 'IN_PROGRESS', status: 'UNDETERMINED'})
    }
}

const controller = new CsGoServersCrud()

const cSGoServersCrudRouter = express.Router()
cSGoServersCrudRouter.post(url, controller.addServerRequest)

export default cSGoServersCrudRouter
