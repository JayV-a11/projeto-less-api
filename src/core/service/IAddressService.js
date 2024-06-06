export default class IBookService {
    constructor () {
        if (!this.createBook) throw new Error(`Method creatCard not implemented in ${this.constructor.name})`);
    }
}