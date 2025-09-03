'use client';

import HeroSection from '@/components/sections/HeroSection';
import BakerSection from '@/components/sections/BakerSection';
import CTASection from '@/components/sections/CTASection';
import MenuHighlightSection from '@/components/sections/MenuHighlightSection';
import MomentHighlightSection from '@/components/sections/MomentHighlightSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MenuHighlightSection />
      <MomentHighlightSection />
      <BakerSection />
      <CTASection />
    </>
  );
}
