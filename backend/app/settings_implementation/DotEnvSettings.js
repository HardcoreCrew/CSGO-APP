import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import camelcaseKeys from 'camelcase-keys'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ 
  path: path.resolve(__dirname, '..', '..', '.env'),
}) // /backend/.env
const env = camelcaseKeys(process.env)


export default class DotEnvSettings {

  get(setting) {
    const s = env[setting]
    if (!s) throw Error('Setting not found.')
    return s
  }
}
