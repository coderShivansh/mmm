export const metadata = {
  title: 'MakeMyMvp Home',
  description: 'Home Page for MakeMyMvp, a MVP building agency',
}

import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import Header from '@/components/ui/header';


export default function Home() {
 

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
