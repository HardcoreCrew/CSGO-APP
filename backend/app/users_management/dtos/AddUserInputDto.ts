import {
  IsString,
  IsNotEmpty,
  IsAlpha,
  Length,
} from 'class-validator'
import { 
  IsSteamId,
  IsStrongPassword, 
} from "../../domain/validators"
import BaseUserInputDto from './BaseUserInputDto'


export default class AddUserInputDto extends BaseUserInputDto {

  @Length(4, 12)
  @IsAlpha()
  @IsString()
  @IsNotEmpty()
  public nickname!: string

  @IsSteamId()
  @IsNotEmpty()
  public steamId!: string

  @IsStrongPassword()
  @IsString()
  @IsNotEmpty()
  declare public password: string
}
