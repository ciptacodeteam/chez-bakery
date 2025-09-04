'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import placeholder from '@/public/images/custom.png';

const LoadingScreen = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center h-screen w-full bg-[#f8f5f0]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={placeholder}
        alt='Loading'
        width={80}
        height={80}
        className='mb-6 animate-pulse'
        unoptimized
      />
      <h2 className='text-xl font-semibold text-primary mb-2'>
        Loading Menus...
      </h2>
      <p className='text-slate-500 font-quicksand'>
        Please wait while we prepare something delicious for you.
      </p>
    </motion.div>
  );
};
export default LoadingScreen;
