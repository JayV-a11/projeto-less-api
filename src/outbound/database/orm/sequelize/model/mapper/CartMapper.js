import Cart from '../../../../../../core/domain/Cart.js';
import CartModel from '../CartModel.js';
import AbstractMapper from './AbstractMapper.js';

export default class CartMapper extends AbstractMapper {
    constructor () {
        super();
        this.adapt = this.adapt.bind(this);
    }

    adapt(object) {
        switch (object.constructor.name) {
            case `${CartModel.constructor.name}`:
                return this.adaptModelToEntity(object);
            case `${Cart.constructor.name}`:
                return this.adaptEntityToModel(object);
            default:
                return object;
        }
    }

    adaptModelToEntity (model) {
        const entity = new Cart();

        const keys = Object.keys(model);

        for (const key of keys) {
            entity[key] = model[key];
        }
    }

    adaptEntityToModel (entity) {
        const model = new CartModel();

        const keys = Object.keys(entity);

        for (const key of keys) {
            model[key] = entity[key];
        }
    }
}