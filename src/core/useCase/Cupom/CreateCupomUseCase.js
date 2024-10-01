import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import SaveCupomStrategy from '../../strategy/Cupom/SaveCupomStrategy.js';

export default class CreateCupomUseCase extends AbstractUseCase {
    constructor({
        cupomService = null
    } = {}) {
        super();
        this.cupomService = cupomService;
        this.strategies = [
            new SaveCupomStrategy({
                cupomService: this.cupomService
            }),
        ]
    }

    async createCupom(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}