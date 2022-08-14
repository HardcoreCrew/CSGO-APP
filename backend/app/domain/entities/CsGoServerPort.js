export default class CsGoServerPort { 
    constructor({
      port,
      inUseNow = false,
    }) {
      this.port = port
      this.inUseNow = inUseNow
    }
  }
  