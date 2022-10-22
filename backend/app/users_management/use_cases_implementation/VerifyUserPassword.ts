import { injectable, inject } from "tsyringe"
import { User } from "../../domain/entities"
import { 
  MissingData, 
} from "../../domain/errors"
import { IHasher } from "../../hasher"
import { IUserRepo } from "../../repositories"
import { 
  VerifyUserPasswordInputDto,
  VerifyUserPasswordOutputDto,
 } from "../dtos"
 import { IVerifyUserPassword } from "../use_cases"


@injectable()
export default class VerifyUserPassword implements IVerifyUserPassword {
  
    constructor(
      @inject("IUserRepo") private userRepo: IUserRepo,
      @inject("IHasher") private hasher: IHasher,
    ) {}
  
    public async execute(inputDto: VerifyUserPasswordInputDto): Promise<VerifyUserPasswordOutputDto> {
      const user: User | null = await this.userRepo.findByEmail(inputDto.email)
      if (!user) throw new MissingData('The user with this email has not been found.')

      if (! await this.hasher.isMatch(inputDto.password, user.password)) {
        return new VerifyUserPasswordOutputDto(false)
      } 
      return new VerifyUserPasswordOutputDto(true)
    }
  }
