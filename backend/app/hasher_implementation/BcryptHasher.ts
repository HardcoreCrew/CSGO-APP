import { IHasher } from "../hasher"
import { 
  hash,
  compare,
} from 'bcrypt'


const SALT_ROUNDS_NUMBER = 10


export default class BcryptHasher implements IHasher {

  async hash(password: string): Promise<string> {
    return await hash(password, SALT_ROUNDS_NUMBER)
  }

  async isMatch(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return await compare(plainTextPassword, hashedPassword)
  }
}
