'use client';

import CustomImage from '@/public/images/custom.png';
import SampleImage from '@/public/images/sample.jpg';

import img6 from "@/public/images/img6.webp"

import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MenuHighlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className='md:max-w-7xl px-5 md:px-0 mx-auto my-24' ref={ref}>
      {/* Animated Navigation Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className='md:flex md:justify-between md:items-center mb-10'>
          <div>
            <h1 className='text-3xl font-semibold text-primary md:text-6xl'>
              A Taste of Chez
            </h1>
            <p className='mt-2 md:text- font-quicksand'>
              Crafted in small batches. Always fresh. Always unforgettable.
            </p>
          </div>

          <div>
            <button
              className='border border-primary text-primary mt-5 md:mt-0 font-quicksand group px-6 py-2 hover:text-white hover:bg-primary group-hover:translate-x-1 transition-all duration-200'
            >
              <Link href='/menus' className='flex items-center gap-2'>
                View Menu
                <IconArrowRight
                  size={16}
                />
              </Link>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Custom Cake */}
      <div className='grid grid-cols-2 gap-4'>
        <div className='bg-primary flex items-center px-14 rounded-lg'>
          <div>
            <h1 className='text-2xl md:text-5xl text-white font-semibold leading-tight'>Special Cakes for Special Moments</h1>
            <p className='mt-2 mb-10 md:text-base font-quicksand text-white'> Whether it&apos;s a wedding, birthday, or just because - our
              custom cakes are made to match your moment. Gluten - free and
              vegan options available.</p>
            <div>
              <button
                className='border border-white/50 text-white mt-5 md:mt-0 font-quicksand group px-6 py-2 hover:border-white group-hover:translate-x-1 transition-all duration-200'
              >
                <Link href='/menus' className='flex items-center gap-2'>
                  Start Your Custom Order
                  <IconArrowRight
                    size={16}
                  />
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full h-[500px] relative">
            <Image
              src={img6}
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuHighlightSection;
