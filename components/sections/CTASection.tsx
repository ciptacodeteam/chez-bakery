import { IconArrowRight } from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref}>
      <div className="relative bg-[url('/images/img7.webp')] bg-cover bg-no-repeat bg-center md:bg-[center_top]">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>

        {/* Content */}
        <div className="relative lg:max-w-7xl max-w-[92%] mx-auto lg:py-24 py-16 flex items-center overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="lg:text-7xl text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Order?
            </motion.h1>

            <motion.p
              className="font-quicksand lg:w-2/3 mt-4 lg:mb-10 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to indulge in our delicious offerings? Place your order now
              and experience the best of Chez Bakery!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="border border-white/50 text-white mt-5 md:mt-0 font-quicksand group px-6 py-2 hover:border-white group-hover:translate-x-1 transition-all duration-200">
                <Link href="/menus" className="flex items-center gap-2">
                  Order now
                  <IconArrowRight size={16} />
                </Link>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
