"use client"

import { fetchAPI } from "@/lib/apiClient"
import { Menu } from "@/lib/interface"
import { groupMenuByCategory } from "@/lib/utils"

import { MouseEvent, useEffect, useState } from "react"

import Link from "next/link"

import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const loadMenus = [1, 2, 3, 4, 5]

export default function Menus() {
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
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-semibold">Menu</h1>
                    <p style={{ fontFamily: "var(--font-quicksand)" }} className="text-sm">List of all of your bakery's menu here.</p>
                </div>

                <Link
                    href="/dashboard/menus/add"
                    className="block rounded-md bg-[#304428] px-3 py-2 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ fontFamily: "var(--font-quicksand)" }}
                >
                    Add Menu
                </Link>
            </div>

            {/* Filter condition */}
            <div className="flex my-5">
                {
                    storage.map((s: Record<string, Menu[] | string>, index) => (
                        <button key={index} id={s.categoryName as string} className="bg-[#304428] px-4 py-2 mr-3 rounded-full text-xs text-white font-semibold hover:cursor-pointer hover:bg-[#5d8650]" style={{ fontFamily: "var(--font-quicksand)" }} onClick={handleClick}>{s.categoryName as string}</button>
                    ))
                }
            </div>
            

            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {
                    isLoading ?
                    loadMenus.map((m, index) => (
                        <li key={index} className="relative">
                            <div className="group overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                                <Skeleton width={300} height={150} />
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900"><Skeleton width={100} /></p>
                            <p className="pointer-events-none block text-xs font-medium text-gray-500"><Skeleton width={75} /></p>
                            <p className="pointer-events-none block text-sm font-medium text-gray-500"><Skeleton width={50} /></p>
                        </li>
                    ))
                    :
                    selectedMenus.map((menu, index) => (
                        <li key={index} className="relative">
                            <div className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-[#304428] focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <Link href={`/dashboard/menus/${menu.id}`}>
                                    <img
                                    alt=""
                                    src={menu.menuImage}
                                    className="pointer-events-none aspect-10/7 object-cover group-hover:opacity-75"
                                    />
                                </Link>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm text-gray-900 font-semibold"  style={{ fontFamily: "var(--font-quicksand)" }}>{menu.menuName}</p>
                            <p className="pointer-events-none block text-xs font-medium text-gray-500" style={{ fontFamily: "var(--font-quicksand)" }}>{menu.menuDescription}</p>
                            <p className="pointer-events-none block text-sm font-medium text-gray-500 mt-1" style={{ fontFamily: "var(--font-quicksand)" }}>Rp. {menu.price.toLocaleString()}</p>
                        </li>
                ))}
            </ul>
        </>
    )
}