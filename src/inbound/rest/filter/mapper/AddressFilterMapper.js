import AbstractFilter from '../../../../core/filter/AbstractFilter.js';

export default class AddressFilterMapper {
    constructor() {}

    adapt(addressFilter) {
        const filter = new AbstractFilter();

        const filterKeys = Object.keys(addressFilter.filter);

        const fields = {};

        for (const key of filterKeys) {
            if(key === 'limit') {
                filter.limit = addressFilter.filter[key];
                continue;
            }
            if(key === 'page') {
                filter.page = addressFilter.filter[key];
                continue;
            }
            if(key === 'group') {
                filter.group = addressFilter.filter[key].split(',');
                continue;
            }
            if(key === 'sort') {
                filter.sort = addressFilter.filter[key].split(',');
                continue;
            }
            if(key === 'id') {
                fields[key] = addressFilter.filter[key];
                continue;
            }
            if(key === 'costumer_id') {
                fields[key] = addressFilter.filter[key];
                continue;
            }
        }

        if (Object.keys(fields).length > 0) {
            filter.fields = fields;
        }

        return filter;
    }
}