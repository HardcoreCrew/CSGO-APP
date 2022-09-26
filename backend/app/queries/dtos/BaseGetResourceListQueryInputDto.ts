import {
    IsInt,
    Min,
} from 'class-validator'
  
  
  export default class BaseGetResourceListQueryInputDto {
  
    @Min(1)
    @IsInt()
    public page: number
  
    @Min(1)
    @IsInt()
    public rows: number

    constructor(
        page?: number,
        rows?: number,
      ) {
        this.page = page ? page : 1
        this.rows = rows ? rows : 25
    }
}
