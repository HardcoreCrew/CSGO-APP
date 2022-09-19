import { DependencyContainer } from "tsyringe"
import { 
    SQLUserMapper, 
} from "./mappers"
import { 
    UserModel, 
} from "./models"
import { 
    SQLUserRepo, 
} from "./repositories"


export function sequelizeRepositoriesProvider(container: DependencyContainer): void {
    container.register("ISequelizeModelType", {useFactory: () => { return UserModel }})
    container.register(SQLUserMapper, {useClass: SQLUserMapper})
    container.register("IUserRepo", {useClass: SQLUserRepo})
}
