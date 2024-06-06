import AbstractModel from './AbstractModel.js';

export default class CartModel extends AbstractModel {
    constructor ({
        id = null,
        customer_id = null,
        expiration = '',
        main = false,
    } = {}) {
        super();
        this.id = id;
        this.customer_id = customer_id,
        this.expiration = expiration;
        this.main = main;
    }

}