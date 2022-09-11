import { 
  Email, 
  SteamId,
 } from "../../domain/value_objects";


export default class AddUserInputDto {
  constructor(
    public nickname: string,
    public login: string,
    public email: Email,
    public steamId: SteamId,
    public password: string,
  ) {}
}
