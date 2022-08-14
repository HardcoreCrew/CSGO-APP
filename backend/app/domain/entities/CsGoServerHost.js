export default class CsGoServerHost { 
    constructor({
      id = null,
      name,
      externalAddress,
      internalIpAddress,
      mgmtPort,
      serverPorts,
      credentials,
    }) {
      this.id = id
      this.name = name
      this.externalAddress = externalAddress
      this.internalIpAddress = internalIpAddress
      this.mgmtPort = mgmtPort
      this.serverPorts = serverPorts
      this.credentials = credentials
    }
  }
  