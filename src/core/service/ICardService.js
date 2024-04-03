export default class ICardService {
    constructor () {
        if (!this.createCard) throw new Error(`Method creatCard not implemented in ${this.constructor.name})`);
    }
}