import { Id } from "../../domain";


export default class AddUserOutputDto {
  constructor(
    public id: Id,
    public nickname: string,
    public login: string,
    public email: string,
    public steamId: string,
  ) {}
}
