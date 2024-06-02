'use client'

// import { useState } from 'react';
import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
// import CalendlyEmbed from '@/components/calendlyEmbed';
import Header from '@/components/ui/header';


export default function Home() {
  // const [showCalendly, setShowCalendly] = useState(false);

  // const handleBookCallClick = () => {
  //   setShowCalendly(true);
  // };

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  );
}
