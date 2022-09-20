import { DependencyContainer } from 'tsyringe'
import cSGoServersCrudController from './CsGoServersCrud'
import UsersCrud from './UsersCrud'

export default [
    cSGoServersCrudController,
    UsersCrud,
]


export function v1EndpointsProvider(container: DependencyContainer): void {
    container.register("IRegistrableEndpoint", {useClass: UsersCrud})
}
