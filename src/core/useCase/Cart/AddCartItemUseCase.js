import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import AddCartItemStrategy from '../../strategy/Cart/AddCartItemStrategy.js';

export default class AddCartItemUseCase extends AbstractUseCase {
    constructor({
        cartService = null
    } = {}) {
        super();
        this.cartService = cartService;
        this.strategies = [
            new AddCartItemStrategy({
                cartService: this.cartService
            }),
        ]
    }

    async addItem(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}