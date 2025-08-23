export const isRequired = (value: string, fieldName?: string) => {     
    if (value === "0") {
        return `${fieldName} is required`
    } else {
        return value.trim() ? "" : `${fieldName} is required.`
    }
}