'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

import logowhite from '@/public/svg/logowhite.svg'
import halal from '@/public/svg/halal.svg'

import Link from 'next/link';

export default function Footer() {
  const path = usePathname();
  const isDashboard = path.startsWith('/dashboard');
  const isSignIn = path.startsWith('/sign-in');

  const ref = useRef(null);

  if (isDashboard || isSignIn) return null;

  return (
    <footer ref={ref}>
      <div className='bg-primary py-5'>
        <div className='lg:max-w-7xl max-w-11/12 mx-auto py-4'>
          <div className='lg:grid lg:grid-cols-4 gap-10 mt-10'>
            <div>
              <div>
                <Link
                  href={"/"}
                >
                  <Image
                    src={logowhite}
                    alt=''
                    className='lg:w-44 w-38'
                  />
                </Link>
              </div>
              <div>
                <h1 className='text-white font-quicksand font-semibold lg:mt-10 mt-12'>ADDRESS</h1>
                <p className='text-white font-quicksand mt-2'>Jl. Williem Iskandar No. 73, Kota Medan, Sumatera Utara 20221.</p>
              </div>
            </div>
            <div>
              <div className='mb-12'>
                <h1 className='text-white font-quicksand font-semibold mt-10 lg:mt-0'>OPENING HOURS</h1>
                <p className='text-white font-quicksand mt-2'>Everyday 8AM - 10PM</p>
              </div>
              <div>
                <h1 className='text-white font-quicksand font-semibold mb-2'>CONTACT</h1>
                <div className='flex items-center'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                  </div>
                  <p className='text-white font-quicksand ms-2'>+62 811 6162 1131</p>
                </div>
              </div>
            </div>
            <div className='mt-12 lg:mt-0'>
              <h1 className='text-white font-quicksand font-semibold'>SITEMAP</h1>
              <div className='text-white font-quicksand mt-2'>
                <ul className='space-y-3'>
                  <li><Link href={"/"}>Home</Link></li>
                  <li><Link href={"/"}>Chez's Menu</Link></li>
                  <li><Link href={"/"}>Location</Link></li>
                  <li><Link href={"/"}>Social Media</Link></li>
                  <li><Link href={"/"}>Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className='mt-12 lg:mt-0'>
              <h1 className='text-white font-quicksand font-semibold mb-2'>SOCIAL</h1>
              <div>
                <Link
                  href={"https://www.instagram.com/chezbakery_id"}
                >
                  <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    <p className='text-white font-quicksand ms-2'>@chezbakery_id</p>
                  </div>
                </Link>
                <div className='mt-12'>
                  <h1 className='text-white font-quicksand font-semibold mb-2'>HALAL CERTIFIED</h1>
                  <div className='flex items-center'>
                    <Image
                      src={halal}
                      alt=''
                      className='w-7'
                    />
                    <p className='font-quicksand text-white ms-3'>ID12110026732710825</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-11/12 mx-auto'>
          <p className="text-white font-quicksand text-sm lg:mt-16 mt-10 text-center lg:flex lg:justify-center">
            ©{new Date().getFullYear()} Chez Bakery & Cafe. All Rights Reserved. <span className='hidden lg:block'>Designed & Developed by <span><Link href={"https://ciptacode.id/"}>Ciptacode</Link></span></span>
          </p>
        </div>
      </div>
      {/* <motion.div
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
      </motion.div> */}
    </footer>
  );
}
