import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsAlpha,
  Length,
} from 'class-validator'
import { 
  IsSteamId,
  IsStrongPassword, 
} from "../../domain/validators"


export default class AddUserInputDto {

  @Length(4, 12)
  @IsAlpha()
  @IsString()
  @IsNotEmpty()
  public nickname!: string

  @IsEmail()
  @IsNotEmpty()
  public email!: string

  @IsSteamId()
  @IsNotEmpty()
  public steamId!: string

  @IsStrongPassword()
  @IsString()
  @IsNotEmpty()
  public password!: string
}
