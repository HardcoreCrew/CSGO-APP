export { default as DotEnvSettings } from "./DotEnvSettings"
import { DependencyContainer } from "tsyringe";
import DotEnvSettings from "./DotEnvSettings"


export default function settingsProvider(container: DependencyContainer): void {
    container.register("ISettings", {useClass: DotEnvSettings})
}
