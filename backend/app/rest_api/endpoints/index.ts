export { default as IRegistrableEndpoint } from "./IRegistrableEndpoint"
import { DependencyContainer } from "tsyringe"
import v1Controllers, { v1EndpointsProvider } from './v1'

export default [
    ...v1Controllers,
]


export function endpointsProvider(container: DependencyContainer): void {
    v1EndpointsProvider(container)
}
