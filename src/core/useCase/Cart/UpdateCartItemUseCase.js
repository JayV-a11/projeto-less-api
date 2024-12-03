import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import UpdateCartItemStrategy from '../../strategy/Cart/UpdateCartItemStrategy.js';

export default class UpdateCartItemUseCase extends AbstractUseCase {
    constructor({
        cartService = null
    } = {}) {
        super();
        this.cartService = cartService;
        this.strategies = [
            new UpdateCartItemStrategy({
                cartService: this.cartService
            }),
        ]
    }

    async updateItem(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}