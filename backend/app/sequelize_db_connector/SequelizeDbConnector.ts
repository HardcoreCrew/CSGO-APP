import { singleton, injectable, inject } from "tsyringe"
import { Sequelize } from 'sequelize'
import { ISettings } from '../settings'
import IInitializeModels from './IInitializeModels'


@singleton()
@injectable()
export default class SequelizeDbConnector {
    private _sequelize: Sequelize
  
    constructor(
        @inject("ISettings") private settings: ISettings,
        @inject("IInitializeModels") private initializeModelsUc: IInitializeModels,
    ) {
        const getSetting = this.settings.get
        const dbString = this.getDbString(getSetting)
        this._sequelize = new Sequelize(dbString)
        this.initializeModelsUc.execute(this._sequelize)
        this.createTablesIfDev(getSetting('envName'))
    }

    private getDbString(getSetting: Function): string {
        const dialect = getSetting('dbDialect')
        const user = getSetting('dbUser')
        const pass = getSetting('dbPassword')
        const host = getSetting('dbHost')
        const port = getSetting('dbPort')
        const dbName = getSetting('dbName')
        let dbString = `${dialect}://`
        dbString += user ? user : ""
        dbString += `:${pass}` ? pass : ""
        dbString += `@${host}` ? host : ""
        dbString += `:${port}` ? port : ""
        dbString += `/${dbName}`
        return dbString
    }

    private async createTablesIfDev(envName: string) {
        if (envName === 'DEV') {
            await this._sequelize.sync()
        }
    }

    get sequelize(): Sequelize {
        return this._sequelize
    }
}
