import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import GetCupomByCostumerStrategy from '../../strategy/Cupom/GetCupomByCostumerStrategy.js';

export default class GetCupomByCostumerUseCase extends AbstractUseCase {
    constructor({
        cupomService = null
    } = {}) {
        super();
        this.cupomService = cupomService;
        this.strategies = [
            new GetCupomByCostumerStrategy({
                cupomService: this.cupomService
            }),
        ]
    }

    async get(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}