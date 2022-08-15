import { Data } from "dataclass";

class FormData extends Data { 
    formName: string;
    labels: any[];
    placeholders: any[];
}
  


export default FormData