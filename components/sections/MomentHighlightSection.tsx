import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

import img8 from "@/public/images/img8.webp"
import img9 from "@/public/images/img9.webp"
import img10 from "@/public/images/img10.webp"
import img11 from "@/public/images/img11.webp"
import img12 from "@/public/images/img12.webp"
import img13 from "@/public/images/img13.webp"
import img14 from "@/public/images/img14.webp"
import img15 from "@/public/images/img15.webp"

import Image from 'next/image';

const MomentHighlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // smooth easeOut
      },
    }),
  };

  return (
    <section ref={ref}>
      <div className="grid lg:grid-cols-2">
        {/* Grid pertama */}
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 h-[450px]">
          {[img8, img9, img10, img11].map((src, i) => (
            <motion.div
              key={i}
              className={`relative ${i === 0 || i === 3 ? "lg:row-span-2" : ""
                } ${i === 2 ? "lg:col-start-2 lg:row-start-2 max-lg:row-start-3" : ""}`}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={variants}
            >
              <Image
                src={src}
                alt={`img-${i}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Grid kedua */}
        <div className="grid lg:grid-cols-3 lg:grid-rows-2">
          {[img12, img13, img14, img15].map((src, i) => (
            <motion.div
              key={i}
              className={`relative ${i === 0 || i === 3 ? "lg:row-span-2" : ""
                } ${i === 2 ? "lg:col-start-2 lg:row-start-2 max-lg:row-start-3" : ""}`}
              custom={i + 4}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={variants}
            >
              <Image
                src={src}
                alt={`img-${i}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MomentHighlightSection;
