import InvalidRequestDoc from './InvalidRequestDoc'
import v1Url from './v1_base_url'


const BASE_URL = `${v1Url}/users`

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
                login: {
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

const doc = {
    [BASE_URL]: {
        get: {
            tags: ["Users"],
            description: "Get users with optional query parameters",
            operationId: "getAllUsers",
            parameters: [
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
                ...InvalidRequestDoc,
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
                ...InvalidRequestDoc,
            }
        },
    }
}

export {
    doc,
    BASE_URL,
}
