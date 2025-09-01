"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';

import { fetchAPI } from "@/lib/apiClient"

import Image from "next/image"
import Link from "next/link"

import { Menu } from "@/lib/interface"

import placeholder from "@/public/images/custom.png"

import { useEffect, useState } from "react"

import 'swiper/css';
import 'swiper/css/effect-creative';

const slidesMobile = [
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
]

export default function MenuPage() {
    const [ storage, setStorage ] = useState<Record<string, Menu[] | string>[]>()

    const [ isLoading, setIsLoading ] = useState<boolean>(true)

    const load = async () => {
        const data = await fetchAPI("/api/menus", "GET")

        console.log(data)

        setStorage(data.categoryMenus)
        setIsLoading(false)
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <div className="tracking-wide">
            {/* Hero */}
            <div className="pt-24 pb-40 bg-[url(/images/hero-mobile.jpeg)] bg-cover">
                <div className="mt-32 w-11/12 mx-auto">
                    <div className="text-white text-center">
                        <h1 className="text-5xl font-semibold">Our Menu</h1>
                        <p className="mt-3" style={{ fontFamily: "var(--font-quicksand)" }}>All of our menus available at Chez bakery.</p>
                    </div>
                </div>
            </div>

            <div className="text-center py-20 w-9/12 mx-auto">
                <h4 className="text-slate-500">Eat with us</h4>
                <h1 className="text-3xl mt-5 leading-normal">Chez <br /> Bakery <br /> Menus</h1>

                <hr  className="w-2/12 mx-auto my-10 bg-[#304428]"/>

                <p className="text-slate-500" style={{ fontFamily: "var(--font-quicksand)" }}>Blablabla</p>
            </div>

            {/* Categories & Menus */}
            <div>
                {/* Category Section */}
                {
                    storage?.map((s: Record<string, Menu[] | string>, index) => (
                        <div key={index}>
                            <div className={`bg-cover h-[250px]`} style={{ backgroundImage: `url(${s.categoryImage})` }}>
                                <div className="bg-black/50 w-full h-full flex justify-center items-center">
                                    <h1 className="text-white font-bold text-3xl text-center">{s.categoryName as string}</h1>
                                </div>
                            </div>

                            {/* Menu Section */}
                            <div className="py-20 w-11/12 mx-auto md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-10">
                                {
                                    (s.categoryMenu as Menu[]).map((menu: Menu, index) => (
                                        <div key={index} className="my-10">
                                            <div className="flex items-center">
                                                <Image src={menu.menuImage} alt="sample" width={70} height={70} className="mr-3 aspect-square rounded-xl" unoptimized/>

                                                <div>
                                                    <div className="flex flex-col lg:flex-row justify-between text-[#304428]">
                                                        <h3 className="">{menu.menuName}</h3>
                                                        <p className=" text-sm">Rp. {menu.price.toLocaleString()}</p>
                                                    </div>

                                                    <p className="mt-1 text-sm" style={{ fontFamily: "var(--font-quicksand)" }}>Fennel, citrus & herb yogourt. Served with fries and/or salad</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Mobile */}
            <div className="block lg:hidden">
                <Swiper
                    modules={[EffectCreative, Autoplay]}
                    effect="creative"
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    grabCursor={false}
                    slidesPerView={1}
                    spaceBetween={0}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    className="w-screen h-auto"
                >
                    {
                        slidesMobile.map((src, index) => (
                            <SwiperSlide key={index}>
                                <Image src={src} alt="placeholder" className='w-screen h-auto' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/* Desktop */}
            <div className="hidden lg:block">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    grabCursor={false}
                    slidesPerView={4}
                    spaceBetween={0}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    className="w-screen h-auto"
                >
                    {
                        slidesMobile.map((src, index) => (
                            <SwiperSlide key={index}>
                                <Image src={src} alt="placeholder" className='w-full h-auto object-cover' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/*  */}
            <div className="bg-[#eae0d4]">
                <div className="w-11/12 mx-auto py-20 text-center">
                    <h3 className="text-xs mb-5 text-slate-500">Come visit us today</h3>
                    <h1 className="text-3xl mb-5 text-[#304428]">About Chez</h1>

                    <hr  className="w-2/12 mx-auto my-10 bg-[#304428]"/>

                    <p className="mb-8" style={{ fontFamily: "var(--font-quicksand)" }}>This kitchen is a brewery of life – whether it&apos;s the kids baking parties or their parents elaborate soirees, there&apos;s always something cooking in here. Offering stylish and modern European cuisine served with exquisite attention to detail and immaculate presentation.</p>

                    <Link href="" className="px-4 py-2 border border-[#304428] rounded-full text-[#304428] font-bold" style={{ fontFamily: "var(--font-quicksand)" }}>Visit Us</Link>
                </div>
            </div>
        </div>
    )
}