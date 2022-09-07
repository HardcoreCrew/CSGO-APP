export default class BaseStringValueObject {
  
    constructor(
      private value: string,
    ) {}

    toString() {
        return this.value
    }
}
