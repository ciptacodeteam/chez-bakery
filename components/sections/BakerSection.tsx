import FounderImage from '@/public/images/founder.jpeg';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BakerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref}>
      <motion.div
        className='mt-0 mb-24 md:my-32 lg:max-w-7xl lg:px-5 md:px-0 w-full max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-y-20 md:gap-10'
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className='flex flex-col justify-center col-span-2 order-1 h-full md:order-2 '
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className='lg:px-5 md:px-10'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <motion.h1
              className='mt-18 lg:mt-0 text-3xl md:text-6xl text-primary font-bold mb-4 tracking-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Meet the Baker
            </motion.h1>
            <motion.p
              className='lg:mb-8 mb-4 font-quicksand text-lg text-muted-foreground leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Behind every loaf lies a story of patience, dedication, and creativity. Our founder carefully blends the warmth of time-honored traditions with the excitement of new ideas, crafting breads that awaken the senses and nourish the soul. Each loaf begins with the finest ingredients, patiently prepared, folded, and baked to perfection. From the golden crust to the soft, fragrant interior, every bite tells a tale of passion, skill, and unwavering commitment. More than just bread, each creation invites you into a journey,where flavors linger, memories are made, and moments of simple joy are savored again and again. Step into our world, and discover how the art of baking transforms ordinary ingredients into experiences meant to be cherished.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <button
                className='border border-primary text-primary mt-5 md:mt-0 font-quicksand group px-6 py-2 hover:bg-primary hover:text-white group-hover:translate-x-1 transition-all duration-200'
              >
                <Link href='https://share.google/le4eFOa8gvFFW4y0j' className='flex items-center gap-2'>
                  Meet Us at Chez Bakery
                  <IconArrowRight
                    size={16}
                  />
                </Link>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className='flex-1 flex justify-center items-center order-2 md:order-1'
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
              width={380}
              height={380}
              className='rounded-2xl object-cover'
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
