import { injectable, inject } from "tsyringe"
import * as jwt from "jsonwebtoken"
import { 
    doc,
    BASE_URL,
    LOGIN_USER_URL,
 } from './UsersCrudDoc'
 import { 
    NextFunction,
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
import { ISettings } from "../../../settings"


@injectable()
export default class UsersCrud implements IRegistrableEndpoint {
    private tokenSecret: string
    private tokenTimeout: string

    constructor(
        @inject("ISettings") private settings: ISettings,
        @inject("IAddUser") private addUserUC: IAddUser,
        @inject("IVerifyUserPassword") private verifyUserPasswordUC: IVerifyUserPassword,
        @inject("IGetAllUsersQuery") private getAllUsersQuery: IGetAllUsersQuery,
        @inject("IProblemDetailsFactory") private errorsFactory: IProblemDetailsFactory,
      ) {
        this.tokenSecret = settings.get('accessTokenSecret')
        this.tokenTimeout = settings.get('accessTokenTimeout')
      }

    get doc(): any {
        return doc
    }

    public registerMethods(router: Router): void {
        router.get(BASE_URL, authenticateToken(this.tokenSecret), (req, res) => this.getAllUsers(req, res))
        router.post(BASE_URL, authenticateToken(this.tokenSecret), (req, res) => this.addUser(req, res))
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
            if (!outputDto.isPasswordMatch) return res.status(401).json()

            const token: string = this.getJWT(inputDto.email)
            res.cookie('Access-Token', token, {
                httpOnly: true,
                secure: this.settings.get('envName') === 'PROD',
                sameSite: 'strict',
                maxAge: parseInt(this.tokenTimeout)
              })
              .status(200).json()
        } catch(e: any) {
            if (e instanceof MissingData) { 
                return res.status(401).json()
              }
            return res.status(500).json(
                this.errorsFactory.getInternalServerError({detail: e.message})
                )
        }
    }

    private getJWT(userEmail: string): string {
        const user = {email: userEmail}
        return jwt.sign(
            user, 
            this.tokenSecret,
            {
                expiresIn: this.tokenTimeout
            },
        )
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


const authenticateToken = (tokenSecret: string) => 
    (req: Request, res: Response, next: NextFunction) => {
        const cookie: string | undefined = req.headers.cookie
        if (!cookie) {
            return res.status(403).json()
          }
        try {
            jwt.verify(cookie.slice(13), tokenSecret)
            next()
        } catch {
            return res.status(403).json()
        }
    }
