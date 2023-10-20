export const getErrormessageByProperty = (obj: Record<string, any>, propertyPath: string) => {
    const property = propertyPath.split(".")
    let value = obj;

    for (let prop of property) {
        if (value[prop]) {
            value = value[prop];
        }
        else {
            return undefined;
        }
    }

    return value.message;

}