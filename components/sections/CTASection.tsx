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
      <motion.div
        className='my-20 w-11/12 mx-auto'
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className='bg-[#eae0d4] rounded-xl py-14 pt-0 md:pt-16 md:flex md:flex-row-reverse'
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
              className='text-2xl font-semibold text-primary md:text-4xl'
            >
              Ready to Order?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className='mt-2 md:text-lg font-quicksand'
            >
              Ready to indulge in our delicious offerings? Place your order now
              and experience the best of Chez Bakery!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className='mt-10'
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
      </motion.div>
    </section>
  );
};
export default CTASection;
