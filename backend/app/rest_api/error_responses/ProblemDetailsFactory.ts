import IProblemDetailsFactory from "./IProblemDetailsFactory";
import { 
  ProblemDocument, 
  ProblemDocumentExtension,
} from "http-problem-details"


export default class ProblemDetailsFactory implements IProblemDetailsFactory {

  public getValidationError(extensionObject: any): ProblemDocument {
    const extensionDoc = new ProblemDocumentExtension(extensionObject)
    return new ProblemDocument({
      title: 'Validation error',
    }, extensionDoc)
  }

  public getInternalServerError(extensionObject?: any): ProblemDocument {
    const extensionDoc = extensionObject ? new ProblemDocumentExtension(extensionObject) : {}
    return new ProblemDocument({
      title: 'Internal server error',
    }, extensionDoc)
  }

  public getCustomError(baseObject: any, extensionObject?: any): ProblemDocument {
    const extensionDoc = extensionObject ? new ProblemDocumentExtension(extensionObject) : {}
    return new ProblemDocument(baseObject, extensionDoc)
  }
}
