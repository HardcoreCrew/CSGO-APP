import { RunCsGoServerLinuxHostInputDto } from '../dtos/index.js'


export default interface IRunCsGoServerLinuxHost {

  execute({inputDto}: {inputDto: RunCsGoServerLinuxHostInputDto}): void
}
