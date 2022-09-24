import { GetAllUsersInputDto, GetAllUsersOutputDto } from '../dtos'


export default interface IGetAllUsersQuery {

  get(inputDto: GetAllUsersInputDto): Promise<GetAllUsersOutputDto>
}
