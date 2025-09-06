'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'; // ✅ import motion
import chezhero from "@/public/svg/chezhero.svg"

const HeroSection = () => {
  return (
    <section>
      <div className="relative bg-[url('/images/img1.webp')] bg-cover bg-no-repeat h-screen bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Image
                alt="logo"
                src={chezhero}
                className="lg:w-96 w-80"
              />
            </motion.div>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-quicksand text-white lg:w-2/3 lg:text-lg mb-10 w-5/6"
            >
              Crafted with passion, served with care, and made to bring warmth and happiness in every bite.
            </motion.p>

            <Link
              href={"/menus"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='font-quicksand border-1 border-white/50 hover:border-white text-white py-4 lg:px-14 px-12 lg:text-xl text-lg'
              >
                Menus
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
