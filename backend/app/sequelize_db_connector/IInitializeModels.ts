import { Sequelize } from 'sequelize'


export default interface IInitializeModels {

    execute(sequelize: Sequelize): void
}
