import { 
  JobState, 
  JobStatus, 
} from "../value_objects"
import CsGoMap from "./CsGoMap";
import CsGoServerApiKey from "./CsGoServerApiKey";
import CsGoServerHost from "./CsGoServerHost";
import CsGoServerPort from "./CsGoServerPort";
import GameLobby from "./GameLobby";


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
