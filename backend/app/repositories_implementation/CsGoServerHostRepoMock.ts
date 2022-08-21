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
        settings({setting: 'srvExternalAddress'}),
        settings({setting: 'srvInternalAddress'}),
        parseInt(settings({setting: 'srvMgmtPort'})),
        [
          new CsGoServerPort(parseInt(settings({setting: 'srvPort1'})), true), 
          new CsGoServerPort(parseInt(settings({setting: 'srvPort2'})), true), 
          new CsGoServerPort(parseInt(settings({setting: 'srvPort3'}))),
        ],
        new CsGoServerCredentials(
          1,
          'test-creds',
          settings({setting: 'srvUsername'}),
          settings({setting: 'srvPassword'}),
        ),
      ),
    ]
  }
}
