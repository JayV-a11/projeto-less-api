import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateAddressFieldsStrategy from '../../strategy/Address/ValidateAddressFieldsStrategy.js';
import ValidateCostumerExistenceStrategy from '../../strategy/Address/ValidateCostumerExistenceStrategy.js';
import SaveAddressStrategy from '../../strategy/Address/SaveAddressStrategy.js';
import CostumerService from '../../../outbound/service/CostumerService.js';

export default class CreateAddressUseCase extends AbstractUseCase {
    constructor({
        addressService = null
    } = {}) {
        super();
        const costumerService =  new CostumerService()
        this.addressService = addressService;
        this.strategies = [
            new ValidateAddressFieldsStrategy(),
            new ValidateCostumerExistenceStrategy({
                costumerService: costumerService
            }),
            new SaveAddressStrategy({
                addressService: this.addressService
            }),
        ]
    }

    async createAddress(address) {
        return await this.executeStrategies(address, new Result());
    }
}