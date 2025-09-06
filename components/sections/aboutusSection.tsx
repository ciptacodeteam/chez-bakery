'use client';

import Image from 'next/image';
import logocolor from '@/public/svg/chezcolor.svg';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutusSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <div className="lg:max-w-7xl max-w-[92%] mx-auto" ref={ref}>
            <div className="flex flex-col justify-center items-center lg:my-28 my-20">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.7 }}
                    className="lg:mb-8 mb-6"
                >
                    <Image alt="" src={logocolor} className="w-32" />
                </motion.div>

                {/* Title + Text */}
                <div className="flex flex-col items-center">
                    <motion.h1
                        className="lg:text-6xl text-3xl text-center mb-8 text-primary lg:w-2/3"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        CRAFTED WITH PASSION AT CHEZ BAKERY & CAFE
                    </motion.h1>

                    <motion.p
                        className="font-quicksand text-center lg:w-2/3 mb-4"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Welcome to Chez Bakery & Cafe, where the aroma of freshly baked pastries meets the comfort of a perfectly brewed cup of coffee. Every visit is more than just a stop for a meal, it&apos;s a chance to slow down, savor, and connect.
                    </motion.p>

                    <motion.p
                        className="font-quicksand text-center lg:w-2/3"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        From our golden, buttery croissants to signature cakes and hand-crafted beverages, every item is made with care and passion. At Chez, we aspire to be more than a cafe, we&apos;re a gathering place where flavors, stories, and friendships come together.
                    </motion.p>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="lg:mt-10 mt-4"
                    >
                        <button className="border border-primary text-primary mt-5 md:mt-0 font-quicksand group px-6 py-2 hover:bg-primary hover:text-white group-hover:translate-x-1 transition-all duration-200">
                            <Link href="/menus" className="flex items-center gap-2">
                                Read more
                                <IconArrowRight size={16} />
                            </Link>
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutusSection;
