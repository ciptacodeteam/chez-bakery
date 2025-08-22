"use client"

import { fetchAPI } from "@/lib/apiClient"
import { Category } from "@/lib/interface"
import { validateCategoryForm } from "@/lib/formValidation"

import { usePathname } from "next/navigation"

import { ChangeEvent, FormEvent, useEffect, useState } from "react"

import clsx from "clsx"

import { head } from "@vercel/blob"

import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export default function CategoryDetails() {
    const path = usePathname()

    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [ isLoadingSubmit, setIsLoadingSubmit ] = useState<boolean>(false)

    const [ category, setCategory ] = useState<Category>({
        id: "",
        categoryName: "",
        categoryImage: "",
        isActive: true
    })

    const [ errors, setErrors ] = useState<Record<string, string>>({})

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setCategory((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoadingSubmit(true)

        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        // If the image is not updated by the user (i.e. file input tag is empty)
        if ((formData.get("categoryImage") as File).size === 0) {
            const placeholderFile = new File(["image"], "image") // only to pass validation if the user doesn't update the image

            formData.set("prevCategoryImage", category.categoryImage)
            formData.set("categoryImage", placeholderFile)
        }

        const { valid, errors } = validateCategoryForm(formData)

        if (!valid) {
            setErrors(errors)
            setIsLoadingSubmit(false)
            return
        }

        const data = await fetchAPI(`/api/categories/${category.id}`, "PUT", formData)

        if (data.success) {

        }

        setIsLoadingSubmit(false)
    }

    const load = async () => {
        const data = await fetchAPI(`/api/categories/${path.split("/")[3]}`, "GET")

        setCategory(data.categoryDetail)
        setIsLoading(false)
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <>
            <div>
                <div className="px-4 sm:px-0">
                    <h3 className="text-base/7 font-semibold text-gray-900">Category Information</h3>
                    <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Create new category information.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <form onSubmit={handleSubmit}>
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">Category Name</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {
                                        isLoading ?
                                        <Skeleton width={175} />
                                        :
                                        <input
                                            id="categoryName"
                                            name="categoryName"
                                            type="text"
                                            placeholder="Cake"
                                            value={category.categoryName}
                                            onChange={handleChange}
                                            className={clsx("block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6", errors.categoryName === undefined ? "border-gray-300" : "border-red-500")}
                                        />
                                    }
                                    { errors.categoryName && <p className="text-red-500 text-xs mt-1">{errors.categoryName}</p>}
                                </dd>
                            </div>
                        </dl>

                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">Category Image</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {
                                        isLoading ?
                                        <div>
                                            <Skeleton width={200} height={200} />
                                            <Skeleton width={175} className="mt-4"/>
                                        </div>
                                        :
                                        <div>
                                            <img src={category.categoryImage} alt="category" className="mt-2"/>
                                            <input
                                                id="categoryImage"
                                                name="categoryImage"
                                                type="file"
                                                accept="image/jpeg, .jpg, .jpeg, .png"
                                                className={clsx("block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mt-4", errors.categoryImage === undefined ? "border-gray-300" : "border-red-500")}
                                            />
                                        </div>
                                    }
                                    { errors.categoryImage && <p className="text-red-500 text-xs mt-1">{errors.categoryImage}</p>}
                                </dd>
                            </div>
                        </dl>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-4 mt-5"
                        >
                            { isLoading ? "Submitting..." : "Create New Category" }
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}