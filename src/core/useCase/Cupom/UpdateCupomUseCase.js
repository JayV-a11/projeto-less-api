import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import UpdateCupomStrategy from '../../strategy/Cupom/UpdateCupomStrategy.js';

export default class UpdateCupomUseCase extends AbstractUseCase {
    constructor({
        cupomService = null
    } = {}) {
        super();
        this.cupomService = cupomService;
        this.strategies = [
            new UpdateCupomStrategy({
                cupomService: this.cupomService
            }),
        ]
    }

    async updateCupom(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}