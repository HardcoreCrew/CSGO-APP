import User from "./User.js";


export default class GameLobby {
  constructor(
    public id: number,
    public name: string,
    public users: User[],
  ) {}
}
