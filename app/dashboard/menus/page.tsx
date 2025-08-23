"use client"

import { fetchAPI } from "@/lib/apiClient"
import { Category, Menu } from "@/lib/interface"

import { useEffect, useState } from "react"

export default function Menus() {
    const files = [
        {
            title: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            title: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            title: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            title: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        // More files...
    ]

    const [ storage, setStorage ] = useState<Record<string, Menu[]>>({})

    const [ isLoading, setIsLoading ] = useState<boolean>(true)

    const load = async () => {
        const data = await fetchAPI("/api/menus", "GET")

        groupMenuByCategory(data.categories, data.menus)
        setIsLoading(false)
    }

    const groupMenuByCategory = (categories: Category[], menus: Menu[]) => {
        const result: Record<string, Menu[]> = {}

        for (const category of categories) {
            const categoryMenu = menus.filter((menu) => menu.categoryId === category.id)

            result[`${category.categoryName}`] = categoryMenu
        }

        setStorage(result)
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <>
            <h1 className="font-semibold">Menu</h1>
            <p>List of all of your bakery's menu here.</p>

            {/* Filter condition */}
            

            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {files.map((file, index) => (
                    <li key={index} className="relative">
                    <div className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img
                        alt=""
                        src={file.source}
                        className="pointer-events-none aspect-10/7 object-cover group-hover:opacity-75"
                        />
                        <button type="button" className="absolute inset-0 focus:outline-hidden">
                        <span className="sr-only">View details for {file.title}</span>
                        </button>
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
                    <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}