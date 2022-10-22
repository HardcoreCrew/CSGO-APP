import { DependencyContainer } from "tsyringe"
import { 
    AddUser, 
    VerifyUserPassword,
} from "./use_cases_implementation"


export function usersManagementProvider(container: DependencyContainer): void {
    container.register("IAddUser", {useClass: AddUser})
    container.register("IVerifyUserPassword", {useClass: VerifyUserPassword})
}
