export const fetchAPI = async (url: string, method: string, formData?: FormData) => {
    try {
        const res = await fetch(`${url}`, {
            method: method,
            body: formData
        })
        const data = await res.json()

        if (!res.ok) {
            throw new Error("There is an error while submitting / fetching data. Please try again.")
        }

        return data
    } catch (err) {
        console.error(err)
    }
}