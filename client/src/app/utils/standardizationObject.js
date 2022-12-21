export function standardizationObject(data) {
    return Object.keys(data).map((itemName) => ({
        label: data[itemName].name,
        value: data[itemName]._id
    }));
}
