import { DependencyContainer } from "tsyringe"
import BcryptHasher from "./BcryptHasher"


export default function hasherProvider(container: DependencyContainer): void {
    container.register("IHasher", {useClass: BcryptHasher})
}
