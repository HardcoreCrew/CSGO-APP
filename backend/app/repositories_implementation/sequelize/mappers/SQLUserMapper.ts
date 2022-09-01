import { User } from "../../../domain/entities";
import { UserModel } from "../models";
import SQLBaseEntityMapper from "./SQLBaseEntityMapper";


export default class SQLUserMapper extends SQLBaseEntityMapper{
  
    public entityToModel(user: User): Object {
      return {
        nickname: user.nickname,
        login: user.login,
        password: user.password,
        email: user.email,
        steam_id: user.steamId,
      }
    }
  
    public modelToEntity(userModel: UserModel): User {
      const args = [
        userModel.nickname,
        userModel.login,
        userModel.password,
        userModel.email,
        userModel.steam_id,
        userModel.id,
      ]
      return super._modelToEntity(userModel, User, args)
    }
  }
