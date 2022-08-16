export default class GameLobby { 
    constructor({
      id = null,
      name,
      users,
    }) {
      this.id = id
      this.name = name
      this.users = users
    }
  }
  