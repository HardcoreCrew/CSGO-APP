import { 
  CsGoServerHost, 
  CsGoServerPort, 
  CsGoServerCredentials,
 } from '../domain/entities/index.js'


export default class CsGoServerHostRepoMock {
  constructor({
    settings,
    arePortsAvailable = true, 
  }) {
    this._settings = settings
    this._arePortsAvailable = arePortsAvailable
  }

  add({host}) {
    console.log('SAVING HOST');
    console.log(host);
  }

  findByFreePorts({limit}) {
    const settings = this._settings.get
    if (this._arePortsAvailable) {
        return [
          new CsGoServerHost({
            id: 1,
            name: 'vorczu-srv',
            externalAddress: settings('srvExternalAddress'),
            internalIpAddress: settings('srvInternalAddress'),
            mgmtPort: parseInt(settings('srvMgmtPort')),
            serverPorts: [
              new CsGoServerPort({port: parseInt(settings('srvPort1')), inUseNow: true}), 
              new CsGoServerPort({port: parseInt(settings('srvPort2')), inUseNow: true}), 
              new CsGoServerPort({port: parseInt(settings('srvPort3'))}),
            ],
            credentials: new CsGoServerCredentials({
              id: 1,
              credentialsName: 'test-creds',
              username: settings('srvUsername'),
              password: settings('srvPassword'),
            }),
          }),
        ]
    }
    return []
  }
}
