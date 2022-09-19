export default class SQLBaseEntityMapper {

    protected _modelToEntity(model: any, entityType: any, args: any): any {
        return new entityType(
          ...args,
          new Date(model.createdAt),
          new Date(model.updatedAt),
        )
    }
  }
