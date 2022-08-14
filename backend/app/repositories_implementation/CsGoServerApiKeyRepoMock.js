import { 
  CsGoServerApiKey,
 } from '../domain/entities/index.js'


export default class CsGoServerApiKeyRepoMock {
  constructor({
    settings,
    areApiKeysAvailable = true, 
  }) {
    this._settings = settings
    this._areApiKeysAvailable = areApiKeysAvailable
  }

  add({apiKey}) {
    console.log('SAVING API KEY');
    console.log(apiKey);
  }

  findByNotInUseNowAndIsValid({limit}) {
    const settings = this._settings.get
    if (!this._areApiKeysAvailable) {
      return []
    }
    return [
      new CsGoServerApiKey({
        id: 1,
        key: settings('srvApiKey1'),
      }),
    ]
  }
}
