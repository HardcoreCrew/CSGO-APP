import { ProblemDocument } from "http-problem-details"


export default interface IProblemDetailsFactory {

  getValidationError(extensionObject: any): ProblemDocument

  getNotFoundError(extensionObject: any): ProblemDocument

  getInternalServerError(extensionObject?: any): ProblemDocument

  getCustomError(baseObject: any, extensionObject?: any): ProblemDocument
}
