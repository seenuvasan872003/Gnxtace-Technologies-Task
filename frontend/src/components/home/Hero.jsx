import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-6 py-2.5 rounded-2xl text-primary-400 text-xs font-black uppercase tracking-[0.2em] mb-12 backdrop-blur-2xl"
        >
          <Sparkles className="w-4 h-4" />
          <span>The Future of SaaS Development</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter leading-[0.95]"
        >
          Ship your startup <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-primary-400">in record time.</span>
            <div className="absolute bottom-2 left-0 w-full h-4 bg-primary-600/30 -z-10 blur-sm" />
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium"
        >
          Access a curated vault of high-performance, conversion-optimized 
          templates built with the world's most advanced tech stack.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            to="/templates" 
            className="group relative px-10 py-5 rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/40 transform hover:scale-105 active:scale-95 transition-all"
          >
            <div className="absolute inset-0 bg-primary-600 group-hover:bg-primary-500 transition-colors" />
            <span className="relative text-white font-black text-lg flex items-center space-x-3">
              <span>Start Exploring</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
          <Link 
            to="/register" 
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-lg transition-all backdrop-blur-md"
          >
            Get Started Free
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
