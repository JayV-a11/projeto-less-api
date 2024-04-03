import AbstractModel from './AbstractModel.js';

export default class CardModel extends AbstractModel {
    constructor ({
        id = null,
        customer_id = null,
        number = '',
        titular = '',
        expiration = '',
        main = false,
    } = {}) {
        super();
        this.id = id;
        this.customer_id = customer_id,
        this.number = number;
        this.titular = titular;
        this.expiration = expiration;
        this.main = main;
    }

}