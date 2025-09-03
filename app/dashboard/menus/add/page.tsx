"use client"

import { fetchAPI } from "@/lib/apiClient"
import { validateMenuForm } from "@/lib/formValidation"
import { Category } from "@/lib/interface"

import clsx from "clsx"

import { useRouter } from "next/navigation"

import { FormEvent, useEffect, useState } from "react"

export default function AddMenu() {
    const router = useRouter()

    const [ errors, setErrors ] = useState<Record<string, string>>({})

    const [ isFavourite, setIsFavourite ] = useState<boolean>(false)

    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [ isLoadingSubmit, setIsLoadingSubmit ] = useState<boolean>(false)

    const [ categories, setCategories ] = useState<Category[]>([])

    const handleChange = () => {
        setIsFavourite(!isFavourite)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        setIsLoadingSubmit(true)

        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        formData.append("isFavourite", isFavourite.toString())

        const { valid, errors } = validateMenuForm(formData)

        if (!valid) {
            setErrors(errors)
            setIsLoadingSubmit(false)
            return
        }

        const data = await fetchAPI("/api/menus", "POST", formData)

        if (data.success) {
            router.push("/dashboard/menus")
        }

        setIsLoadingSubmit(false)
    }

    const load = async () => {
        const data = await fetchAPI("/api/categories", "GET")

        setCategories(data.categories)
        setIsLoading(false)
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <>
           <div>
                <div className="px-4 sm:px-0">
                    <h3 className="text-base/7 font-semibold text-gray-900">Menu Information</h3>
                    <p className="mt-1 max-w-2xl text-sm/6 text-gray-500" style={{ fontFamily: "var(--font-quicksand)" }}>Create new menu information.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <form onSubmit={handleSubmit} style={{ fontFamily: "var(--font-quicksand)" }}>
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">Menu Name</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input
                                        id="menuName"
                                        name="menuName"
                                        type="text"
                                        placeholder="Cake"
                                        className={clsx("block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#304428] sm:text-sm/6", errors.menuName === undefined ? "border-gray-300" : "border-red-500")}
                                    />
                                    { errors.menuName && <p className="text-red-500 text-xs mt-1">{errors.menuName}</p>}
                                </dd>
                            </div>
                        </dl>

                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">Category Name</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <select name="categoryId" className={clsx("block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#304428] sm:text-sm/6", errors.categoryId === undefined ? "border-gray-300" : "border-red-500")}>
                                        <option value="">-</option>
                                        {
                                            categories.map((c, index) => (
                                                <option key={index} value={c.id}>{c.categoryName}</option>
                                            ))
                                        }
                                    </select>
                                    { errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId}</p>}
                                </dd>
                            </div>
                        </dl>
                        
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">Menu Description</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <textarea
                                        id="menuDescription"
                                        name="menuDescription"
                                        placeholder="Cake"
                                        className={clsx("block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#304428] sm:text-sm/6 border-gray-300")}
                                    />
                                </dd>
                            </div>
                        </dl>
                        
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">Menu Image</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input
                                        id="menuImage"
                                        name="menuImage"
                                        type="file"
                                        // value="2500000"
                                        accept="image/jpeg, .jpg, .jpeg, .png"
                                        className={clsx("block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#304428] sm:text-sm/6", errors.menuImage === undefined ? "border-gray-300" : "border-red-500")}
                                    />
                                    { errors.menuImage && <p className="text-red-500 text-xs mt-1">{errors.menuImage}</p>}
                                </dd>
                            </div>
                        </dl>

                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">Price</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input
                                        id="price"
                                        name="price"
                                        type="number"
                                        min="0"
                                        placeholder="150000"
                                        className={clsx("block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#304428] sm:text-sm/6", errors.price === undefined ? "border-gray-300" : "border-red-500")}
                                    />
                                    { errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
                                </dd>
                            </div>
                        </dl>
                        
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">Favourite</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input
                                        id="favourite"
                                        name="favourite"
                                        type="checkbox"
                                        checked={isFavourite}
                                        onChange={handleChange}
                                        className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#304428] sm:text-sm/6"
                                    />
                                </dd>
                            </div>
                        </dl>

                        <button
                            type="submit"
                            className="rounded-md bg-[#304428] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#5d8650] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#304428] ml-4 lg:ml-0 mt-5 hover:cursor-pointer"
                            disabled={isLoadingSubmit}
                        >
                            { isLoadingSubmit ? "Submitting..." : "Create New Menu" }
                        </button>
                    </form>
                </div>
            </div> 
        </>
    )
}