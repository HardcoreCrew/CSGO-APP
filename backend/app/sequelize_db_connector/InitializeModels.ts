import { singleton, injectable, injectAll } from "tsyringe"
import { 
    Sequelize, 
    DataTypes,
    Model,
 } from 'sequelize'
import IInitializeModels from './IInitializeModels';


@singleton()
@injectable()
export default class InitializeModels implements IInitializeModels {
    constructor(
        @injectAll("ISequelizeModelType") private modelClasses: any[] 
    ) {}

    public execute(sequelize: Sequelize): void {
        const modelsDict: { [modelName: string]: typeof Model } = {}
        this.modelClasses.forEach(modelClass => {
            modelsDict[modelClass.name] = modelClass;
          }
        )
        this.modelClasses.forEach(modelClass => {
            if (modelClass.associate) { modelClass.associate(modelsDict) }
            }
        )
        this.modelClasses.forEach(modelClass => {
            if (!modelClass.initialize) {
                throw Error(`Model class ${modelClass.name} has no static method 'initialize'.`)
            }
            modelClass.initialize(sequelize, DataTypes);
            }
        )
    }
}
