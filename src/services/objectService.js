const objectService = {
    getNestedPropertyValue(object, nestedProperty) {
        let obj = object;
        const split = nestedProperty.split('.');
        for (let z = 0; z < split.length; z++) {
            obj = obj[split[z]];
        }
        return obj;
    },
};

export default objectService;
