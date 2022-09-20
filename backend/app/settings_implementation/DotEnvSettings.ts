import { singleton } from "tsyringe"
import * as dotenv from 'dotenv'
import * as path from 'path'
import { ISettings } from '../settings'


dotenv.config({ 
  path: path.resolve(__dirname, '..', '..', '.env'),  // /backend/.env
})

let envWithCamelKeys: object = {}
Object.entries(process.env).forEach(([key, value]) => {
  const splitKey = key.toLowerCase().split('_')
  let camelKey = splitKey[0]
  splitKey.slice(1).forEach(element => {
    camelKey += element[0].toUpperCase() + element.slice(1).toLowerCase()
  });
  envWithCamelKeys[camelKey as keyof object] = value as keyof object
});


@singleton()
export default class DotEnvSettings implements ISettings {

  get(setting: string): string {
    const s = envWithCamelKeys[setting as keyof object]
    if (s === undefined) throw Error(`Setting ${setting} not found.`)
    return s
  }
}
