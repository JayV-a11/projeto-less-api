import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateAddressUpdateFieldsStrategy from '../../strategy/Address/ValidateAddressUpdateFieldsStrategy.js';
import UpdateAddressStrategy from '../../strategy/Address/UpdateAddressStrategy.js';
import FindAllAddressesStrategy from '../../strategy/Address/FindAllAddressesStrategy.js';

export default class UpdateAddressUseCase extends AbstractUseCase {
    constructor({
        addressService = null
    } = {}) {
        super();
        this.addressService = addressService;
        this.strategies = [
            new ValidateAddressUpdateFieldsStrategy(),
            new UpdateAddressStrategy({
                addressService: this.addressService
            }),
            new FindAllAddressesStrategy({
                addressService: this.addressService
            }),
        ]
    }

    async updateAddress(address) {
        return await this.executeStrategies(address, new Result());
    }
}