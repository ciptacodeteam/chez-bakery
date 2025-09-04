'use client';

import CustomImage from '@/public/images/custom.png';
import SampleImage from '@/public/images/sample.jpg';

import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import AppLogo from '../brands/AppLogo';
import { Button } from '../ui/button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MenuHighlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className='md:max-w-11/12 px-5 md:px-0 mx-auto my-20' ref={ref}>
      {/* Animated Navigation Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className='md:flex md:justify-between md:items-center'
      >
        <div>
          <h1 className='text-3xl font-semibold text-primary md:text-4xl'>
            A Taste of Chez
          </h1>
          <p className='mt-2 md:text-lg font-quicksand'>
            Crafted in small batches. Always fresh. Always unforgettable.
          </p>
        </div>

        <div>
          <Button
            asChild
            variant={'outline'}
            className='border-primary text-primary font-semibold mt-5 md:mt-0 font-quicksand rounded-full group'
          >
            <Link href='/menus' className='flex items-center gap-2'>
              View Menu
              <IconArrowRight
                size={16}
                className='group-hover:translate-x-1 transition-all duration-200'
              />
            </Link>
          </Button>
        </div>
      </motion.div>

      <div className='my-10 md:grid md:grid-cols-3 md:gap-x-5 space-y-5 md:space-y-0'>
        {Array.from({ length: 3 }).map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: idx * 0.15 }}
            className='relative bg-[url(/images/sample.jpg)] h-[300px] bg-cover bg-no-repeat rounded-xl'
          >
            <div className='bg-black/20 w-full h-full rounded-xl'>
              <div className='absolute bottom-5 left-5'>
                <h1 className='font-semibold text-white text-2xl'>ASDz</h1>
                <p className='w-3/4 text-white font-semibold font-quicksand'>
                  Light, aromatic, and dusted with citrus glaze.
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Cake */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className='md:flex'
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='bg-[#eae0d4] px-8 md:px-14 pb-16 md:pb-16 pt-0 md:pt-6 rounded-xl md:w-1/2'
        >
          <div className='w-full flex justify-end'>
            <AppLogo clickable={false} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className='mt-10 lg:mt-20'
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className='text-2xl md:text-4xl text-primary font-semibold'
            >
              Special Cakes for Special Moments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className='mt-2 mb-10 md:text-lg font-quicksand'
            >
              Whether it&apos;s a wedding, birthday, or just because - our
              custom cakes are made to match your moment. Gluten - free and
              vegan options available.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Button
                asChild
                variant={'outline'}
                className='rounded-full border-primary bg-transparent hover:bg-primary hover:text-white text-primary font-semibold font-quicksand group !px-6'
              >
                <Link href={'/contact'} className='flex items-center gap-2'>
                  Start Your Custom Order
                  <IconArrowRight
                    size={16}
                    className='group-hover:translate-x-1 transition-all duration-200'
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className='hidden md:block md:w-1/2 md:rounded-xl md:ml-5'
        >
          <Image
            src={SampleImage}
            alt='logo'
            className='rounded-xl hidden md:block md:h-full md:w-full lg:hidden'
            width={600}
            height={600}
          />
          <Image
            src={CustomImage}
            alt='logo'
            className='rounded-xl hidden lg:block lg:h-full lg:w-full'
            width={600}
            height={600}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className='flex flex-row justify-center mt-10'
      >
        <Button
          asChild
          variant={'outline'}
          className='rounded-full border-primary font-quicksand'
          size={'lg'}
        >
          <Link href='/menus'>View full menu</Link>
        </Button>
      </motion.div>
    </div>
  );
};
export default MenuHighlightSection;
