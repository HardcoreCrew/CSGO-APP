export default class User { 
    constructor({
      id = null,
      name,
      level = 1,
    }) {
      this.id = id
      this.name = name
      this.level = level
    }
  }
  