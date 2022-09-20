import { injectable, inject } from "tsyringe"
import { User } from "../../domain/entities"
import { IHasher } from "../../hasher"
import { IUserRepo } from "../../repositories"
import { 
  AddUserInputDto, 
  AddUserOutputDto,
 } from "../dtos"
import { IAddUser } from "../use_cases"


@injectable()
export default class AddUser implements IAddUser {
  
    constructor(
      @inject("IUserRepo") private userRepo: IUserRepo,
      @inject("IHasher") private hasher: IHasher,
    ) {}
  
    public async execute(inputDto: AddUserInputDto): Promise<AddUserOutputDto> { 
      const hashedPassword = await this.hasher.hash(inputDto.password)
      const user = new User(
        inputDto.nickname,
        inputDto.login,
        inputDto.email,
        inputDto.steamId,
        hashedPassword,
      )

      await this.userRepo.add(user)

      return new AddUserOutputDto(
        user.id!,
        user.nickname,
        user.login,
        user.email,
        user.steamId,
      )
    }
  }
