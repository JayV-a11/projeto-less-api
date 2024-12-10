import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import DeleteCartItemStrategy from '../../strategy/Cart/DeleteCartItemStrategy.js';
import PurchaseUpdateRestoreStockStrategy from '../../strategy/Cart/PurchaseUpdateRestoreStockStrategy.js';

export default class DeleteCartItemUseCase extends AbstractUseCase {
    constructor({
        cartService = null,
        bookService = null,
    } = {}) {
        super();
        this.cartService = cartService;
        this.bookService = bookService;
        this.strategies = [
            new PurchaseUpdateRestoreStockStrategy({
                bookService: this.bookService
            }),
            new DeleteCartItemStrategy({
                cartService: this.cartService
            }),
        ]
    }

    async deleteItem(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}