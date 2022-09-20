export default {
    400: {
        description: "Invalid request",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        errors: {
                            type: "array",
                            items: {
                                type: "string",
                            },
                        }
                    }
                }
            }
        }
    }
}
