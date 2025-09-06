'use client';

import Link from 'next/link';
import Image from 'next/image';
import chezhero from "@/public/svg/chezhero.svg"

const HeroSection = () => {
  return (
    <section>
      <div className="relative bg-[url('/images/img1.webp')] bg-cover bg-no-repeat h-screen">

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center text-center px-4">
            {/* Logo */}
            <div className="mb-8">
              <Image
                alt="logo"
                src={chezhero}
                className="w-96"
              />
            </div>

            {/* Text */}
            <p className="font-quicksand text-white w-2/3 text-lg mb-10">
              Crafted with passion, served with care, and made to bring warmth and happiness in every bite.
            </p>

            <Link
              href={"/menus"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='font-quicksand border-1 border-white/50 hover:border-white text-white py-4 px-14 text-xl'>
                Menus
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
