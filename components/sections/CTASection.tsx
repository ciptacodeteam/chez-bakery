import { IconArrowRight } from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import AppLogo from '../brands/AppLogo';
import { Button } from '../ui/button';
import { useRef } from 'react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section ref={ref}>
      <div className="bg-[url('/images/img7.webp')] bg-cover bg-no-repeat">
        <div className="relative bg-[url('/images/img7.webp')] bg-cover bg-no-repeat">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto py-24 flex items-center">
            <div>
              <div>
                <h1 className=" text-7xl font-bold text-white">
                  Ready to Order?
                </h1>
              </div>
              <p className='font-quicksand w-2/3 mt-4 mb-10 text-white'> Ready to indulge in our delicious offerings? Place your order now
                and experience the best of Chez Bakery!
              </p>
              <button
                className='border border-white/50 text-white mt-5 md:mt-0 font-quicksand group px-6 py-2 hover:border-white group-hover:translate-x-1 transition-all duration-200'
              >
                <Link href='/menus' className='flex items-center gap-2'>
                  Order now
                  <IconArrowRight
                    size={16}
                  />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <motion.div
        className='my-20 max-w-7xl mx-auto'
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className='rounded-xl py-14 pt-0 md:pt-16 md:flex md:flex-row-reverse'
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className='flex w-full justify-end px-5 md:px-10'
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AppLogo clickable={false} className='md:max-w-[200px]' />
          </motion.div>

          <motion.div
            className='px-5 md:px-10'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className='text-2xl font-semibold text-primary md:text-6xl'
            >
              Ready to Order?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className='mt-4 md:text-base font-quicksand'
            >
              Ready to indulge in our delicious offerings? Place your order now
              and experience the best of Chez Bakery!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className='mt-6'
            >
              <Button
                asChild
                className='rounded-full font-semibold font-quicksand group !px-6'
              >
                <Link href={'/contact'} className='flex items-center gap-2'>
                  Order now
                  <IconArrowRight
                    size={16}
                    className='group-hover:translate-x-1 transition-all duration-200'
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div> */}
    </section>
  );
};
export default CTASection;
