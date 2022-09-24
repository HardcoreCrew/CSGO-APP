import { 
    InvalidRequestResponse, 
} from '../shared_swagger_docs'
import v1Url from './v1_base_url'


const BASE_URL = `${v1Url}/cs-go-servers`

const inputContent = {
    "application/json": {
        schema: {
            type: "object",
            properties: {
                lobby_id: {
                    type: "integer",
                    example: 1
                },
                maps: {
                    type: "array",
                    items: {
                        type: "string"
                    }
                }
            }
        }
    }
}

const props = {
    id: {
        type: "integer",
        example: 1
    },
    ...inputContent['application/json'].schema.properties,
    state: {
        type: "string",
        enum: ["IN_PROGRESS", "DONE"]
    },
    status: {
        type: "string",
        enum: ["UNDETERMINED", "SUCCESS", "FAILURE"]
    }
}

const outputContent = {
    "application/json": {
        schema: {
            type: "object",
            properties: props
        }
    }
}

const doc = {
    [BASE_URL]: {
        post: {
            tags: ["CS GO server requests"],
            description: "Add a new CS GO server request",
            operationId: "addServerRequest",
            requestBody: {content: inputContent},
            responses: {
                202: {
                    description: "CS GO server request accepted",
                    content: outputContent
                },
                ...InvalidRequestResponse,
            }
        }
    }
}

export {
    doc,
    BASE_URL,
}
