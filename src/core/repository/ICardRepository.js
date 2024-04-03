import IRepository from './IRepository.js';

export default class ICardRepository extends IRepository {
    constructor(connection) {
        super(connection);
    }
}