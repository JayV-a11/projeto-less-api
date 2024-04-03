export default class IAddressService {
    constructor () {
        if (!this.createAddress) throw new Error(`Method creatCostumer not implemented in ${this.constructor.name})`);
    }
}