import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import DeleteCartItemStrategy from '../../strategy/Cart/DeleteCartItemStrategy.js';

export default class DeleteCartItemUseCase extends AbstractUseCase {
    constructor({
        cartService = null
    } = {}) {
        super();
        this.cartService = cartService;
        this.strategies = [
            new DeleteCartItemStrategy({
                cartService: this.cartService
            }),
        ]
    }

    async deleteItem(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}