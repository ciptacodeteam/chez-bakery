export function currentDateTime() {
    const date = new Date()

    const time = date.toISOString().split("T")[1]

    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    const month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth()
    const year = date.getFullYear()

    return `${year}-${month}-${day}T${time}`
}

export function dateTransform(isoDate: string) {
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const d = isoDate.split("T")[0]
    
    const [ year, month, date ] = d.split("-")

    return `${monthName[parseInt(month) - 1]} ${date}, ${year}`
}