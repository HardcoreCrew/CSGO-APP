import { DependencyContainer } from "tsyringe"
import SQLGetAllUsersQuery from "./SQLGetAllUsersQuery"


export function sequelizeUsersManagementQueriesProvider(container: DependencyContainer): void {
    container.register("IGetAllUsersQuery", {useClass: SQLGetAllUsersQuery})
}
