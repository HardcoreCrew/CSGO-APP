import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
import { ISettings } from '../settings/index.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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


export default class DotEnvSettings implements ISettings {

  get({setting}: {setting: string}): string {
    const s = envWithCamelKeys[setting as keyof object]
    if (!s) throw Error(`Setting ${setting} not found.`)
    return s
  }
}
