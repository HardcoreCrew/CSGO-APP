import { Id } from "../../domain";
import { BaseGetResourceListQueryOutputDto } from "../../queries/dtos";


export class SingleUserOutputDto {
  constructor(
    public id: Id,
    public nickname: string,
    public email: string,
    public steamId: string,
  ) {}
}


export class GetAllUsersOutputDto extends BaseGetResourceListQueryOutputDto {
  constructor(
    public users: SingleUserOutputDto[],
    public pages: number,
  ) {
    super(pages)
  }
}
