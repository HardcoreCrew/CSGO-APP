import { Router } from "express"


export default interface IRegistrableEndpoint {
  readonly doc: any

  registerMethods(router: Router): void
}
