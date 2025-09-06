'use client';

import img6 from "@/public/images/img6.webp"

import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MenuHighlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      className='lg:max-w-7xl max-w-11/12 lg:px-5 md:px-0 mx-auto lg:my-24 my-18 overflow-x-hidden'
      ref={ref}
    >
      {/* Animated Navigation Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className='md:flex md:justify-between md:items-center lg:mb-10 mb-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='lg:text-5xl text-4xl font-semibold text-primary md:text-6xl'>
              A Taste of Chez
            </h1>
            <p className='mt-2 font-quicksand'>
              Crafted in small batches. Always fresh. Always unforgettable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <button className='border border-primary text-primary mt-5 md:mt-0 font-quicksand group px-6 py-2 hover:text-white hover:bg-primary group-hover:translate-x-1 transition-all duration-200'>
              <Link href='/menus' className='flex items-center gap-2'>
                View Menu
                <IconArrowRight size={16} />
              </Link>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Custom Cake */}
      <div className='lg:grid grid-cols-2 lg:gap-4'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='bg-primary flex items-center lg:px-14 px-8 lg:py-0 py-10 rounded-lg'
        >
          <div>
            <h1 className='text-2xl md:text-5xl text-white font-semibold leading-tight'>
              Special Cakes for Special Moments
            </h1>
            <p className='mt-2 mb-10 md:text-base font-quicksand text-white'>
              Whether it&apos;s a wedding, birthday, or just because - our
              custom cakes are made to match your moment. Gluten-free and
              vegan options available.
            </p>
            <div>
              <button className='border border-white/50 text-white lg:mt-5 md:mt-0 font-quicksand group px-6 py-2 hover:border-white group-hover:translate-x-1 transition-all duration-200'>
                <Link href='/menus' className='flex items-center gap-2'>
                  Start Your Custom Order
                  <IconArrowRight size={16} />
                </Link>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="w-full h-[500px] relative mt-4 lg:mt-0">
            <Image
              src={img6}
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuHighlightSection;
