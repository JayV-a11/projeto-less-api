import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import DeleteAddressStrategy from '../../strategy/Address/DeleteAddressStrategy.js';
import FindAllAddressesStrategy from '../../strategy/Address/FindAllAddressesStrategy.js';

export default class DeleteAddressUseCase extends AbstractUseCase {
    constructor({
        addressService = null
    } = {}) {
        super();
        this.addressService = addressService;
        this.strategies = [
            new DeleteAddressStrategy({
                addressService: this.addressService
            }),
            new FindAllAddressesStrategy({
                addressService: this.addressService
            }),
        ]
    }

    async deleteAddress( address) {
        return await this.executeStrategies( address, new Result());
    }
}