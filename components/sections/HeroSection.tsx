'use client';

import { IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section className=" bg-[url('/images/hero-mobile.jpeg')] bg-cover bg-no-repeat bg-bottom">
      <div className='w-11/12 mx-auto pt-72 pb-40'>
        <motion.div
          className='text-white'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <motion.h1
            className='text-4xl font-semibold md:text-6xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            From Chez, <br /> with Love
          </motion.h1>
          <motion.p
            className='w-9/12 mt-2 font-base text-base md:text-lg font-quicksand'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Crafted with passion, served with care, and{' '}
            <br className='hidden md:block' /> delivered to delight every bite.
          </motion.p>
        </motion.div>

        <motion.div
          className='text-xs md:text-sm mt-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Button
            asChild
            size={'lg'}
            className='rounded-full bg-white border-white text-white font-quicksand font-bold bg-primary hover:bg-[#5d8650] mr-5'
          >
            <Link href='/menus'>View Menu</Link>
          </Button>
          <Button
            asChild
            variant={'outline'}
            size={'lg'}
            className='rounded-full font-quicksand font-bold border-white text-white hover:!bg-white/10  bg-transparent group hover:text-white'
          >
            <Link href='/contact-us'>
              Place an Order
              <IconArrowRight
                size={16}
                className='group-hover:translate-x-1 transition-all duration-200'
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
