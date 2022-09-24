import { singleton, injectable, inject, injectAll } from "tsyringe"
import { ISettings } from "../settings"
import { IRegistrableEndpoint } from './endpoints'


@singleton()
@injectable()
export default class SwaggerDocs {
    private _doc: any

    constructor(
        @injectAll("IRegistrableEndpoint") endpoints: IRegistrableEndpoint[],
        @inject("ISettings") settings: ISettings,
    ) {
      this.setupDocs(endpoints, settings)
    }

    private setupDocs(endpoints: IRegistrableEndpoint[], settings: ISettings): void {
      const apiBaseUrl: string = settings.get('apiBaseUrl') || 'http://localhost:3000'
      this._doc = {
        openapi: "3.0.3",
        info: {
          title: "CS GO API",
          description: "API for managing CS GO players, servers and matches",
          version: "1.0.0",
        },
        servers: [
          {
            url: `${apiBaseUrl}/api`
          }
        ],
        paths: Object.assign({}, ...endpoints.map(endpoint => endpoint.doc))
      }
    }

    get doc(): any {
      return this._doc
    }
}
