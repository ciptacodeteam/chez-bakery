import halal from '@/public/svg/halal.svg'

import Image from 'next/image';
import Link from "next/link";

export default function ContactUs() {
    return (
        <>

            <div className="relative bg-[url('/images/img10.webp')] bg-cover bg-no-repeat" style={{ backgroundPosition: '50% 20%' }}>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto py-32 flex flex-col items-center justify-center z-10">

                    {/* Title with horizontal lines */}
                    <div className="flex items-center gap-4 w-full max-w-md mb-4">
                        <div className="flex-1 border-t border-white"></div>
                        <h1 className="text-lg text-white whitespace-nowrap font-quicksand">
                            CONTACT US
                        </h1>
                        <div className="flex-1 border-t border-white"></div>
                    </div>

                    {/* Subtitle */}
                    <h2 className="text-white text-5xl text-center w-2/5">
                        CONNECT WITH US: HOW TO REACH CHEZ
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <div className="bg-[#eae0d4] py-10 px-10">
                    <div className="bg-white">
                        <div className="px-12 py-12">
                            <h1 className="text-3xl text-primary">
                                Our Contact & Location
                            </h1>

                            <div>
                                <h1 className='text-primary font-quicksand font-semibold mt-10'>ADDRESS</h1>
                                <p className='text-primary font-quicksand mt-2'>Jl. Williem Iskandar No. 73, Kota Medan, Sumatera Utara 20221.</p>
                            </div>

                            <div className="mt-10">
                                <h1 className='text-primary font-quicksand font-semibold mb-2'>CONTACT</h1>
                                <div className='flex items-center'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#293b22" className="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                                    </div>
                                    <p className='text-primary font-quicksand ms-2'>+62 811 6162 1131</p>
                                </div>
                            </div>

                            <div className='mt-10'>
                                <h1 className='text-primary font-quicksand font-semibold'>OPENING HOURS</h1>
                                <p className='text-primary font-quicksand mt-2'>Everyday 8AM - 10PM</p>
                            </div>

                            <div className='mt-10'>
                                <h1 className='text-primary font-quicksand font-semibold mb-2'>SOCIAL</h1>
                                <div>
                                    <Link
                                        href={"https://www.instagram.com/chezbakery_id"}
                                    >
                                        <div className='flex items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke='#293b22' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                            <p className='text-primary font-quicksand ms-2'>@chezbakery_id</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63710.148821328185!2d98.63132431953126!3d3.6139295601580246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031338a1bfb8747%3A0x2bbf61ced0f33671!2sCHEZ%20bakery%20%26%20caf%C3%A9!5e0!3m2!1sid!2sid!4v1757126785113!5m2!1sid!2sid" className="w-full h-full" height="450" loading="lazy"></iframe>
                </div>
            </div>
        </>
    )
}