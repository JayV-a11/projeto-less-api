export default class ICartService {
    constructor () {
        if (!this.createCart) throw new Error(`Method creatCard not implemented in ${this.constructor.name})`);
    }
}