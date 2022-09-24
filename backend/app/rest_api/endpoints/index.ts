export { default as IRegistrableEndpoint } from "./IRegistrableEndpoint"
import { DependencyContainer } from "tsyringe"
import { 
    v1EndpointsProvider, 
} from './v1'


export function endpointsProvider(container: DependencyContainer): void {
    v1EndpointsProvider(container)
}
