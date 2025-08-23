export const fetchAPI = async (url: string, method: string, formData?: FormData) => {
    try {
        const res = await fetch(`${url}`, {
            method: method,
            body: formData
        })
        const data = await res.json()

        if (res.status === 500) {
            return { success: false, message: "Something went wrong. Please try to refresh your browser / re-submit your data." }
        }

        return data
    } catch (err) {
        console.error(err)
    }
}