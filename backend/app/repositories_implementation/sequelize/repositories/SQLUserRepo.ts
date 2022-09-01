import {
  IUserRepo,
} from '../../../repositories';
import { 
  User, 
} from '../../../domain/entities'
import { 
  Sequelize, 
 } from 'sequelize';
import { 
  SQLUserMapper,
 } from '../mappers';
import { Id } from '../../../domain';


export default class SQLUserRepo implements IUserRepo {  // TODO: create SQLBaseMapper with protected storage, model, mapper props and basic protected methods
  private storage: any
  private userModel: any
  private mapper: SQLUserMapper
  constructor(
    sequelize: Sequelize,
    storage: any,
    mapper: SQLUserMapper,
  ) {
    this.storage = storage
    this.userModel = sequelize.models.UserModel
    this.mapper = mapper
  }

  public async add(user: User): Promise<void> {
    if (user.id) {
      await this.userModel.update(
        this.mapper.entityToModel(user),
        {
          where: { id: user.id },
          transaction: this.storage.transaction
        }
      );
      return
    }
    const newUser = await this.userModel.create(
      this.mapper.entityToModel(user),
      { transaction: this.storage.transaction },
    );
    user.id = newUser.id
  }

  public async find(id: Id): Promise<User | null> {
    const user = await this.userModel.findByPk(id, { transaction: this.storage.transaction })
    return user ? this.mapper.modelToEntity(user) : null
  }

  public async delete(user: User): Promise<void> {
    await this.userModel.destroy(
      {
        where: { id: user.id },
        transaction: this.storage.transaction
      }
    )
  }
}
