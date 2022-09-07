import { AddUserInputDto, AddUserOutputDto } from '../dtos'


export default interface IAddUser {

  execute(inputDto: AddUserInputDto): Promise<AddUserOutputDto>
}
