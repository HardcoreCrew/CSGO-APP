import v1Url from './v1_base_url.js'


const BASE_URL = `${v1Url}/users`

const outputProps = {
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

const outputContent = {
    "application/json": {
        schema: {
            type: "object",
            properties: outputProps
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
                    // "required": true,
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
                    content: outputContent
                },
                400: {
                    description: "Invalid request",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    Error: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

export {
    doc,
    BASE_URL,
}
