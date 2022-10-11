export default {
    400: {
        description: "Bad request",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        title: {
                            type: "string",
                        },
                        page: {
                            type: "string",
                        },
                        rows: {
                            type: "string",
                        },
                    }
                }
            }
        }
    }
}
