export default class IAddressService {
    constructor () {
        if (!this.createAddress) throw new Error(`Method createAddress not implemented in ${this.constructor.name})`);
    }
}