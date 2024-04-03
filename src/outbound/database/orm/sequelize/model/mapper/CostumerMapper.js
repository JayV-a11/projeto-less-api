import Costumer from '../../../../../../core/domain/Costumer.js';
import CostumerModel from '../CostumerModel.js';
import AbstractMapper from './AbstractMapper.js';

export default class CostumerMapper extends AbstractMapper {
    constructor () {
        super();
        this.adapt = this.adapt.bind(this);
    }

    adapt(object) {
        switch (object.constructor.name) {
            case `${CostumerModel.constructor.name}`:
                return this.adaptModelToEntity(object);
            case `${Costumer.constructor.name}`:
                return this.adaptEntityToModel(object);
            default:
                return object;
        }
    }

    adaptModelToEntity (model) {
        const entity = new Costumer();

        const keys = Object.keys(model);

        for (const key of keys) {
            entity[key] = model[key];
        }
    }

    adaptEntityToModel (entity) {
        const model = new CostumerModel();

        const keys = Object.keys(entity);

        for (const key of keys) {
            model[key] = entity[key];
        }
    }
}