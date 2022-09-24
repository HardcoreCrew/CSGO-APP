import {
  IsOptional,
  IsInt,
} from 'class-validator'
import { Id } from '../../domain'
import { BaseGetResourceListQueryInputDto } from '../../queries/dtos'


export default class GetAllUsersInputDto extends BaseGetResourceListQueryInputDto {

  @IsOptional()
  @IsInt({
    each: true,
  })
  public ids?: Id[]

  constructor(
    ids?: Id[],
    page?: number,
    rows?: number,
  ) {
    super(page, rows)
    this.ids = ids
  }
}
