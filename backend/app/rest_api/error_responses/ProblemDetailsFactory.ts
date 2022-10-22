import IProblemDetailsFactory from "./IProblemDetailsFactory";
import { 
  ProblemDocument, 
  ProblemDocumentExtension,
} from "http-problem-details"


export default class ProblemDetailsFactory implements IProblemDetailsFactory {

  public getValidationError(extensionObject: any): ProblemDocument {
    return this.getCustomError(
      {
        title: 'Validation error',
      },
      extensionObject
    )
  }

  public getNotFoundError(extensionObject: any): ProblemDocument {
    return this.getCustomError(
      {
        title: 'Not found error',
      },
      extensionObject
    )
  }

  public getInternalServerError(extensionObject?: any): ProblemDocument {
    return this.getCustomError(
      {
        title: 'Internal server error',
      },
      extensionObject
    )
  }

  public getCustomError(baseObject: any, extensionObject?: any): ProblemDocument {
    const extensionDoc = extensionObject ? new ProblemDocumentExtension(extensionObject) : {}
    return new ProblemDocument(baseObject, extensionDoc)
  }
}
