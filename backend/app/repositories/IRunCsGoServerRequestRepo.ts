import { 
  RunCsGoServerRequest, 
} from '../domain/entities'


export default interface IRunCsGoServerRequestRepo { 

  add({request}: {request: RunCsGoServerRequest}): void 

  find({id}: {id: number}): RunCsGoServerRequest | null
}
