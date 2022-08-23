import { 
  CsGoServerHost, 
  CsGoServerPort, 
  CsGoServerCredentials,
 } from '../domain/entities'
import {
  ICsGoServerHostRepo,
 } from '../repositories';
import { ISettings } from '../settings';


export default class CsGoServerHostRepoMock implements ICsGoServerHostRepo {
  constructor(
    private settings: ISettings,
    private arePortsAvailable: boolean = true, 
  ) {}

  add({host}: {host: CsGoServerHost}): void {
    console.log('SAVING HOST');
    console.log(host);
  }

  findByFreePorts({limit}: {limit: number}): CsGoServerHost[] {
    const settings = this.settings.get
    if (!this.arePortsAvailable) {
      return []
    }
    return [
      new CsGoServerHost(
        1,
        'vorczu-srv',
        settings('srvExternalAddress'),
        settings('srvInternalAddress'),
        parseInt(settings('srvMgmtPort')),
        [
          new CsGoServerPort(parseInt(settings('srvPort1')), true), 
          new CsGoServerPort(parseInt(settings('srvPort2')), true), 
          new CsGoServerPort(parseInt(settings('srvPort3'))),
        ],
        new CsGoServerCredentials(
          1,
          'test-creds',
          settings('srvUsername'),
          settings('srvPassword'),
        ),
      ),
    ]
  }
}
