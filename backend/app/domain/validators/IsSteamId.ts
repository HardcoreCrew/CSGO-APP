import { 
    registerDecorator, 
    ValidationOptions, 
} from 'class-validator';


const steamIdPattern= new RegExp(''
  + /(?<CUSTOMPROFILE>https?\:\/\/steamcommunity.com\/id\/[A-Za-z_0-9]+)|/.source
  + /(?<CUSTOMURL>\/id\/[A-Za-z_0-9]+)|/.source
  + /(?<PROFILE>https?\:\/\/steamcommunity.com\/profiles\/[0-9]+)|/.source
  + /(?<STEAMID2>STEAM_[10]:[10]:[0-9]+)|/.source
  + /(?<STEAMID3>\[U:[10]:[0-9]+\])|/.source
  + /(?<STEAMID64>[^\/][0-9]{8,})/.source,
  'g'
)


export default function IsSteamId(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsSteamId',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          return steamIdPattern.test(value)
        },
        defaultMessage() {
            return 'Incorrect Steam ID.'
        }
      },
    });
  };
}
