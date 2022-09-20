import { Router } from "express"


export default interface IRegistrableEndpoint { 

  registerMethods(router: Router): void
}
