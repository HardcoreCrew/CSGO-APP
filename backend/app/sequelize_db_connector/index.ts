import { DependencyContainer } from "tsyringe"
import InitializeModels from "./InitializeModels"
import SequelizeDbConnector from "./SequelizeDbConnector"
import SequelizeStorage from "./SequelizeStorage"
export { default as ISequelizeModelType } from "./ISequelizeModelType"
export { default as SequelizeStorage } from "./SequelizeStorage"


export function sequelizeDbConnectorProvider(container: DependencyContainer): void {
    container.register("IInitializeModels", {useClass: InitializeModels})
    container.register(SequelizeDbConnector, {useClass: SequelizeDbConnector})
    container.register(SequelizeStorage, {useClass: SequelizeStorage})
    container.register("ISequelize", {useFactory: (container: DependencyContainer) => {
        return container.resolve(SequelizeDbConnector).sequelize
    }})
}
