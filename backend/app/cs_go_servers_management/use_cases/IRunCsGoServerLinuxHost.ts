import { RunCsGoServerLinuxHostInputDto } from '../dtos'


export default interface IRunCsGoServerLinuxHost {

  execute({inputDto}: {inputDto: RunCsGoServerLinuxHostInputDto}): void
}
