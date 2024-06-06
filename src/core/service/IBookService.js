export default class IBookService {
    constructor () {
        if (!this.createBook) throw new Error(`Method createBook not implemented in ${this.constructor.name})`);
    }
}