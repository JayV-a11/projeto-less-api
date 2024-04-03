import Address from '../../../../../../core/domain/Address.js';
import AddressModel from '../AddressModel.js';
import AbstractMapper from './AbstractMapper.js';

export default class AddressMapper extends AbstractMapper {
    constructor () {
        super();
        this.adapt = this.adapt.bind(this);
    }

    adapt(object) {
        switch (object.constructor.name) {
            case `${AddressModel.constructor.name}`:
                return this.adaptModelToEntity(object);
            case `${Address.constructor.name}`:
                return this.adaptEntityToModel(object);
            default:
                return object;
        }
    }

    adaptModelToEntity (model) {
        const entity = new Address();

        const keys = Object.keys(model);

        for (const key of keys) {
            entity[key] = model[key];
        }
    }

    adaptEntityToModel (entity) {
        const model = new AddressModel();

        const keys = Object.keys(entity);

        for (const key of keys) {
            model[key] = entity[key];
        }
    }
}