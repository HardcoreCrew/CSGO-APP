export default [
    {
        name: "page",
        in: "query",
        description: "Page number",
        schema: {
          type: "integer",
        },
        style: "simple"
    },
    {
        name: "rows",
        in: "query",
        description: "Number of rows per page",
        schema: {
          type: "integer",
        },
        style: "simple"
    },
]
