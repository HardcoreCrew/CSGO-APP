import { DependencyContainer } from "tsyringe"
import { 
    sequelizeQueriesProvider, 
} from "./sequelize"


export function queriesProvider(container: DependencyContainer): void {
    sequelizeQueriesProvider(container)
}
