import FounderImage from '@/public/images/founder.jpeg';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import AppLogo from '../brands/AppLogo';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BakerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref}>
      <motion.div
        className='my-24 md:max-w-11/12 px-5 md:px-0 w-full mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-y-16 md:gap-10'
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className='flex flex-col col-span-2 order-2 justify-center items-start bg-[#eae0d4] rounded-xl pb-16 pt-0 md:order-1'
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          <div className='flex w-full justify-end px-5 md:px-10'>
            <AppLogo clickable={false} />
          </div>
          <motion.div
            className='px-5 md:px-10'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <motion.h1
              className='text-3xl md:text-5xl text-primary font-bold mb-4 tracking-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Meet the Baker
            </motion.h1>
            <motion.p
              className='mb-8 mt-2 font-quicksand text-lg text-muted-foreground leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Discover the passion and artistry behind every loaf. Our founder
              blends tradition with innovation to create unforgettable flavors
              and experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button
                asChild
                variant='outline'
                className='rounded-full border-primary font-quicksand group !px-6 transition-all group bg-transparent hover:bg-primary hover:text-white'
                size='lg'
              >
                <Link href='/contact' className='flex items-center gap-2'>
                  <span className='font-semibold'>Learn more about us</span>
                  <IconArrowRight
                    size={16}
                    className='group-hover:translate-x-1 transition-all duration-200'
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className='flex-1 flex justify-center items-center'
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className='relative'
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Image
              src={FounderImage}
              alt='founder'
              width={400}
              height={400}
              className='rounded-2xl shadow-2xl border-4 border-primary/20 object-cover'
            />
            <motion.div
              className='absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full font-quicksand shadow-lg text-base text-center max-w-[320px] w-full'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              • Heart & Soul Behind Chez Bakery •
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default BakerSection;
