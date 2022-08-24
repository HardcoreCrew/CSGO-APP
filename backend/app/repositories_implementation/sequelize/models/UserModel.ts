import {
    Model,
    Sequelize,
} from 'sequelize'


export default class UserModel extends Model {
    declare id: number
    declare nickname: string
    declare login: string
    declare password: string
    declare email: string
    declare steam_id: string

    static initialize(sequelize: Sequelize, dataTypes: any): void {
        UserModel.init({
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true
            },
            nickname: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            login: {
                type: dataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: dataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            steam_id: {
                type: dataTypes.STRING,
                unique: true,
                allowNull: false,
            }
        }, {
            sequelize,
            tableName: 'user',
            underscored: true,
        }
        )
    }
}
