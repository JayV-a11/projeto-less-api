import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';
import FindByCartStrategy from '../../strategy/Cart/findByCartStrategy.js';

export default class FindAllByCartUseCase extends AbstractUseCase {
    constructor({
        cartService = null
    } = {}) {
        super();
        this.cartService = cartService;
        this.strategies = [
            new FindByCartStrategy({
                cartService: this.cartService
            }),
        ]
    }

    async findByCart(filter) {
        return await this.executeStrategies(filter, new Result());
    }
}