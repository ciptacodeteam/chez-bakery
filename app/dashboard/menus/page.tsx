"use client"

import { fetchAPI } from "@/lib/apiClient"
import { Menu } from "@/lib/interface"
import { groupMenuByCategory } from "@/lib/utils"

import { MouseEvent, useEffect, useState } from "react"

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

    const [ storage, setStorage ] = useState<Record<string, Menu[] | string>[]>([])

    const [ selectedMenus, setSelectedMenus ] = useState<Menu[]>([])

    const [ isLoading, setIsLoading ] = useState<boolean>(true)

    const load = async () => {
        const data = await fetchAPI("/api/menus", "GET")

        const categoryMenu = groupMenuByCategory(data.categories, data.menus)

        setStorage(categoryMenu)
        setSelectedMenus(categoryMenu[0].categoryMenu as Menu[])
        setIsLoading(false)
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const category = e.currentTarget.id

        for (const s of storage) {
            if (s.categoryName === category) {
                setSelectedMenus(s.categoryMenu as Menu[])
                break
            }
        }
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <>
            <h1 className="font-semibold">Menu</h1>
            <p>List of all of your bakery's menu here.</p>

            {/* Filter condition */}
            <div className="flex">
                {
                    storage.map((s: Record<string, Menu[] | string>, index) => (
                        <button key={index} id={s.categoryName as string} className="bg-blue-100 px-4 py-2 mr-3 rounded-full text-xs" onClick={handleClick}>{s.categoryName as string}</button>
                    ))
                }
            </div>
            

            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {
                    selectedMenus.map((menu, index) => (
                        <li key={index} className="relative">
                            <div className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img
                                alt=""
                                src={menu.menuImage}
                                className="pointer-events-none aspect-10/7 object-cover group-hover:opacity-75"
                                />
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{menu.menuName}</p>
                            <p className="pointer-events-none block text-xs font-medium text-gray-500">{menu.menuDescription}</p>
                            <p className="pointer-events-none block text-sm font-medium text-gray-500">Rp. {menu.price.toLocaleString()}</p>
                        </li>
                ))}
            </ul>
        </>
    )
}