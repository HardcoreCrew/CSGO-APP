import lodash from 'lodash'
const { cloneDeep } = lodash;
import { 
  CsGoMap,
  CsGoServerApiKey,
  CsGoServerHost,
  CsGoServerPort,
  RunCsGoServerRequest,
 } from '../../domain/entities/index.js'
import { 
  JobState, 
  JobStatus,
 } from '../../domain/value_objects/index.js'
import { 
  ICsGoServerApiKeyRepo,
  ICsGoServerHostRepo,
  IRunCsGoServerRequestRepo,
 } from '../../repositories/index.js'
import { ISettings } from '../../settings/index.js'
import { RunCsGoServerLinuxHostInputDto } from '../dtos/index.js'
import { IRunCsGoServerLinuxHost } from '../use_cases/index.js'


export default class RunCsGoServerLinuxHost implements IRunCsGoServerLinuxHost {
  private sshStream: any
  private serverRequest: RunCsGoServerRequest
  private host: CsGoServerHost
  private apiKey: CsGoServerApiKey
  private serverPort: CsGoServerPort
  private serverStarted: boolean = false
  private mapsRemaining: CsGoMap[]
  // TODO: add logger

  constructor(
    private serverRequestRepo: IRunCsGoServerRequestRepo,
    private serverHostRepo: ICsGoServerHostRepo, 
    private serverApiKeyRepo: ICsGoServerApiKeyRepo, 
    private connector: any, 
    private settings: ISettings, 
  ) {}

  public execute({inputDto}: {inputDto: RunCsGoServerLinuxHostInputDto}): void {
    const requestId = inputDto.requestId
    let request = this.serverRequestRepo.find({id: requestId})
    if (!request) {
      throw Error(`CS Go server request with id ${requestId} has not been found.`) // TODO: custom exceptions
    }
    this.serverRequest = request

    const hosts = this.serverHostRepo.findByFreePorts({limit: 1})
    if (!hosts.length) {
      return this.updateFailureServerRequest(
        'There are no available servers right now. Check the status in the servers storage.',
        )
    }

    this.host = hosts[0]
    this.serverPort = this.host.serverPorts.filter(port => !port.inUseNow)[0]
    this.updateServerPortAndSave(true)
    // TODO: unit of work commit

    const apiKeys = this.serverApiKeyRepo.findByNotInUseNowAndIsValid({limit: 1})
    if (!apiKeys.length) {
      this.updateServerPortAndSave(false)
      return this.updateFailureServerRequest(
        'There are no available CS GO server api keys. Check the status in the api keys storage.',
        )
    }

    this.apiKey = apiKeys[0]
    this.updateApiKeyAndSave(true)
    // TODO: unit of work commit

    this.updateServerRequestAndSave(
      'Game in progress...', 
      JobState.IN_PROGRESS,
      null,
      this.host,
      this.serverPort,
      this.apiKey,
    )
    // TODO: unit of work commit

    this.mapsRemaining = cloneDeep(request.maps)
    throw Error('doszlo kurwa')
    this.runSSHStream()
  }

  private updateApiKeyAndSave(inUseNow: boolean, lastUsed: Date | null = null): void {
    if (lastUsed) this.apiKey.lastUsed = lastUsed
    this.apiKey.inUseNow = inUseNow
    this.serverApiKeyRepo.add({apiKey: this.apiKey})
  }

  private updateServerPortAndSave(inUseNow: boolean): void {
    this.serverPort.inUseNow = inUseNow
    this.serverHostRepo.add({host: this.host})
  }

  private updateFailureServerRequest(msg: string) {
    this.updateServerRequestAndSave(
      msg, 
      JobState.DONE, 
      JobStatus.FAILURE, 
  )
  }

  private updateServerRequestAndSave(
    msg: string | null = null,
    state: JobState | null = null, 
    status: JobStatus | null = null, 
    serverHost: CsGoServerHost | null = null,
    serverPort: CsGoServerPort | null = null,
    serverApiKey: CsGoServerApiKey | null = null,
  ) {
    if (msg) {
      console.log(msg);
      this.serverRequest.messages.push(msg) 
    }
    if (serverHost) this.serverRequest.serverHost = serverHost
    if (serverPort) this.serverRequest.serverPort = serverPort
    if (serverApiKey) this.serverRequest.serverApiKey = serverApiKey
    if (state) this.serverRequest.state = state
    if (status) this.serverRequest.status = status

    this.serverRequestRepo.add({request: this.serverRequest})
  }

  private runSSHStream() {
    const srvStartTimeout: number = parseInt(this.settings.get({setting: 'srvStartTimeout'}))
    let serverStartCheckRequired = true
    let lastMapChange: Date | null = null

    this.connector.on('ready', () => {
      console.log('Client :: ready');
      this.connector.shell((err: any, stream: any) => {
        // TODO: check err stream
        this.sshStream = stream
        stream.on('close', (code: number) => {
          console.log('stream :: close\n', { code });
        }).on('data', (data: any) => {
          const dataStr = data.toString()
          if (serverStartCheckRequired) {
            setTimeout(
              this.terminateSessionIfServerNotStarted.bind(this), 
              srvStartTimeout * 1000,
              srvStartTimeout,
              )
          }
          
          if (dataStr.includes('GC Connection established for server version') && 
          !this.serverStarted) {
            this.serverStarted = true
            serverStartCheckRequired = false
            console.log('Server started successfully.');
          }

          if (dataStr.includes('Going to intermission...')) {
            const lastMapChangeInterval = new Date(Date.now() - 180000)
            if ((lastMapChange && lastMapChange <= lastMapChangeInterval) || 
                !lastMapChange) {
              lastMapChange = new Date()
              this.changeMapOrEndMatch()
            }
          }
          
        }).on('exit', (code: number) => {
          console.log('stream :: exit\n', { code });
          this.connector.end()
          this.updateApiKeyAndSave(false, new Date())
          this.updateServerPortAndSave(false)
          this.updateServerRequestAndSave(
            'The game has ended. The server has been shut down.',
            JobState.DONE,
            JobStatus.SUCCESS,
          )

        }).on('error', (e: Error) => {
          console.log('stream :: error\n', { e });
          this.updateServerRequestAndSave(
            `An error occured during the game. This needs to be checked manually. Error message: ${e}`,
            JobState.DONE,
            JobStatus.FAILURE,
          )
        });

        this.startServer()

      })})
      .connect({
    host: this.host.externalAddress,
    port: this.host.mgmtPort,
    username: this.host.credentials.username,
    password: this.host.credentials.password,
  })
  }

  private startServer() {
    console.log('Maps to be played in this match:', this.mapsRemaining)
    const freePort = this.serverPort.port
    const ipAddress = this.host.internalIpAddress
    const screenName = `csgo-srv-screen-${ipAddress}-${freePort}`
    const createScreenCmd = `screen -S ${screenName}`
    const startServerCmd = `./srcds_run -game csgo -console -usercon +map ${this.mapsRemaining[0].name} \
+port ${freePort} +sv_setsteamaccount ${this.apiKey.key} -tickrate 128 +ip ${ipAddress}`

    this.sendCmd(createScreenCmd, 5000)
    this.sendCmd(startServerCmd, 10000)
    this.mapsRemaining.shift()
  }

  private terminateSessionIfServerNotStarted(srvStartTimeout: number) {
    if (this.serverStarted) {
      return
  }
    this.updateFailureServerRequest(
      `The server has not started after ${srvStartTimeout} seconds. Check the status manually.`
    )
    console.log('Exiting from the screen and disconnecting from the server...')
    this.sendCmd('exit', 5000)
    this.sendCmd('exit', 20000)    
  }

  private changeMapOrEndMatch() {
    if (!this.mapsRemaining.length) {
      this.terminateSessionOnMatchEnd()
    } else {
    this.changeMap()
    }
  }

  private terminateSessionOnMatchEnd() {
    this.sendCmd('say The match has ended. The server is going to shut down.', 5000)
    this.sendCmd('exit', 15000)
    this.sendCmd('exit', 40000)
    this.sendCmd('exit', 50000)
  }
  
  private changeMap() {
    const nextMap = this.mapsRemaining[0].name
    this.sendCmd(`say Changing map to ${nextMap}.`, 5000)
    this.sendCmd(`changelevel ${nextMap}`, 15000)
    this.mapsRemaining.shift()
  }

  private sendCmd(cmd: string, beforeDelay: number) {
    if (cmd.slice(0, 3) === 'say') console.log(cmd.slice(4))
    setTimeout(() => {  this.sshStream.write(`${cmd} \n`) }, beforeDelay)
  }
}
