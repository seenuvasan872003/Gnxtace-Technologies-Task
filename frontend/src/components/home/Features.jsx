import { motion } from 'framer-motion';
import { Code2, Rocket, Globe, Shield, Zap } from 'lucide-react';

const Features = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-32 pt-16 border-t border-white/5"
    >
      <p className="text-white/20 text-xs font-black uppercase tracking-[0.3em] mb-12 text-center">
        Trusted by 10,000+ developers
      </p>
      <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
        <Code2 className="w-8 h-8 text-white" />
        <Rocket className="w-8 h-8 text-white" />
        <Globe className="w-8 h-8 text-white" />
        <Shield className="w-8 h-8 text-white" />
        <Zap className="w-8 h-8 text-white" />
      </div>
    </motion.div>
  );
};

export default Features;
