import {
  IsEmail,
  IsString,
  IsNotEmpty,
} from 'class-validator'


export default class BaseUserInputDto {

  @IsEmail()
  @IsNotEmpty()
  public email!: string

  @IsString()
  @IsNotEmpty()
  public password!: string
}
