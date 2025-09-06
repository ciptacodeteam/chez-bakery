import Image from 'next/image';
import logocolor from '@/public/svg/chezcolor.svg'
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

const AboutusSection = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-col justify-center items-center my-28'>
                    <div className='mb-8'>
                        <Image
                            alt=''
                            src={logocolor}
                            className='w-32'
                        />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-6xl text-center mb-8 text-primary w-2/3'>
                            CRAFTED WITH PASSION AT CHEZ BAKERY & CAFE
                        </h1>
                        <p className='font-quicksand text-center w-2/3 mb-4'>
                            Welcome to Chez Bakery & Cafe, where the aroma of freshly baked pastries meets the comfort of a perfectly brewed cup of coffee. Every visit is more than just a stop for a meal, it&apos;s a chance to slow down, savor, and connect.
                        </p>
                        <p className='font-quicksand text-center w-2/3'>
                            From our golden, buttery croissants to signature cakes and hand-crafted beverages, every item is made with care and passion. At Chez, we aspire to be more than a cafe, we&apos;re a gathering place where flavors, stories, and friendships come together.
                        </p>
                        <div className='mt-10'>
                            <button
                                className='border border-primary text-primary mt-5 md:mt-0 font-quicksand group px-6 py-2 hover:bg-primary hover:text-white group-hover:translate-x-1 transition-all duration-200'
                            >
                                <Link href='/menus' className='flex items-center gap-2'>
                                    Read more
                                    <IconArrowRight
                                        size={16}
                                    />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutusSection;