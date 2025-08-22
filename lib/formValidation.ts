import { isRequired } from "./validators"

type ValidationErrors = {
    valid: boolean,
    errors: Record<string, string>
}

export function validateCategoryForm(data: FormData): ValidationErrors {
    const errors: Record<string, string> = {}

    const categoryError = isRequired(data.get("categoryName") as string, "Category name") || isRequired(data.get("categoryName") as string)
    if (categoryError) errors.categoryName = categoryError

    return {
        valid: Object.keys(errors).length === 0,
        errors
    }
}