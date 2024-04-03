import AbstractModel from './AbstractModel.js';

export default class CostumerModel extends AbstractModel {
    constructor ({
        id = null,
        name = '',
        email = '',
        inactive = false,
    } = {}) {
        super();
        this.id = id;
        this.name = name,
        this.email = email;
        this.inactive = inactive;
    }

}