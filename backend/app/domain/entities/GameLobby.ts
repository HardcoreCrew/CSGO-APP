import User from "./User";


export default class GameLobby {
  constructor(
    public id: number,
    public name: string,
    public users: User[],
  ) {}
}
