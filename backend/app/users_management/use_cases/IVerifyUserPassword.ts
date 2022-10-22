import { VerifyUserPasswordInputDto, VerifyUserPasswordOutputDto } from '../dtos'


export default interface IVerifyUserPassword {

  execute(inputDto: VerifyUserPasswordInputDto): Promise<VerifyUserPasswordOutputDto>
}
