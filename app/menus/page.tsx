'use client';

import { useEffect, useState } from 'react';
import { fetchAPI } from '@/lib/apiClient';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '@/lib/interface';
import { IconMapPin } from '@tabler/icons-react';
import LoadingScreen from '@/components/screens/LoadingScreen';

export default function MenuPage() {
  const [storage, setStorage] = useState<Record<string, Menu[] | string>[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchAPI('/api/menus', 'GET');
      setStorage(data.categoryMenus);
      setIsLoading(false);
    };
    load();
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <motion.div
      className="tracking-wide"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Hero */}
      <section className="relative flex items-center justify-center lg:py-32 py-28 bg-[url(/images/hero-mobile.jpeg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 flex flex-col items-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-lg font-quicksand text-center mb-4">CHEZ'S MENU</h1>
          <p className="text-white lg:text-5xl text-3xl text-center lg:w-2/3">
            Discover the best selection at Chez Bakery
          </p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-20 text-center max-w-2xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Chez Bakery Menus
        </motion.h2>
        <div className="w-16 h-1 bg-primary mx-auto my-6 rounded-full" />
        <p className="text-primary font-quicksand leading-relaxed">
          From artisan breads to decadent pastries, explore our carefully
          curated menu crafted with passion and quality ingredients.
        </p>
      </section>

      {/* Categories & Menus */}
      <section className="lg:space-y-20 space-y-12">
        {storage?.map((s: Record<string, Menu[] | string>, idx) => (
          <motion.div
            key={idx}
            className="lg:max-w-7xl max-w-11/12 mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
          >
            {/* Category Title */}
            <div
              className="relative lg:h-48 h-24 rounded-lg overflow-hidden lg:mb-10 mb-4"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${s.categoryImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-serif text-white font-semibold drop-shadow-lg">
                  {s.categoryName as string}
                </h3>
              </div>
            </div>

            {/* Menu Items */}
            {(s.categoryMenu as Menu[]).length === 0 ? (
              <p className="text-center text-slate-500 italic">
                Menus are being prepared by our baker. Stay tuned!
              </p>
            ) : (
              <div className="grid md:grid-cols-4 gap-3">
                {(s.categoryMenu as Menu[]).map((menu, i) => (
                  <motion.div
                    key={i}
                    className="bg-white border border-0.5 rounded-lg overflow-hidden flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {/* Image */}
                    <Image
                      src={menu.menuImage}
                      alt={menu.menuName}
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover"
                      unoptimized
                    />

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h4 className="text-xl font-semibold text-primary mb-2">
                        {menu.menuName}
                      </h4>
                      <p className="text-slate-500 font-quicksand text-sm font-light flex-grow">
                        {menu.menuDescription || "No description available."}
                      </p>
                      <p className="mt-4 font-quicksand font-bold text-primary">
                        Rp{menu.price.toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <section className="bg-[#f5f2ee] mt-24">
        <div className="max-w-3xl mx-auto py-20 text-center px-6">
          <h3 className="text-sm mb-3 text-slate-600 uppercase tracking-widest">
            Visit Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            About Chez
          </h2>
          <p className="text-slate-600 font-quicksand leading-relaxed mb-8">
            Our kitchen is a place of life from kids baking parties to
            elaborate soirées. We bring stylish European cuisine with passion,
            detail, and warmth.
          </p>
          <Link
            href="https://maps.app.goo.gl/467TjLjsoHzQzpaBA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium hover:bg-primary font-quicksand hover:text-white transition-colors"
          >
            <IconMapPin size={18} />
            Visit Us
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
