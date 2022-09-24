import { injectable, inject } from "tsyringe"
import { 
  Sequelize,
} from 'sequelize'
import { 
  GetAllUsersInputDto, 
  GetAllUsersOutputDto, 
  SingleUserOutputDto, 
} from '../../../users_management/dtos'
import { IGetAllUsersQuery } from "../../../users_management/queries"
import { UserModel } from "../../../repositories_implementation/sequelize/models"
import { Id } from "../../../domain"


@injectable()
export default class SQLGetAllUsersQuery implements IGetAllUsersQuery {
  private userModel: any
  constructor(
    @inject("ISequelize") sequelize: Sequelize,
  ) {
    this.userModel = sequelize.models.UserModel
  }

  public async get(inputDto: GetAllUsersInputDto): Promise<GetAllUsersOutputDto> {
    const page = inputDto.page
    const queryRows = inputDto.rows
    const offset = (page - 1) * queryRows

    let filter = {} as { 
      id: Id[],
    }
    if (inputDto.ids) filter.id = inputDto.ids
    const { count, rows }: {count: number, rows: UserModel[] } = await this.userModel.findAndCountAll({
      where: filter,
      offset: offset,
      limit: queryRows,
    })

    const pages = Math.floor(count / queryRows + ((count % queryRows) ? 1 : 0))

    const usersDtos: SingleUserOutputDto[] = rows.map(model => this.modelToOutputDto(model))
    return new GetAllUsersOutputDto(
      usersDtos,
      pages,
    )
  }

  private modelToOutputDto(model: UserModel): SingleUserOutputDto {
    return new SingleUserOutputDto(
      model.id,
      model.nickname,
      model.login,
      model.email,
      model.steam_id,
    )
  }
}
