import { DependencyContainer } from "tsyringe"
import ProblemDetailsFactory from "./ProblemDetailsFactory"

export { default as IProblemDetailsFactory } from "./IProblemDetailsFactory"


export function errorResponsesProvider(container: DependencyContainer): void {
    container.register("IProblemDetailsFactory", {useClass: ProblemDetailsFactory})
}
