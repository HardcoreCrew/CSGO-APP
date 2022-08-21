export default class CsGoServerPort {
  constructor(
    public port: number,
    public inUseNow: boolean = false,
  ) {}
}
