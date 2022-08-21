import { 
  CsGoServerHost, 
 } from '../domain/entities'


 export default interface ICsGoServerHostRepo {

  add({host}: {host: CsGoServerHost}): void

  findByFreePorts({limit}: {limit: number}): CsGoServerHost[]
}
