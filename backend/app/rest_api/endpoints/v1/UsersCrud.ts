import { injectable, inject } from "tsyringe"
import { 
    doc,
    BASE_URL,
    LOGIN_USER_URL,
 } from './UsersCrudDoc'
 import { 
    Request, 
    Response, 
    Router,
} from 'express'
import { 
    AddUserInputDto, 
    GetAllUsersInputDto,
    VerifyUserPasswordInputDto, 
} from '../../../users_management/dtos'
import {
    plainToInstance,
    instanceToPlain, 
} from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { 
    IAddUser,
    IVerifyUserPassword,
} from '../../../users_management/use_cases'
import IRegistrableEndpoint from "../IRegistrableEndpoint"
import { 
    MissingData,
    ObjectAlreadyExists,
} from "../../../domain/errors"
import { 
    IGetAllUsersQuery,
} from "../../../users_management/queries"
import { Id } from "../../../domain"
import { 
    IProblemDetailsFactory, 
} from "../../error_responses"


@injectable()
export default class UsersCrud implements IRegistrableEndpoint {
    constructor(
        @inject("IAddUser") private addUserUC: IAddUser,
        @inject("IVerifyUserPassword") private verifyUserPasswordUC: IVerifyUserPassword,
        @inject("IGetAllUsersQuery") private getAllUsersQuery: IGetAllUsersQuery,
        @inject("IProblemDetailsFactory") private errorsFactory: IProblemDetailsFactory,
      ) {}

    get doc(): any {
        return doc
    }

    public registerMethods(router: Router): void {
        router.get(BASE_URL, (req, res) => this.getAllUsers(req, res))
        router.post(BASE_URL, (req, res) => this.addUser(req, res))
        router.post(LOGIN_USER_URL, (req, res) => this.loginUser(req, res))
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
        const errorObject = await this.validateRequest(inputDto)
        if (Object.keys(errorObject).length) {
            return res.status(400).json(this.errorsFactory.getValidationError(errorObject))
        }

        try {
            const outputDto = await this.getAllUsersQuery.get(inputDto)
            return res.status(200).json(instanceToPlain(outputDto))
        } catch(e: any) {
            return res.status(500).json(
                this.errorsFactory.getInternalServerError({detail: e.message})
                )
        }
    }

    public async addUser(req: Request, res: Response) {
        const inputDto = plainToInstance(AddUserInputDto, req.body)
        const errorObject = await this.validateRequest(inputDto)
        if (Object.keys(errorObject).length) {
            return res.status(400).json(this.errorsFactory.getValidationError(errorObject))
        }
        
        try {
            const outputDto = await this.addUserUC.execute(inputDto)
            return res.status(200).json(instanceToPlain(outputDto))
        } catch(e: any) {
            if (e instanceof ObjectAlreadyExists) { 
                return res.status(400).json(
                    this.errorsFactory.getCustomError({title: e.message})
                )
              }
            return res.status(500).json(
                this.errorsFactory.getInternalServerError({detail: e.message})
                )
        }
    }

    public async loginUser(req: Request, res: Response) {
        const inputDto = plainToInstance(VerifyUserPasswordInputDto, req.body)
        const errorObject = await this.validateRequest(inputDto)
        if (Object.keys(errorObject).length) {
            return res.status(400).json(this.errorsFactory.getValidationError(errorObject))
        }
        
        try {
            const outputDto = await this.verifyUserPasswordUC.execute(inputDto)
            return res.status(200).json(instanceToPlain(outputDto))
        } catch(e: any) {
            if (e instanceof MissingData) { 
                return res.status(404).json(
                    this.errorsFactory.getNotFoundError({email: e.message})
                )
              }
            return res.status(500).json(
                this.errorsFactory.getInternalServerError({detail: e.message})
                )
        }
    }

    private async validateRequest(inputDto: any): Promise<any> {
        try {
            await validateOrReject(inputDto, 
                {
                    forbidUnknownValues: true, 
                    whitelist: true, 
                    validationError: { target: false },
                    stopAtFirstError: true,
                }
            )
        } catch(errors: any) {
            const errorObject: any = {}
            errors.forEach((error: { property: string; constraints: any }) => {
                errorObject[error.property] = Object.values(error.constraints)[0]
            })
            return errorObject
            }
        return {}
    }
}
