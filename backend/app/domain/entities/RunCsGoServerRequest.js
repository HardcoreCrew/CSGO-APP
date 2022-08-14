import { 
  JobState, 
  JobStatus, 
} from "../value_objects/index.js"


export default class RunCsGoServerRequest { 
    constructor({
      id = null,
      gameLobby,
      maps,
      serverHost = null,
      serverPort = null,
      serverApiKey = null,
      state = JobState.NEW,
      status = JobStatus.UNDETERMINED,
      messages = null,
      created = null,
    }) {
      this.id = id
      this.gameLobby = gameLobby
      this.maps = maps
      this.serverHost = serverHost
      this.serverPort = serverPort
      this.serverApiKey = serverApiKey
      this.state = state
      this.status = status
      this.messages = messages ? messages : []
      this.created = created
    }
  }
  