export const fetchAPI = async (url: string, method: string, formData?: FormData) => {
    try {
        const res = await fetch(`${url}`, {
            method: method,
            body: formData
        })
        const data = await res.json()

        return data
    } catch (err) {
        console.error(err)
    }
}