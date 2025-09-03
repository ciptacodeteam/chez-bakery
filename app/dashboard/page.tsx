"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
    const router = useRouter()

    const redirect = () => {
        router.push("/dashboard/categories")
    }

    useEffect(() => {
        redirect()
    }, [])

    return (
        <>
            
        </>
    )
}