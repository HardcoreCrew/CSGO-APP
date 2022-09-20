import { DependencyContainer } from "tsyringe"
import { sequelizeRepositoriesProvider } from "./sequelize"
export { default as RunCsGoServerRequestRepoMock } from "./RunCsGoServerRequestRepoMock"
export { default as CsGoServerHostRepoMock } from "./CsGoServerHostRepoMock"
export { default as CsGoServerApiKeyRepoMock } from "./CsGoServerApiKeyRepoMock"


export function repositoriesProvider(container: DependencyContainer): void {
    sequelizeRepositoriesProvider(container)
}
