export const isRequired = (value: string, fieldName?: string) => {
    return value.trim() ? "" : `${fieldName} is required.`
}