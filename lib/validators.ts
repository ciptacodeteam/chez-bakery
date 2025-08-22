export const isRequired = (value: string, fieldName?: string) => {
    // Validation of image input
    if (value === "0") {
        return `${fieldName} is required.`
    }

    return value.trim() ? "" : `${fieldName} is required.`
}