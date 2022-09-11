import { 
    doc,
    BASE_URL,
 } from './UsersCrudDoc'
 import { 
    Request, 
    Response, 
    Router,
} from 'express'


const usersMock = Array.from({length: 20}, (_, i) => {
    return {
    id: i+1, 
    avatar_link: `https://avatar-${i+1}.com`, 
    nick: `player-${i+1}`, 
    clan_tag: `clan-${i+1}`, 
    account_level: i+2
    }
})


class UsersCrud {

    get doc() {
        return doc
    }

    registerMethods(router: Router) {
        router.get(BASE_URL, this.getAllUsers)
    }

    getAllUsers(req: Request, res: Response) {
        const { ids } = req.query
        if (!ids) {
            return res.status(200).json(usersMock)
        }
        if (typeof ids !== "string") {
            return res.status(400).json({Error: "Query param 'ids' has to be of type string"})
        }

        const idsArray = ids.split(',').map(id => parseInt(id))
        if (idsArray.includes(NaN)) {
            return res.status(400).json({Error: 'Ids are not integers'})
        }

        let foundUsers = usersMock.filter(user => idsArray.includes(user.id))
        res.status(200).json(foundUsers)
    }
}

export default new UsersCrud()
