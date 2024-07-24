export default class ICartService {
    constructor () {
        if (!this.createCard) throw new Error(`Method creatCard not implemented in ${this.constructor.name})`);
    }
}