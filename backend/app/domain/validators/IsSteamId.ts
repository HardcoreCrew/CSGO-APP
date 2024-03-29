import { 
    registerDecorator, 
    ValidationOptions, 
} from 'class-validator'


export default function IsSteamId(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsSteamId',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          const steamIdPattern= new RegExp(''
            + /(?<STEAMID2>STEAM_[10]:[10]:[0-9]+)|/.source
            + /(?<STEAMID3>\[U:[10]:[0-9]+\])|/.source
            + /(?<STEAMID64>[^\/][0-9]{8,})/.source,
            'g'
          )
          return steamIdPattern.test(value)
        },
        defaultMessage() {
            return 'incorrect Steam ID'
        }
      },
    })
  }
}
