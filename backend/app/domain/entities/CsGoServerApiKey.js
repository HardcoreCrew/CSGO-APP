export default class CsGoServerApiKey { 
    constructor({
      id = null,
      key,
      inUseNow = false,
      isValid = true,
      lastUsed = null,
    }) {
      this.id = id
      this.key = key
      this.inUseNow = inUseNow
      this.isValid = isValid
      this.lastUsed = lastUsed
    }
  }
