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
import { 
    AddUserInputDto, 
    GetAllUsersInputDto, 
} from '../../../users_management/dtos'
import {
    plainToInstance,
    instanceToPlain, 
} from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { IAddUser } from '../../../users_management/use_cases'
import IRegistrableEndpoint from "../IRegistrableEndpoint"
import { 
    ObjectAlreadyExists,
} from "../../../domain/errors"
import { 
    IGetAllUsersQuery,
} from "../../../users_management/queries"
import { Id } from "../../../domain"


@injectable()
export default class UsersCrud implements IRegistrableEndpoint {
    constructor(
        @inject("IAddUser") private addUserUC: IAddUser,
        @inject("IGetAllUsersQuery") private getAllUsersQuery: IGetAllUsersQuery,
      ) {}

    get doc(): any {
        return doc
    }

    public registerMethods(router: Router): void {
        router.get(BASE_URL, (req, res) => this.getAllUsers(req, res))
        router.post(BASE_URL, (req, res) => this.addUser(req, res))
    }

    public async getAllUsers(req: Request, res: Response) {
        const query: { 
            page: string | number, 
            rows: string| number,
            ids: string | Id | any,
        } = Object.create(req.query)
        if (query.page) {
            query.page = parseInt(query.page as string)
        }
        if (query.rows) {
            query.rows = parseInt(query.rows as string)
        }
        if (query.ids) {
            query.ids = query.ids.split(',').map((id: string) => parseInt(id))
        }

        const inputDto = plainToInstance(GetAllUsersInputDto, query)
        const errors: string[] = await this.validateRequest(inputDto)
        if (errors.length) {
            return res.status(400).json({errors: errors})
        }

        try {
            const outputDto = await this.getAllUsersQuery.get(inputDto)
            return res.status(200).json(instanceToPlain(outputDto))
        } catch(e: any) {
            return res.status(500).json({errors: [e.message]})
        }
    }

    public async addUser(req: Request, res: Response) {
        const inputDto = plainToInstance(AddUserInputDto, req.body)
        const errors: string[] = await this.validateRequest(inputDto)
        if (errors.length) {
            return res.status(400).json({errors: errors})
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

    private async validateRequest(inputDto: any): Promise<string[]> {
        try {
            await validateOrReject(inputDto, 
                {
                    forbidUnknownValues: true, 
                    whitelist: true, 
                    validationError: { target: false },
                }
            )
        } catch(errors: any) {
            const errorMessages = [] as string[]
            errors.map((error: { constraints: any }) => 
                Object.values(error.constraints).forEach(value => errorMessages.push(value as string)))
            return errorMessages
            }
        return []
    }
}
