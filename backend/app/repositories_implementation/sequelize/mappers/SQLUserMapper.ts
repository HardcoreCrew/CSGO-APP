import { User } from "../../../domain/entities";
import { UserModel } from "../models";
import SQLBaseEntityMapper from "./SQLBaseEntityMapper";


export default class SQLUserMapper extends SQLBaseEntityMapper{
  
    public entityToModel(user: User): Object {
      return {
        nickname: user.nickname,
        password: user.password,
        email: user.email,
        steam_id: user.steamId,
      }
    }
  
    public modelToEntity(userModel: UserModel): User {
      const args = [
        userModel.nickname,
        userModel.email,
        userModel.steam_id,
        userModel.password,
        userModel.id,
      ]
      return super._modelToEntity(userModel, User, args)
    }
  }
