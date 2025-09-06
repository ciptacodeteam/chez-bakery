'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '@/public/svg/logo.svg';

const LoadingScreen = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center h-screen w-full bg-[#f8f5f0]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={logo}
        alt='Loading'
        width={120}
        height={120}
        className='mb-6 animate-pulse'
        unoptimized
      />
      <h2 className='text-xl font-semibold text-primary mb-2'>
        Loading Menus...
      </h2>
      <p className='text-slate-500 font-quicksand text-center mx-10'>
        Please wait while we prepare something delicious for you.
      </p>
    </motion.div>
  );
};
export default LoadingScreen;
