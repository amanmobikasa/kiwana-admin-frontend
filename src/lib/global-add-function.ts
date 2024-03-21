//  add the object into the array of objects
export const globalAddFunction = (globalJson : object[], data : object | object[]) => {
    if (Array.isArray(data)) {
        return globalJson.concat(data);
    } else {
        return globalJson.concat([data]);
    }
}