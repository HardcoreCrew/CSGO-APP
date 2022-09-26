import { 
    registerDecorator, 
    ValidationOptions,
} from 'class-validator'


export default function IsStrongPassword(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsStrongPassword',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          return typeof value === 'string' && 
          value.length >= 8 &&
          value.length <= 20 && 
          value !== value.toLowerCase() && 
          !/^[a-zA-Z0-9]+$/i.test(value)
        },
        defaultMessage() {
            return `${propertyName} is not compliant with the password policy`
        }
      },
    })
  }
}
