import { injectable, inject } from "tsyringe"
import { 
    doc,
    BASE_URL,
 } from './UsersCrudDoc'
 import { 
    Request, 
    Response, 
    Router,
} from 'express'
import { AddUserInputDto } from '../../../users_management/dtos'
import { 
    plainToClass,
    instanceToPlain, 
} from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { IAddUser } from '../../../users_management/use_cases'
import IRegistrableEndpoint from "../IRegistrableEndpoint"
import { 
    ObjectAlreadyExists,
} from "../../../domain/errors"


const usersMock = Array.from({length: 20}, (_, i) => {
    return {
    id: i+1, 
    avatar_link: `https://avatar-${i+1}.com`, 
    nick: `player-${i+1}`, 
    clan_tag: `clan-${i+1}`, 
    account_level: i+2
    }
})


@injectable()
export default class UsersCrud implements IRegistrableEndpoint {
    static doc = doc

    constructor(
        @inject("IAddUser") private addUserUC: IAddUser,
      ) {}

    public registerMethods(router: Router): void {
        router.get(BASE_URL, (req, res) => this.getAllUsers(req, res))
        router.post(BASE_URL, (req, res) => this.addUser(req, res))
    }

    public getAllUsers(req: Request, res: Response) {
        const { ids } = req.query
        if (!ids) {
            return res.status(200).json(usersMock)
        }
        if (typeof ids !== "string") {
            return res.status(400).json({errors: ["Query param 'ids' has to be of type string"]})
        }

        const idsArray = ids.split(',').map(id => parseInt(id))
        if (idsArray.includes(NaN)) {
            return res.status(400).json({errors: ['Ids are not integers']})
        }

        let foundUsers = usersMock.filter(user => idsArray.includes(user.id))
        res.status(200).json(foundUsers)
    }

    public async addUser(req: Request, res: Response) {
        const inputDto = plainToClass(AddUserInputDto, req.body)
        try {
            await validateOrReject(inputDto, 
                {
                    forbidUnknownValues: true, 
                    whitelist: true, 
                    validationError: { target: false },
                }
            )
        } catch(errors: any) {
            const errorMsg: any = []
            errors.map((error: { constraints: any }) => 
                Object.values(error.constraints).forEach(value => errorMsg.push(value)))
            return res.status(400).json({errors: errorMsg})
            }
        
        try {
            const outputDto = await this.addUserUC.execute(inputDto)
            return res.status(200).json(instanceToPlain(outputDto))
        } catch(e: any) {
            if (e instanceof ObjectAlreadyExists) { 
                return res.status(400).json({errors: [e.message]})
              }
              return res.status(500).json({errors: [e.message]})
        }
    }
}
