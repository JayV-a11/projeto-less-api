import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class DeleteAddressStrategy extends AbstractStrategy {
    constructor ({
        addressService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.addressService = addressService;
    }

    async execute(address, result = this.result) {
        try {
            await this.addressService.deleteAddress(address);
            result.status = 201;
            result.data = [address];
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: address,
            result
        };
    }
}