import Card from '../../../../../../core/domain/Card.js';
import CardModel from '../CardModel.js';
import AbstractMapper from './AbstractMapper.js';

export default class CardMapper extends AbstractMapper {
    constructor () {
        super();
        this.adapt = this.adapt.bind(this);
    }

    adapt(object) {
        switch (object.constructor.name) {
            case `${CardModel.constructor.name}`:
                return this.adaptModelToEntity(object);
            case `${Card.constructor.name}`:
                return this.adaptEntityToModel(object);
            default:
                return object;
        }
    }

    adaptModelToEntity (model) {
        const entity = new Card();

        const keys = Object.keys(model);

        for (const key of keys) {
            entity[key] = model[key];
        }
    }

    adaptEntityToModel (entity) {
        const model = new CardModel();

        const keys = Object.keys(entity);

        for (const key of keys) {
            model[key] = entity[key];
        }
    }
}