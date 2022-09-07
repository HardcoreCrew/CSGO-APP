import { IHasher } from "../hasher"
import { 
  hash,
  compare,
} from 'bcrypt'


export default class BcryptHasher implements IHasher {

  async hash(password: string): Promise<string> {
    return await hash(password, 10)
  }

  async isMatch(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return await compare(plainTextPassword, hashedPassword)
  }
}
