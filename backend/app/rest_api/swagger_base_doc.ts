import controllers from './endpoints'

export default {
  openapi: "3.0.3",
  info: {
    title: "CS GO API",
    description: "API for managing CS GO players, servers and matches",
    version: "1.0.0",
  },
  servers: [
    {
      url: ""
    }
  ],
  paths: Object.assign({}, ...controllers.map(controller => controller.doc))
}
