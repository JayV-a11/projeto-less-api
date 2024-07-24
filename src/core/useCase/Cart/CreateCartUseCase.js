import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateCartFieldsStrategy from '../../strategy/Cart/ValidateCartFieldsStrategy.js';
import ValidateCostumerExistenceStrategy from '../../strategy/Cart/ValidateCostumerExistenceStrategy.js';
import SaveCartStrategy from '../../strategy/Cart/SaveCartStrategy.js';
import CostumerService from '../../../outbound/service/CostumerService.js';

export default class CreateCartUseCase extends AbstractUseCase {
    constructor({
        cartService = null
    } = {}) {
        super();
        const costumerService =  new CostumerService()
        this.cartService = cartService;
        this.strategies = [
            new ValidateCartFieldsStrategy(),
            new ValidateCostumerExistenceStrategy({
                costumerService: costumerService
            }),
            new SaveCartStrategy({
                cartService: this.cartService
            }),
        ]
    }

    async createCart(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}