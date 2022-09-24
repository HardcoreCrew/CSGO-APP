import { DependencyContainer } from "tsyringe"
import { 
    sequelizeUsersManagementQueriesProvider, 
} from "./users_management"


export function sequelizeQueriesProvider(container: DependencyContainer): void {
    sequelizeUsersManagementQueriesProvider(container)
}
