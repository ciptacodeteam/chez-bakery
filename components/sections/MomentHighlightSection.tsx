import momentOne from '@/public/images/moment-1.jpg';
import momentTwo from '@/public/images/moment-2.jpg';
import momentThree from '@/public/images/moment-3.jpg';
import momentFour from '@/public/images/moment-4.jpg';
import momentFive from '@/public/images/moment-5.jpg';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MomentHighlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section ref={ref}>
      <motion.div
        className='my-20 w-11/12 mx-auto'
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <motion.h1
            className='text-2xl text-primary font-semibold md:text-4xl'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Baked Beauty
          </motion.h1>
          <motion.p
            className='mt-2 md:text-lg font-quicksand'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            A peek at our favourites from chez to customers.
          </motion.p>
        </div>

        {/* Mobile */}
        <div className='my-10 block md:hidden'>
          {[momentOne, momentTwo, momentThree, momentFour, momentFive].map(
            (img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              >
                <Image
                  src={img}
                  width={400}
                  height={300}
                  alt='moment'
                  className='rounded-xl my-5'
                />
              </motion.div>
            )
          )}
        </div>

        {/* Desktop */}
        <div className='my-10 hidden md:grid md:grid-cols-5 md:gap-x-5'>
          {[0, 1, 2, 3, 4].map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
            >
              {i === 1 && (
                <Image
                  src={momentTwo}
                  alt='moment'
                  className='rounded-xl my-5 h-[220px] lg:h-[375px]'
                />
              )}
              {i === 3 && (
                <Image
                  src={momentFour}
                  width={400}
                  height={300}
                  alt='moment'
                  className='rounded-xl my-5 h-[220px] lg:h-[375px]'
                />
              )}
              {(i === 0 || i === 2 || i === 4) && (
                <>
                  <Image
                    src={momentOne}
                    width={400}
                    height={300}
                    alt='moment'
                    className='rounded-xl my-5'
                  />
                  <Image
                    src={momentThree}
                    width={400}
                    height={300}
                    alt='moment'
                    className='rounded-xl my-10'
                  />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default MomentHighlightSection;
