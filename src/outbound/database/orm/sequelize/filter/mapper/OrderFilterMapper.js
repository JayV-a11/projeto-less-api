import OrderFilter from '../OrderFilter.js';

export default class OrderFilterMapper {
    constructor() {}

    adapt(filter) {
        const orderFilter = new OrderFilter();

        const filterKeys = Object.keys(filter);

        for (const key of filterKeys) {
            if(key === 'limit' && filter.limit) {
                orderFilter[key] = Number(filter.limit);
                continue;
            }
            if(key === 'group' && filter.group) {
                orderFilter[key] = [];
                for (const group of filter.group) {
                    orderFilter[key].push(group);
                }
                continue;
            }
            if(key === 'sort' && filter.sort) {
                orderFilter[key] = [];
                for (const sort of filter.sort) {
                    orderFilter[key].push(sort);
                }
                continue;
            }

            if (key === "fields" && filter.fields) {
                const fieldsKeys = Object.keys(JSON.parse(filter.fields));
                const fieldsObject = JSON.parse(filter.fields);

                for (const fieldKey of fieldsKeys) {
                  if (fieldsObject[fieldKey]  !== "")
                    orderFilter.concat({
                      [fieldKey]:  fieldsObject[fieldKey],
                    });
                }
              }
        }

        if (filter.page && filter.limit) {
            orderFilter.offset = ((filter.page - 1) * filter.limit);
        }

        return orderFilter;
    }
}