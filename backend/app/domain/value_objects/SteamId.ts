import { ValidationValueError } from "../errors"
import BaseStringValueObject from "./BaseStringValueObject"


const steamIdPattern= new RegExp(''
  + /(?<CUSTOMPROFILE>https?\:\/\/steamcommunity.com\/id\/[A-Za-z_0-9]+)|/.source
  + /(?<CUSTOMURL>\/id\/[A-Za-z_0-9]+)|/.source
  + /(?<PROFILE>https?\:\/\/steamcommunity.com\/profiles\/[0-9]+)|/.source
  + /(?<STEAMID2>STEAM_[10]:[10]:[0-9]+)|/.source
  + /(?<STEAMID3>\[U:[10]:[0-9]+\])|/.source
  + /(?<STEAMID64>[^\/][0-9]{8,})/.source,
  'g'
)


export default class SteamId extends BaseStringValueObject {
  
    constructor(
        value: string,
    ) {
        if (!steamIdPattern.test(value)) throw new ValidationValueError('Incorrect Steam ID.')
        super(value)
    }
}
