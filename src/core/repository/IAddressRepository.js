import IRepository from './IRepository.js';

export default class IAddressRepository extends IRepository {
    constructor(connection) {
        super(connection);
    }
}