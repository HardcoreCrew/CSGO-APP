import {
  IsEmail,
  IsString,
} from 'class-validator'
import { 
  IsSteamId, 
} from "../../domain/validators"


export default class AddUserInputDto {

  @IsString()
  public nickname!: string

  @IsString()
  public login!: string

  @IsEmail()
  public email!: string

  @IsSteamId()
  public steamId!: string

  @IsString()
  public password!: string
}
