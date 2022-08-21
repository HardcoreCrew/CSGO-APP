import CsGoServerCredentials from "./CsGoServerCredentials.js";
import CsGoServerPort from "./CsGoServerPort.js";


export default class CsGoServerHost {
  constructor(
    public id: number,
    public name: string,
    public externalAddress: string,
    public internalIpAddress: string,
    public mgmtPort: number,
    public serverPorts: CsGoServerPort[],
    public credentials: CsGoServerCredentials,
  ) {}
}
