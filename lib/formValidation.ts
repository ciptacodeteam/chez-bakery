import { isRequired } from "./validators"

type ValidationErrors = {
    valid: boolean,
    errors: Record<string, string>
}

export function validateCategoryForm(data: FormData, method?: string): ValidationErrors {
    const errors: Record<string, string> = {}

    const categoryError = isRequired(data.get("categoryName") as string, "Category name") || isRequired(data.get("categoryName") as string)
    if (categoryError) errors.categoryName = categoryError

    if (method !== "PUT") {
        const categoryImageError = isRequired((data.get("categoryImage") as File).size.toString() as string, "Category image") || isRequired((data.get("categoryImage") as File).size.toString() as string)
        if (categoryImageError) errors.categoryImage = categoryImageError
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors
    }
}

export function validateMenuForm(data: FormData, method?: string): ValidationErrors {
    const errors: Record<string, string> = {}

    const menuNameError = isRequired(data.get("menuName") as string, "Menu name") || isRequired(data.get("menuName") as string)
    if (menuNameError) errors.menuName = menuNameError

    const categoryIdError = isRequired(data.get("categoryId") as string, "Category name") || isRequired(data.get("categoryId") as string)
    if (categoryIdError) errors.categoryId = categoryIdError

    const priceError = isRequired(data.get("price") as string, "Price") || isRequired(data.get("price") as string)
    if (priceError) errors.price = priceError

    if (method !== "PUT") {
        const menuImageError = isRequired((data.get("menuImage") as File).size.toString() as string, "Menu image") || isRequired((data.get("menuImage") as File).size.toString() as string)
        if (menuImageError) errors.menuImage = menuImageError 
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors
    }
}