import AddressFilter from '../AddressFilter.js';

export default class AddressFilterMapper {
    constructor() {}

    adapt(filter) {
        const addressFilter = new AddressFilter();

        const filterKeys = Object.keys(filter);

        for (const key of filterKeys) {
            if(key === 'limit' && filter.limit) {
                addressFilter[key] = Number(filter.limit);
                continue;
            }
            if(key === 'group' && filter.group) {
                addressFilter[key] = [];
                for (const group of filter.group) {
                    addressFilter[key].push(group);
                }
                continue;
            }
            if(key === 'sort' && filter.sort) {
                addressFilter[key] = [];
                for (const sort of filter.sort) {
                    addressFilter[key].push(sort);
                }
                continue;
            }

            if (key === 'fields' && filter.fields) {
                const fieldsKeys = Object.keys(filter.fields);
                for (const fieldKey of fieldsKeys) {
                    addressFilter.concat({[fieldKey]: filter.fields[fieldKey]});
                }
            }
        }

        if (filter.page && filter.limit) {
            addressFilter.offset = ((filter.page - 1) * filter.limit);
        }

        return addressFilter;
    }
}