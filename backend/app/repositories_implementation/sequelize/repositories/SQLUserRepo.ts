import { injectable, inject } from "tsyringe"
import {
  IUserRepo,
} from '../../../repositories';
import { 
  User, 
} from '../../../domain/entities'
import { 
  Sequelize, 
  UniqueConstraintError,
 } from 'sequelize';
import { 
  SQLUserMapper,
 } from '../mappers';
import { Id } from '../../../domain';
import { 
  ObjectAlreadyExists,
 } from '../../../domain/errors';
import { SequelizeStorage } from "../../../sequelize_db_connector";


 @injectable()
export default class SQLUserRepo implements IUserRepo {  // TODO: create SQLBaseMapper with protected storage, model, mapper props and basic protected methods
  private userModel: any
  constructor(
    @inject("ISequelize") sequelize: Sequelize,
    private mapper: SQLUserMapper,
    private storage: SequelizeStorage,
  ) {
    this.userModel = sequelize.models.UserModel
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
    try {
      const newUser = await this.userModel.create(
        this.mapper.entityToModel(user),
        { transaction: this.storage.transaction },
      );
      user.id = newUser.id
    } catch (e) {
      if (e instanceof UniqueConstraintError) {
        const msg = (e.fields as unknown as string[]).includes('steam_id') ? 
        'User with this steam id already exists.' : 'The user already exists.'
        throw new ObjectAlreadyExists(msg)
      }
      throw e
    }
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
