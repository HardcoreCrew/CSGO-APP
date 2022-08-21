export default class CsGoServerApiKey {
  constructor(
    public id: number,
    public key: string,
    public inUseNow: boolean = false,
    public isValid: boolean = true,
    public lastUsed: Date | null = null,
  ) {}
}
