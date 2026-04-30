import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Command, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-32 sm:pb-48 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/[0.03] border border-white/10 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-10 sm:mb-16 backdrop-blur-3xl hover:bg-white/5 transition-all cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
          <span>The New Standard in SaaS</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black text-white mb-6 sm:mb-10 tracking-tighter leading-[0.9] sm:leading-[0.85] italic"
        >
          MATERIALIZE <br className="hidden sm:block" />
          <span className="text-gradient not-italic">IDEAS FAST.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-white/30 text-lg sm:text-2xl md:text-3xl max-w-3xl mx-auto mb-12 sm:mb-20 leading-relaxed font-light italic px-4"
        >
          A curated repository of high-fidelity components and full-scale templates 
          engineered for elite SaaS builders.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <Link 
            to="/templates" 
            className="w-full sm:w-auto group relative px-8 sm:px-12 py-5 sm:py-6 rounded-2xl sm:rounded-[2rem] overflow-hidden bg-white transform transition-all duration-500 hover:scale-[1.05] active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10 text-black font-black text-lg sm:text-xl flex items-center justify-center space-x-3 sm:space-x-4 uppercase tracking-widest">
              <span>Enter Vault</span>
              <Command className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:rotate-[30deg]" />
            </span>
          </Link>
          <Link 
            to="/register" 
            className="w-full sm:w-auto group relative bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl sm:rounded-[2rem] font-black text-lg sm:text-xl transition-all duration-500 backdrop-blur-3xl uppercase tracking-widest flex items-center justify-center space-x-3 sm:space-x-4"
          >
            <span>Register</span>
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white/20 group-hover:text-white transition-colors" />
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden hidden sm:block">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
