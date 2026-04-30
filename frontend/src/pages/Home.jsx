import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Stats from '../components/home/Stats';
import FAQ from '../components/home/FAQ';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div className="relative pt-20 overflow-hidden bg-black min-height-screen">
      {/* Dynamic Background Elements - Monochrome */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/[0.03] rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/[0.02] rounded-full blur-[140px] animate-pulse" />

      <Hero />
      <div className="container mx-auto px-6 relative z-10">
        <Features />
        <Testimonials />
        <FAQ />
      </div>
      <Stats />
    </div>
  );
};

export default Home;
