import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import FindAllAddressesStrategy from '../../strategy/Address/FindAllAddressesStrategy.js';

export default class FindAllByCostumersUseCase extends AbstractUseCase {
    constructor({
        addressService = null
    } = {}) {
        super();
        this.addressService = addressService;
        this.strategies = [
            new FindAllAddressesStrategy({
                addressService: this.addressService
            }),
        ]
    }

    async findAllAddress(filter) {
        return await this.executeStrategies(filter, new Result());
    }
}