'use client';

import Image from 'next/image';
import Link from 'next/link';

import custom from '@/public/images/custom.png';
import sample from '@/public/images/sample.jpg';
import momentOne from '@/public/images/moment-1.jpg';
import momentTwo from '@/public/images/moment-2.jpg';
import momentThree from '@/public/images/moment-3.jpg';
import momentFour from '@/public/images/moment-4.jpg';
import momentFive from '@/public/images/moment-5.jpg';
import founder from '@/public/images/founder.jpeg';
import chez from '@/public/images/chez-logo.jpg';
import chezLogo from '@/public/images/chez.png';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="pt-36 pb-40 bg-[url('/images/hero-mobile.jpeg')] bg-cover">
        <div className='mt-32 w-11/12 mx-auto'>
          <div className='text-white'>
            <h1 className='text-4xl font-semibold md:text-6xl'>
              From Chez, <br /> with Love
            </h1>
            <p className='w-9/12 mt-2 font-base text-base md:text-lg font-quicksand'>
              Crafted with passion, served with care, and{' '}
              <br className='hidden md:block' /> delivered to delight every
              bite.
            </p>
          </div>

          <div className='text-xs md:text-sm mt-10'>
            <Link
              href=''
              className='bg-[#304428] text-white px-5 py-3 rounded-full mr-3 border border-[#304428] font-bold font-quicksand'
            >
              View Menu
            </Link>
            <Link
              href=''
              className='border border-white px-5 py-3 rounded-full text-white font-bold font-quicksand'
            >
              Place an Order
            </Link>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className='w-11/12 mx-auto my-20'>
        <div className='md:flex md:justify-between md:items-center'>
          <div className=''>
            <h1 className='text-3xl font-semibold text-[#304428] md:text-4xl'>
              A Taste of Chez
            </h1>
            <p className='mt-2 md:text-lg font-quicksand'>
              Crafted in small batches. Always fresh. Always unforgettable.
            </p>
          </div>

          <div className=''>
            <Link
              href=''
              className='border border-[#304428] px-4 py-2 rounded-full text-[#304428] hidden md:block md:text-sm md:font-semibold font-quicksand'
            >
              View Menu
            </Link>
          </div>
        </div>

        <div className='my-10 md:grid md:grid-cols-3 md:gap-x-5'>
          <div className='relative bg-[url(/images/sample.jpg)] h-[300px] bg-cover bg-no-repeat rounded-xl'>
            <div className='bg-black/20 w-full h-full rounded-xl'>
              <div className='absolute bottom-5 left-5'>
                <h1 className='font-semibold text-white text-2xl'>ASDz</h1>
                <p className='w-3/4 text-white font-semibold font-quicksand'>
                  Light, aromatic, and dusted with citrus glaze.
                </p>
              </div>
            </div>
          </div>
          <div className='relative bg-[url(/images/sample.jpg)] h-[300px] bg-cover bg-no-repeat rounded-xl'>
            <div className='bg-black/20 w-full h-full rounded-xl'>
              <div className='absolute bottom-5 left-5'>
                <h1 className='font-semibold text-white text-2xl'>ASDz</h1>
                <p className='w-3/4 text-white font-semibold font-quicksand'>
                  Light, aromatic, and dusted with citrus glaze.
                </p>
              </div>
            </div>
          </div>
          <div className='relative bg-[url(/images/sample.jpg)] h-[300px] bg-cover bg-no-repeat rounded-xl'>
            <div className='bg-black/20 w-full h-full rounded-xl'>
              <div className='absolute bottom-5 left-5'>
                <h1 className='font-semibold text-white text-2xl'>ASDz</h1>
                <p className='w-3/4 text-white font-semibold font-quicksand'>
                  Light, aromatic, and dusted with citrus glaze.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Cake */}
        <div className='md:flex'>
          {/* Left */}
          <div className='bg-[#eae0d4] px-5 py-10 rounded-xl md:w-1/2'>
            <div className='w-full flex justify-end'>
              <Image src={chez} alt='logo' width={100} height={100} />
            </div>

            <div className='mt-20'>
              <h1 className='text-2xl md:text-4xl text-[#304428] font-semibold'>
                Special Cakes for Special Moments
              </h1>
              <p className='mt-2 mb-10 md:text-lg font-quicksand'>
                Whether it&apos;s a wedding, birthday, or just because - our
                custom cakes are made to match your moment. Gluten - free and
                vegan options available.
              </p>

              <Link
                href={''}
                className='text-white bg-[#304428] px-4 py-2 rounded-full font-quicksand'
              >
                Start Your Custom Order
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className='hidden md:block md:w-1/2 md:rounded-xl md:ml-5'>
            <Image
              src={sample}
              alt='logo'
              className='rounded-xl hidden md:block md:h-full md:w-full lg:hidden'
            />
            <Image
              src={custom}
              alt='logo'
              className='rounded-xl hidden lg:block lg:h-full lg:w-full'
            />
          </div>
        </div>

        <div className='flex flex-row justify-center mt-10'>
          <Link
            href=''
            className='border border-[#304428] px-4 py-2 rounded-full text-[#304428] font-bold font-quicksand'
          >
            View full menu
          </Link>
        </div>
      </div>

      {/* Moments */}
      <div className='my-20 w-11/12 mx-auto'>
        <div>
          <h1 className='text-2xl text-[#304428] font-semibold md:text-4xl'>
            Baked Beauty
          </h1>
          <p className='mt-2 md:text-lg font-quicksand'>
            A peek at our favourites from chez to customers.
          </p>
        </div>

        {/* Mobile */}
        <div className='my-10 block md:hidden'>
          <Image
            src={momentOne}
            width={400}
            height={300}
            alt='moment'
            className='rounded-xl my-5'
          />
          <Image
            src={momentTwo}
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
            className='rounded-xl my-5'
          />
          <Image
            src={momentFour}
            width={400}
            height={300}
            alt='moment'
            className='rounded-xl my-5'
          />
          <Image
            src={momentFive}
            width={400}
            height={300}
            alt='moment'
            className='rounded-xl my-5'
          />
        </div>

        {/* Desktop */}
        <div className='my-10 hidden md:grid md:grid-cols-5 md:gap-x-5'>
          <div>
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
          </div>

          <Image
            src={momentTwo}
            alt='moment'
            className='rounded-xl my-5 h-[220px] lg:h-[375px]'
          />

          <div>
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
          </div>

          <Image
            src={momentFour}
            width={400}
            height={300}
            alt='moment'
            className='rounded-xl my-5 h-[220px] lg:h-[375px]'
          />

          <div>
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
          </div>
        </div>
      </div>

      {/* Meet the baker */}
      <div className='my-20 w-11/12 mx-auto md:flex md:flex-row-reverse'>
        <div className='md:ml-20 md:w-full md:h-full'>
          <div className='hidden md:flex md:justify-end md:w-full'>
            <Image
              src={chezLogo}
              alt='logo'
              width={100}
              height={100}
              className=''
            />
          </div>

          <div className='md:mt-96'>
            <h1 className='text-2xl md:text-4xl text-[#304428] font-semibold'>
              Meet the Baker
            </h1>
            <p className='mb-10 mt-5 font-quicksand'>Lorem ipsum</p>

            <Link
              href={''}
              className='border border-[#304428] text-[#304428] font-semibold px-4 py-2 rounded-full font-quicksand'
            >
              Learn more about us &rarr;
            </Link>
          </div>
        </div>

        <Image
          src={founder}
          alt='founder'
          width={400}
          height={400}
          className='rounded-xl mt-14 md:mt-0'
        />
      </div>

      {/* Ready to Order */}
      <div className='my-20 w-11/12 mx-auto'>
        <div className='bg-[#eae0d4] rounded-xl py-10 md:flex md:flex-row-reverse'>
          <div className='flex w-full justify-end'>
            <Image
              src={chez}
              width={200}
              height={200}
              alt='logo'
              className='mr-5'
            />
          </div>

          <div className='px-5 md:px-10 mt-10'>
            <h1 className='text-2xl font-semibold text-[#304428] md:text-4xl'>
              Ready to Order?
            </h1>
            <p className='mt-2 md:text-lg font-quicksand'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>

            <button className='border border-[#304428] bg-[#304428] text-white px-4 py-2 rounded-full mt-10 font-bold font-quicksand'>
              Order Now &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
