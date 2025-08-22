import { isRequired } from "./validators"

type ValidationErrors = {
    valid: boolean,
    errors: Record<string, string>
}

export function validateCategoryForm(data: FormData): ValidationErrors {
    const errors: Record<string, string> = {}

    const categoryError = isRequired(data.get("categoryName") as string, "Category name") || isRequired(data.get("categoryName") as string)
    if (categoryError) errors.categoryName = categoryError

    const categoryImageError = isRequired((data.get("categoryImage") as File).size.toString() as string, "Category image") || isRequired((data.get("categoryImage") as File).size.toString() as string)
    if (categoryImageError) errors.categoryImage = categoryImageError

    return {
        valid: Object.keys(errors).length === 0,
        errors
    }
}