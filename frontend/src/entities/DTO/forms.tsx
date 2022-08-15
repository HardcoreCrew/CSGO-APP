import { Data } from "dataclass";

class FormData extends Data {
    formName: string;
    labels: [
        {text: string}
    ]
    inputPlaceholders: [
        {text: string}
    ]
}
  


export default FormData