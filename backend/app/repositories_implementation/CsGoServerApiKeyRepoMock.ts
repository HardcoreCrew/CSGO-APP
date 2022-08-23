import { 
  CsGoServerApiKey,
 } from '../domain/entities'
import {
  ICsGoServerApiKeyRepo,
 } from '../repositories';
import { ISettings } from '../settings';


export default class CsGoServerApiKeyRepoMock implements ICsGoServerApiKeyRepo {
  constructor(
    private settings: ISettings,
    private areApiKeysAvailable: boolean = true, 
  ) {}

  add({apiKey}: {apiKey: CsGoServerApiKey}): void {
    console.log('SAVING API KEY');
    console.log(apiKey);
  }

  findByNotInUseNowAndIsValid({limit}: {limit: number}): CsGoServerApiKey[] {
    const settings = this.settings.get
    if (!this.areApiKeysAvailable) {
      return []
    }
    return [
      new CsGoServerApiKey(
        1,
        settings('srvApiKey1'),
      ),
    ]
  }
}
