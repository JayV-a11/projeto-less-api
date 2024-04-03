export default class ICostumerService {
    constructor () {
        if (!this.createCostumer) throw new Error(`Method creatCostumer not implemented in ${this.constructor.name})`);
        // if (!this.findAllCostumers) throw new Error(`Method findAllUsers not implemented in ${this.constructor.name})`);
    }
}