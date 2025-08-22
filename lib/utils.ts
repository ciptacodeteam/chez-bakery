export function currentDateTime() {
    const date = new Date()

    const time = date.toISOString().split("T")[1]

    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    const month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth()
    const year = date.getFullYear()

    return `${year}-${month}-${day}T${time}`
}