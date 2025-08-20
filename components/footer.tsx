"use client"

import Image from "next/image";

import footer from "@/public/images/footer.jpg"

import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Footer() {
    const path = usePathname()
    const isDashboard = path.startsWith("/dashboard")

    return (
        <>
            {
                isDashboard ?
                <div></div>
                :
                <footer className="mt-20 mb-10 w-11/12 mx-auto">
                    <Image src={footer} alt="footer" width={400} height={400} className="rounded-xl" />

                    <div className="bg-amber-100 py-10 px-5 my-5 rounded-xl">
                        <h1 className="text-3xl mb-10">Visit or Reach Out</h1>
                        <ul>
                            <li className="flex items-center my-1"><MapPinIcon className="w-4 h-4 mr-2"/> Jl. Williem Iskandar No. 73, Medan</li>
                            <li className="flex items-center my-1"><PhoneIcon className="w-4 h-4 mr-2"/> (+62) 8112345678</li>
                            <li className="flex items-center my-1"><ClockIcon className="w-4 h-4 mr-2"/> Open Mon-Sun | 8 AM - 10 PM</li>
                        </ul>
                    </div>

                    <div className="flex items-center bg-amber-100 px-5 py-5 rounded-xl">
                        <h1 className="w-4/12">CHEZ</h1>
                        
                        <div className="w-10/12 text-right">
                            <ul className="flex flex-wrap justify-end">
                            <li className="ml-4">About</li>
                            <li className="ml-4">About</li>
                            <li className="ml-4">About</li>
                            <li className="ml-4">About</li>
                            <li className="ml-4">About</li>
                            </ul>

                            <p className="text-xs mt-2">Copyright &copy; 2025 CHEZ. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            }
        </>
    )
}