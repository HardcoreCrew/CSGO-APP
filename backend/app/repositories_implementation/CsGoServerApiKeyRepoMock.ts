import { 
  CsGoServerApiKey,
 } from '../domain/entities/index.js'
import {
  ICsGoServerApiKeyRepo,
 } from '../repositories/index.js';
import { ISettings } from '../settings/index.js';


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
        settings({setting: 'srvApiKey1'}),
      ),
    ]
  }
}
