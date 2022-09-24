import {
    IsInt,
    Min,
} from 'class-validator'
  
  
  export default class BaseGetResourceListQueryInputDto {
  
    @IsInt()
    @Min(1)
    public page: number
  
    @IsInt()
    @Min(1)
    public rows: number

    constructor(
        page?: number,
        rows?: number,
      ) {
        this.page = page ? page : 1
        this.rows = rows ? rows : 25
    }
}
