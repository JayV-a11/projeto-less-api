import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class FindAllAddressesStrategy extends AbstractStrategy {
    constructor({
        result = new Result(),
        addressService = null
    } = {}) {
        super();
        this.result = result;
        this.addressService = addressService;
    }

    async execute(filter, result = this.result) {
        try {
            const addresses = await this.addressService.findAllAddresses(filter);
            result.data = addresses;
            result.status = (addresses.length === 0) ? 204 : 200;
        } catch(error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: filter,
            result
        }
    }
}