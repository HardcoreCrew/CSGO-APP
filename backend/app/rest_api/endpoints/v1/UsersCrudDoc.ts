import { cloneDeep } from 'lodash'
import { 
    baseGetAllResourcesBadRequest,
    PagingParameters, 
} from '../shared_swagger_docs'
import v1Url from './v1_base_url'


const BASE_URL = `${v1Url}/users`
const LOGIN_USER_URL = `${BASE_URL}/login`

const getOutputProps = {
    id: {
        type: "integer",
        example: 1
    },
    avatar_link: {
        type: "string"
    },
    nick: {
        type: "string"
    },
    clan_tag: {
        type: "string"
    },
    account_level: {
        type: "integer",
        example: 2
    }
}

const getOutputContent = {
    "application/json": {
        schema: {
            type: "object",
            properties: getOutputProps,
        }
    }
}

const postInputContent = {
    "application/json": {
        schema: {
            type: "object",
            properties: {
                nickname: {
                    type: "string",
                    required: true,
                },
                email: {
                    type: "string",
                    required: true,
                },
                steamId: {
                    type: "string",
                    required: true,
                },
                password: {
                    type: "string",
                    required: true,
                },
            }
        }
    }
}
const getAllResourcesBadRequest: any = cloneDeep(baseGetAllResourcesBadRequest)
getAllResourcesBadRequest[400].content['application/json'].schema.properties.ids = {
    type: "string",
}

const postBadRequestContent = {
    "application/json": {
        schema: {
            type: "object",
            properties: {
                title: {
                    type: "string",
                },
                nickname: {
                    type: "string",
                },
                email: {
                    type: "string",
                },
                steamId: {
                    type: "string",
                },
                password: {
                    type: "string",
                },
            }
        }
    }
}

const postOutputProps = {
    id: {
        type: "integer",
        example: 1,
    },
    ...postInputContent['application/json'].schema.properties,
}

const postOutputContent = {
    "application/json": {
        schema: {
            type: "object",
            properties: postOutputProps,
        }
    }
}

const loginUserInputContent = {
    "application/json": {
        schema: {
            type: "object",
            properties: {
                email: {
                    type: "string",
                    required: true,
                },
                password: {
                    type: "string",
                    required: true,
                },
            }
        }
    }
}

const loginUserBadRequestContent = {
    "application/json": {
        schema: {
            type: "object",
            properties: {
                title: {
                    type: "string",
                },
                email: {
                    type: "string",
                },
                password: {
                    type: "string",
                },
            }
        }
    }
}

const doc = {
    [BASE_URL]: {
        get: {
            tags: ["Users"],
            description: "Get users with optional query parameters",
            operationId: "getAllUsers",
            parameters: [
                ...PagingParameters,
                {
                    name: "ids",
                    in: "query",
                    description: "Filter users' IDs",
                    schema: {
                      type: "array",
                      items: {
                        type: "integer"
                      }
                    },
                    style: "simple"
                }
            ],
            responses: {
                200: {
                    description: "OK",
                    content: getOutputContent,
                },
                ...getAllResourcesBadRequest,
            }
        },
        post: {
            tags: ["Users"],
            description: "Add a new user",
            operationId: "addUser",
            requestBody: {content: postInputContent},
            responses: {
                201: {
                    description: "User created",
                    content: postOutputContent,
                },
                400: {
                    description: "Bad request",
                    content: postBadRequestContent,
                },
            }
        },
    },
    [LOGIN_USER_URL]: {
        post: {
            tags: ["Users"],
            description: "Login user",
            operationId: "loginUser",
            requestBody: {content: loginUserInputContent},
            responses: {
                200: {
                    description: "User logged in",
                    headers: {
                        "Set-Cookie": {
                            schema: {
                                type: "string",
                            },
                            description: "Cookie with authorization token",
                        }
                    }
                },
                400: {
                    description: "Bad request",
                    content: loginUserBadRequestContent,
                },
                401: {
                    description: "User unauthorized",
                },
            }
        },
    }
}

export {
    doc,
    BASE_URL,
    LOGIN_USER_URL,
}
