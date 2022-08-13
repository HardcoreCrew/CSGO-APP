import cloneDeep from 'lodash.clonedeep'
import { 
  JobState, 
  JobStatus,
 } from '../../domain/value_objects/index.js'


export default class RunCsGoServerLinuxHost { 
  constructor({
    csGoServerRequestRepo, 
    csGoServerHostRepo, 
    csGoServerApiKeyRepo, 
    sshConnector,
    settings,
  }) {
    this._serverRequestRepo = csGoServerRequestRepo
    this._serverHostRepo = csGoServerHostRepo
    this._serverApiKeyRepo = csGoServerApiKeyRepo
    this._connector = sshConnector
    this._srvStartTimeout = parseInt(settings.get('srvStartTimeout'))
    this._serverRequest = null
    this._host = null
    this._apiKey = null
    this._mapsRemaining = []
    this._serverStarted = false
    this._serverStartCheckRequired = true
    this._lastMapChange = null
    this._sshStream = null
    this._serverPort = null
    // TODO: add logger
  }

  execute({inputDto}) {
    const requestId = inputDto.requestId
    let request = this._serverRequestRepo.find({id: requestId})
    if (!request) {
      throw Error(`CS Go server request with id ${requestId} has not been found.`) // TODO: custom exceptions
    }

    const hosts = this._serverHostRepo.findByFreePorts({limit: 1})
    if (!hosts.length) {
      return this._updateFailureServerRequest(
        'There are no available servers right now. Check the status in the servers storage.',
        )
    }

    this._host = hosts[0]
    this._serverPort = this._host.serverPorts.find(port => !port.inUseNow)
    this._updateServerPortAndSave(true)
    // TODO: unit of work commit

    const apiKeys = this._serverApiKeyRepo.findByNotInUseNowAndIsValid({limit: 1})
    if (!apiKeys.length) {
      this._updateServerPortAndSave(false)
      return this._updateFailureServerRequest(
        'There are no available CS GO server api keys. Check the status in the api keys storage.',
        )
    }

    this._apiKey = apiKeys[0]
    this._updateApiKeyAndSave(true)
    // TODO: unit of work commit

    this._serverRequest = request
    this._updateServerRequestAndSave({
      serverHost: this._host,
      serverPort: this._serverPort,
      serverApiKey: this._apiKey,
      msg: 'Game in progress...', 
      state: JobState.IN_PROGRESS,
    })
    // TODO: unit of work commit

    this._mapsRemaining = cloneDeep(request.maps)
    this._serverStarted = false
    this._serverStartCheckRequired = true
    this._sshStream = null

    this._runSSHStream()
  }

  _updateApiKeyAndSave(inUseNow, lastUsed = null) {
    if (lastUsed) this._apiKey.lastUsed = lastUsed
    this._apiKey.inUseNow = inUseNow
    this._serverApiKeyRepo.add({apiKey: this._apiKey})
  }

  _updateServerPortAndSave(inUseNow) {
    this._serverPort.inUseNow = inUseNow
    this._serverHostRepo.add({host: this._host})
  }

  _updateFailureServerRequest(msg) {
    this._updateServerRequestAndSave({
      msg: msg, 
      state: JobState.DONE, 
      status: JobStatus.FAILURE, 
    })
  }

  _updateServerRequestAndSave({
    serverHost = null,
    serverPort = null,
    serverApiKey = null,
    msg = null, 
    state = null, 
    status = null, 
  }) {
    if (msg) {
      console.log(msg);
      this._serverRequest.messages.push(msg) 
    }
    if (serverHost) this._serverRequest.serverHost = serverHost
    if (serverPort) this._serverRequest.serverPort = serverPort
    if (serverApiKey) this._serverRequest.serverApiKey = serverApiKey
    if (state) this._serverRequest.state = state
    if (status) this._serverRequest.status = status
    this._saveServerRequest()
  }

  _saveServerRequest() {
    this._serverRequestRepo.add({request: this._serverRequest})
  }

  _runSSHStream() {
    this._connector.on('ready', () => {
      console.log('Client :: ready');
      this._connector.shell((err, stream) => {
        // TODO: check err stream
        this._sshStream = stream
        stream.on('close', (code) => {
          console.log('stream :: close\n', { code });
        }).on('data', (data) => {
          const dataStr = data.toString()
          if (this._serverStartCheckRequired) {
          setTimeout(
            this._terminateSessionIfServerNotStarted.bind(this), 
            this._srvStartTimeout * 1000, 
            this._srvStartTimeout,
            );
          }
          
          if (dataStr.includes('GC Connection established for server version')) {
            this._serverStarted = true
            this._serverStartCheckRequired = false
            console.log('Server started successfully.');
          }

          if (dataStr.includes('Going to intermission...')) {
            const lastMapChangeInterval = new Date(Date.now() - 180000)
            if ((this._lastMapChange && this._lastMapChange <= lastMapChangeInterval) || 
                !this._lastMapChange) {
              this._lastMapChange = new Date()
              if (!this._mapsRemaining.length) {
                this._terminateSessionOnMatchEnd()
              } else {
              this._changeMap()
              }}
            }
        }).on('exit', (code) => {
          console.log('stream :: exit\n', { code });
          this._connector.end()
          this._updateApiKeyAndSave(false, new Date())
          this._updateServerPortAndSave(false)
          this._updateServerRequestAndSave({
            msg: 'The game has ended. The server has been shut down.',
            state: JobState.DONE,
            status: JobStatus.SUCCESS,
          })

        }).on('error', (e) => {
          console.log('stream :: error\n', { e });
          this._updateServerRequestAndSave({
            msg: `An error occured during the game. This needs to be checked manually. Error message: ${e}`,
            state: JobState.DONE,
            status: JobStatus.FAILURE,
          })
          rej(e);
        });

        this._startServer()

      })})
      .connect({
    host: this._host.externalAddress,
    port: this._host.mgmtPort,
    username: this._host.credentials.username,
    password: this._host.credentials.password,
  })
  }

  _startServer() {
    console.log('Maps to be played in this match:', this._mapsRemaining)
    const freePort = this._serverPort.port
    const ipAddress = this._host.internalIpAddress
    const screenName = `csgo-srv-screen-${ipAddress}-${freePort}`
    const createScreenCmd = `screen -S ${screenName}`
    const startServerCmd = `./srcds_run -game csgo -console -usercon +map ${this._mapsRemaining[0].name} \
+port ${freePort} +sv_setsteamaccount ${this._apiKey.key} -tickrate 128 +ip ${ipAddress}`

    this._sendCmd(createScreenCmd, 5000)
    this._sendCmd(startServerCmd, 10000)
    this._mapsRemaining.shift()
  }

  _terminateSessionIfServerNotStarted(seconds) {
    if (!this._serverStarted) {
      this._updateFailureServerRequest(
        `The server has not started after ${seconds} seconds. Check the status manually.`
      )
      console.log('Exiting from the screen and disconnecting from the server...')
      this._sendCmd('exit', 5000)
      this._sendCmd('exit', 20000)
  }}
  
  _terminateSessionOnMatchEnd() {
    this._sendCmd('say The match has ended. The server is going to shut down.', 5000)
    this._sendCmd('exit', 15000)
    this._sendCmd('exit', 40000)
    this._sendCmd('exit', 50000)
}
  
  _changeMap() {
    const nextMap = this._mapsRemaining[0].name
    this._sendCmd(`say Changing map to ${nextMap}.`, 5000)
    this._sendCmd(`changelevel ${nextMap}`, 15000)
    this._mapsRemaining.shift()
  }

  _sendCmd(cmd, beforeDelay) {
    if (cmd.slice(0, 3) === 'say') console.log(cmd.slice(4))
    setTimeout(() => {  this._sshStream.write(`${cmd} \n`) }, beforeDelay)
  }
}
