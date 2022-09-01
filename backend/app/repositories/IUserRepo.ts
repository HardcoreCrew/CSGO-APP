import { Id } from '../domain'
import { 
  User, 
} from '../domain/entities'


export default interface IUserRepo { 

  add(user: User): Promise<void> 

  find(id: Id): Promise<User | null>

  delete(user: User): Promise<void> 
}
