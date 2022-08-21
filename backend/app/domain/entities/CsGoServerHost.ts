import CsGoServerCredentials from "./CsGoServerCredentials";
import CsGoServerPort from "./CsGoServerPort";


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
