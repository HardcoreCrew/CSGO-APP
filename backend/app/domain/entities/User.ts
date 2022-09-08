import { Id } from "../simple_types";
import IBaseEntity from "./IBaseEntity";

export default class User implements IBaseEntity {
  constructor(
    public nickname: string,
    public login: string,
    public email: string,
    public steamId: string,
    public password: string,
    public id: Id | null = null,
    public createdAt: Date | null = null,
    public updatedAt: Date | null = null,
  ) {}
}
