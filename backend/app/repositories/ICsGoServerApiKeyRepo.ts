import { 
  CsGoServerApiKey,
 } from '../domain/entities'


export default interface ICsGoServerApiKeyRepo {

  add({apiKey}: {apiKey: CsGoServerApiKey}): void 

  findByNotInUseNowAndIsValid({limit}: {limit: number}): CsGoServerApiKey[]
}
