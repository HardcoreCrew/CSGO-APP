import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsAlpha,
  IsAlphanumeric,
  Length,
} from 'class-validator'
import { 
  IsNotNumericString,
  IsSteamId,
  IsStrongPassword, 
} from "../../domain/validators"


export default class AddUserInputDto {

  @Length(4, 12)
  @IsAlpha()
  @IsString()
  @IsNotEmpty()
  public nickname!: string

  @IsNotNumericString()
  @Length(4, 20)
  @IsAlphanumeric()
  @IsString()
  @IsNotEmpty()
  public login!: string

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
