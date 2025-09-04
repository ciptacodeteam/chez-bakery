'use client';

import Image from 'next/image';

import FooterImage from '@/public/images/footer.jpg';

import { ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import AppLogo from './brands/AppLogo';
import { navigation } from './navigation';

export default function Footer() {
  const path = usePathname();
  const isDashboard = path.startsWith('/dashboard');
  const isSignIn = path.startsWith('/sign-in');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  if (isDashboard || isSignIn) return null;

  return (
    <footer ref={ref}>
      <motion.div
        className='mt-20 mb-10 md:max-w-11/12 px-5 md:px-0 mx-auto text-primary grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-14 items-center'
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src={FooterImage}
            alt='Store Image'
            width={400}
            height={400}
            className='rounded-xl w-full md:mr-10'
          />
        </motion.div>

        <motion.div
          className='md:h-full flex flex-col justify-between'
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.div
            className='bg-[#eae0d4] text-primary py-8 px-8 my-5 rounded-xl md:mt-0 md:h-full'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.h1
              className='text-3xl mb-10 font-semibold'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Visit or Reach Out
            </motion.h1>
            <motion.ul
              className='font-quicksand'
              initial='hidden'
              animate='visible'
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.8,
                  },
                },
              }}
            >
              <motion.li
                className='flex items-center my-1'
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <MapPinIcon className='w-4 h-4 mr-2' /> Jl. Williem Iskandar No.
                73, Medan
              </motion.li>
              <motion.li
                className='flex items-center my-1'
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <PhoneIcon className='w-4 h-4 mr-2' /> (+62) 8112345678
              </motion.li>
              <motion.li
                className='flex items-center my-1'
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ClockIcon className='w-4 h-4 mr-2' /> Open Mon-Sun | 8 AM - 10
                PM
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            className='flex items-center bg-[#eae0d4] pl-5 pr-10 py-5 rounded-xl md:h-full'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <AppLogo clickable={false} />
            </motion.div>

            <motion.div
              className='w-10/12 text-right font-quicksand'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <motion.ul
                className='flex flex-wrap justify-end font-semibold'
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1.2,
                    },
                  },
                }}
              >
                {navigation.map((item) => (
                  <motion.li
                    key={item.name}
                    className='ml-4'
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p
                className='text-xs mt-2 md:mt-4'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                Copyright &copy; 2025 CHEZ. All rights reserved.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
