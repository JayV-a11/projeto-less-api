import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';
import FindByCostumerStrategy from '../../strategy/Cart/findByCostumerStrategy.js';

export default class FindAllByCostumersUseCase extends AbstractUseCase {
    constructor({
        cartService = null
    } = {}) {
        super();
        this.cartService = cartService;
        this.strategies = [
            new FindByCostumerStrategy({
                cartService: this.cartService
            }),
        ]
    }

    async findByCostumer(filter) {
        return await this.executeStrategies(filter, new Result());
    }
}