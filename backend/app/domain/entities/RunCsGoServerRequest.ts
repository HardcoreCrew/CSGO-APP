import { 
  JobState, 
  JobStatus, 
} from "../value_objects/index.js"
import CsGoMap from "./CsGoMap.js";
import CsGoServerApiKey from "./CsGoServerApiKey.js";
import CsGoServerHost from "./CsGoServerHost.js";
import CsGoServerPort from "./CsGoServerPort.js";
import GameLobby from "./GameLobby.js";


export default class RunCsGoServerRequest {
  constructor(
    public id: number,
    public gameLobby: GameLobby,
    public maps: CsGoMap[],
    public created: Date,
    public serverHost: CsGoServerHost | null = null,
    public serverPort: CsGoServerPort | null = null,
    public serverApiKey: CsGoServerApiKey | null = null,
    public state: JobState = JobState.NEW,
    public status: JobStatus = JobStatus.UNDETERMINED,
    public messages: string[] = [],
  ) {}
}
