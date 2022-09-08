import { InvalidRequest } from "./base_errors";

export class ObjectAlreadyExists extends InvalidRequest {

}

export class ValidationError extends InvalidRequest {

}

export class ValidationValueError extends ValidationError {

}
