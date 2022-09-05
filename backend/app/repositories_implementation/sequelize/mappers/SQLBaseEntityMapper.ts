export default class SQLBaseEntityMapper {

    protected _modelToEntity(model: any, entityType: any, args: any): any {
        return new entityType(
          ...args,
          model.created_at,
          model.updated_at,
        )
    }
  }
