'use client';

import { Autoplay, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';

import { fetchAPI } from '@/lib/apiClient';

import Image from 'next/image';
import Link from 'next/link';

import { Menu } from '@/lib/interface';

import placeholder from '@/public/images/custom.png';

import { useEffect, useState } from 'react';

import { IconMapPin } from '@tabler/icons-react';
import 'swiper/css';
import 'swiper/css/effect-creative';

const slidesMobile = [
  placeholder,
  placeholder,
  placeholder,
  placeholder,
  placeholder,
];

export default function MenuPage() {
  const [storage, setStorage] = useState<Record<string, Menu[] | string>[]>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    const load = async () => {
      const data = await fetchAPI('/api/menus', 'GET');

      setStorage(data.categoryMenus);
      setIsLoading(false);
    };

    load();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='tracking-wide'>
      {/* Hero */}
      <div className='pt-24 pb-40 bg-[url(/images/hero-mobile.jpeg)] bg-cover'>
        <div className='mt-32 w-11/12 mx-auto'>
          <div className='text-white text-center'>
            <h1 className='text-5xl font-semibold'>Our Menu</h1>
            <p className='mt-3 font-quicksand'>
              All of our menus available at Chez bakery.
            </p>
          </div>
        </div>
      </div>

      <div className='text-center py-20 w-9/12 mx-auto'>
        <h4 className='text-slate-500'>Eat with us</h4>
        <h1 className='text-3xl mt-5 leading-normal'>
          Chez <br /> Bakery <br /> Menus
        </h1>

        <hr className='w-2/12 mx-auto my-10 bg-primary' />

        <p className='text-slate-500 font-quicksand'>Blablabla</p>
      </div>

      {/* Categories & Menus */}
      <div>
        {/* Category Section */}
        {storage?.map((s: Record<string, Menu[] | string>, index) => (
          <div key={index}>
            <div
              className={`bg-cover h-[250px] md:h-[500px]`}
              style={{ backgroundImage: `url(${s.categoryImage})` }}
            >
              <div className='bg-black/50 w-full h-full flex justify-center items-center'>
                <h1 className='text-white font-bold text-3xl text-center'>
                  {s.categoryName as string}
                </h1>
              </div>
            </div>

            {/* Menu Section */}
            {s.categoryMenu.length === 0 ? (
              <div className='my-20 flex justify-center max-w-11/12 mx-auto'>
                <p className='text-center font-quicksand'>
                  The menu is being prepared by the baker. We know you are
                  excited to see the latest update of our menu.
                </p>
              </div>
            ) : (
              <div className='py-20 w-11/12 mx-auto md:grid md:grid-cols-2'>
                {(s.categoryMenu as Menu[]).map((menu: Menu, index) => (
                  <div key={index} className='my-4'>
                    <div className='flex items-center justify-center'>
                      <Image
                        src={menu.menuImage}
                        alt='sample'
                        width={70}
                        height={70}
                        className='mr-3 aspect-square rounded-xl'
                        unoptimized
                      />

                      <div>
                        <div className='flex flex-col lg:flex-row justify-between text-primary'>
                          <h3 className=''>{menu.menuName}</h3>
                          <p className=' text-sm'>
                            Rp. {menu.price.toLocaleString()}
                          </p>
                        </div>

                        <p className='mt-1 text-sm font-quicksand'>
                          {menu.menuDescription ||
                            'This menu has no description at the current moment.'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className='block lg:hidden'>
        <Swiper
          modules={[EffectCreative, Autoplay]}
          effect='creative'
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          grabCursor={false}
          slidesPerView={1}
          spaceBetween={0}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          className='w-screen h-auto'
        >
          {slidesMobile.map((src, index) => (
            <SwiperSlide key={index}>
              <Image src={src} alt='placeholder' className='w-screen h-auto' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop */}
      <div className='hidden lg:block'>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          grabCursor={false}
          slidesPerView={4}
          spaceBetween={0}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          className='w-screen h-auto'
        >
          {slidesMobile.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt='placeholder'
                className='w-full h-auto object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*  */}
      <div className='bg-[#eae0d4]'>
        <div className='w-11/12 mx-auto py-20 text-center'>
          <h3 className='text-xs mb-5 text-slate-500'>Come visit us today</h3>
          <h1 className='text-3xl mb-5 text-primary'>About Chez</h1>

          <hr className='divider' />

          <p className='mb-8 font-quicksand'>
            This kitchen is a brewery of life – whether it&apos;s the kids
            baking parties or their parents elaborate soirees, there&apos;s
            always something cooking in here. Offering stylish and modern
            European cuisine served with exquisite attention to detail and
            immaculate presentation.
          </p>

          <Link
            href='https://maps.app.goo.gl/467TjLjsoHzQzpaBA'
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-2 border border-primary flex items-center gap-2 rounded-full text-primary font-bold font-quicksand w-fit mx-auto hover:bg-primary hover:text-white hover:cursor-pointer transition-all'
          >
            <IconMapPin size={16} />
            Visit Us
          </Link>
        </div>
      </div>
    </div>
  );
}
