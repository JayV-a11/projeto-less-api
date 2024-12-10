import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import AddCartItemStrategy from '../../strategy/Cart/AddCartItemStrategy.js';
import PurchaseUpdateStockStrategy from '../../strategy/Cart/PurchaseUpdateStockStrategy.js';

export default class AddCartItemUseCase extends AbstractUseCase {
    constructor({
        cartService = null,
        bookService = null,
    } = {}) {
        super();
        this.cartService = cartService;
        this.bookService = bookService;
        this.strategies = [
            new PurchaseUpdateStockStrategy({
                bookService: this.bookService
            }),
            new AddCartItemStrategy({
                cartService: this.cartService
            }),
        ]
    }

    async addItem(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}