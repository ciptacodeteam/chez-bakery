"use client"

import Image from "next/image";

import footer from "@/public/images/footer.jpg"
import chez from "@/public/images/chez.png"

import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Footer() {
    const path = usePathname()
    const isDashboard = path.startsWith("/dashboard")
    const isSignIn = path.startsWith("/sign-in")

    return (
        <>
            {
                isDashboard || isSignIn ?
                <div></div>
                :
                <footer className="mt-20 mb-10 w-11/12 mx-auto text-[#304428] md:flex md:flex-row">
                    <Image src={footer} alt="footer" width={400} height={400} className="rounded-xl md:w-1/2" />

                    <div className="md:w-1/2 md:h-full md:bg-red-100 md:h-full">
                        <div className="bg-[#eae0d4] text-[#304428] py-10 px-5 my-5 rounded-xl md:mt-0">
                            <h1 className="text-3xl mb-10 font-semibold">Visit or Reach Out</h1>
                            <ul style={{ fontFamily: "var(--font-quicksand)" }} className="">
                                <li className="flex items-center my-1"><MapPinIcon className="w-4 h-4 mr-2"/> Jl. Williem Iskandar No. 73, Medan</li>
                                <li className="flex items-center my-1"><PhoneIcon className="w-4 h-4 mr-2"/> (+62) 8112345678</li>
                                <li className="flex items-center my-1"><ClockIcon className="w-4 h-4 mr-2"/> Open Mon-Sun | 8 AM - 10 PM</li>
                            </ul>
                        </div>

                        <div className="flex items-center bg-[#eae0d4] px-5 py-5 rounded-xl">
                            <Image src={chez} alt="logo" width={50} height={50} className="w-1/4 mr-5" />

                            <div className="w-10/12 text-right" style={{ fontFamily: "var(--font-quicksand)" }}>
                                <ul className="flex flex-wrap justify-end font-semibold">
                                    <li className="ml-4">About</li>
                                    <li className="ml-4">About</li>
                                    <li className="ml-4">About</li>
                                    <li className="ml-4">About</li>
                                    <li className="ml-4">About</li>
                                </ul>

                                <p className="text-xs mt-2">Copyright &copy; 2025 CHEZ. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            }
        </>
    )
}