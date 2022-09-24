import { DependencyContainer } from 'tsyringe'
import UsersCrud from './UsersCrud'


export function v1EndpointsProvider(container: DependencyContainer): void {
    container.register("IRegistrableEndpoint", {useClass: UsersCrud})
}
