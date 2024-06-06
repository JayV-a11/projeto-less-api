import BookFilter from '../BookFilter.js';

export default class BookFilterMapper {
    constructor() {}

    adapt(filter) {
        const bookFilter = new BookFilter();

        const filterKeys = Object.keys(filter);

        for (const key of filterKeys) {
            if(key === 'limit' && filter.limit) {
                bookFilter[key] = Number(filter.limit);
                continue;
            }
            if(key === 'group' && filter.group) {
                bookFilter[key] = [];
                for (const group of filter.group) {
                    bookFilter[key].push(group);
                }
                continue;
            }
            if(key === 'sort' && filter.sort) {
                bookFilter[key] = [];
                for (const sort of filter.sort) {
                    bookFilter[key].push(sort);
                }
                continue;
            }

            if (key === 'fields' && filter.fields) {
                const fieldsKeys = Object.keys(filter.fields);
                for (const fieldKey of fieldsKeys) {
                    bookFilter.concat({[fieldKey]: filter.fields[fieldKey]});
                }
            }
        }

        if (filter.page && filter.limit) {
            bookFilter.offset = ((filter.page - 1) * filter.limit);
        }

        return bookFilter;
    }
}