import { 
  CsGoServerApiKey,
 } from '../domain/entities/index.js'


export default interface ICsGoServerApiKeyRepo {

  add({apiKey}: {apiKey: CsGoServerApiKey}): void 

  findByNotInUseNowAndIsValid({limit}: {limit: number}): CsGoServerApiKey[]
}
