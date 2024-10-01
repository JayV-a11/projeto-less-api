import CartItem from '../../../../core/domain/CartItem.js';
import CartItemModel from '../CartItemModel.js';
import AbstractMapper from './AbstractMapper.js';

export default class CartItemMapper extends AbstractMapper {
    constructor () {
        super();
        this.adapt = this.adapt.bind(this);
    }

    adapt(object) {
        switch (object.constructor.number) {
            case `${CartItemModel.constructor.number}`:
                return this.adaptModelToEntity(object);
            case `${CartItem.constructor.number}`:
                return this.adaptEntityToModel(object);
            default:
                return object;
        }
    }

    adaptModelToEntity (model) {
        const entity = new CartItem();

        const keys = Object.keys(model);

        for (const key of keys) {
            entity[key] = model[key];
        }
    }

    adaptEntityToModel (entity) {
        const model = new CartItemModel();

        const keys = Object.keys(entity);

        for (const key of keys) {
            model[key] = entity[key];
        }
    }
}