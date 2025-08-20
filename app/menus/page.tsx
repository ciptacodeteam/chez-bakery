import sample from "@/public/images/sample.jpg"

import Image from "next/image"
import Link from "next/link"

export default function Menu() {
    return (
        <>
            {/* Hero */}
            <div className="pt-24 pb-40 bg-[url(/images/hero-mobile.jpeg)] bg-cover">
                <div className="mt-32 w-11/12 mx-auto">
                    <div className="text-white text-center">
                        <h1 className="text-5xl font-semibold">Our Menu</h1>
                        <p className="text-sm mt-2">All of our menus available at Chez bakery.</p>
                    </div>
                </div>

            </div>
            
            <div className="text-center py-20">
                <h4>Eat with us</h4>
                <h1>Chez Bakery Menus</h1>

                <p>Blablabla</p>
            </div>

            {/* Categories & Menus */}
            <div>
                {/* Category Section */}
                <div className="bg-[url(/images/moment-1.jpg)] bg-cover h-[250px]">
                    <div className="bg-black/50 w-full h-full flex justify-center items-center">
                        <h1 className="text-white font-bold text-3xl text-center">This is the Category of the menus</h1>
                    </div>
                </div>

                {/* Menu Section */}
                <div className="py-20 w-11/12 mx-auto">
                    <div className="flex items-center">
                        <Image src={sample} alt="sample" width={70} height={70} className="mr-3"/>

                        <div>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold">SALMON TARTARE</h3>
                                <p className="text-lg font-semibold">$23</p>
                            </div>

                            <p className="mt-2 text-sm">Fennel, citrus & herb yogourt. Served with fries and/or salad</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="bg-amber-700">
                <div className="w-11/12 mx-auto py-20 text-center">
                    <h3 className="mb-1 text-xs">Come visit us today</h3>
                    <h1 className="text-3xl mb-5">About Chez</h1>

                    <p className="mb-8">This kitchen is a brewery of life – whether it&apos;s the kids baking parties or their parents elaborate soirees, there&apos;s always something cooking in here. Offering stylish and modern European cuisine served with exquisite attention to detail and immaculate presentation.</p>

                    <Link href="" className="px-4 py-2 border border-white rounded-full text-white">Visit Us</Link>
                </div>
            </div>
        </>
    )
}