export default class CsGoServerCredentials { 
    constructor({
      id = null,
      credentialsName,
      username,
      password,
    }) {
      this.id = id
      this.credentialsName = credentialsName
      this.username = username
      this.password = password
    }
  }
  