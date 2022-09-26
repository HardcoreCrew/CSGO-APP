import { 
    registerDecorator, 
    ValidationOptions,
} from 'class-validator'


export default function IsNotNumericString(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsNotNumericString',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          return isNaN(parseInt(value))
        },
        defaultMessage() {
            return `${propertyName} cannot be numeric`
        }
      },
    })
  }
}
