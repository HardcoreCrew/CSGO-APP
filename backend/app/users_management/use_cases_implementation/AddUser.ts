import { User } from "../../domain/entities"
import { IHasher } from "../../hasher"
import { IUserRepo } from "../../repositories"
import { 
  AddUserInputDto, 
  AddUserOutputDto,
 } from "../dtos"
import { IAddUser } from "../use_cases"


export default class AddUser implements IAddUser {
  
    constructor(
      private userRepo: IUserRepo,
      private hasher: IHasher,
    ) {}
  
    public async execute(inputDto: AddUserInputDto): Promise<AddUserOutputDto> { 
      const hashedPassword = await this.hasher.hash(inputDto.password)
      const user = new User(
        inputDto.nickname,
        inputDto.login,
        inputDto.email.toString(),
        inputDto.steamId.toString(),
        hashedPassword,
      )

      await this.userRepo.add(user)

      return new AddUserOutputDto(
        user.id!,
        user.nickname,
        user.login,
        user.email,
        user.steamId,
        'The user has been created.'
      )
    }
  }
