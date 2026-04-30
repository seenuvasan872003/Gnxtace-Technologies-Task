import { motion } from 'framer-motion';
import { Code2, Rocket, Globe, Shield, Zap, Cpu, Layers, HardDrive } from 'lucide-react';

const Features = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="mt-48 pt-24 border-t border-white/5"
    >
      <div className="flex flex-col items-center">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-16 text-center">
          Engineered for Performance & Scale
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 md:gap-20 opacity-20 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0">
          <FeatureIcon Icon={Code2} />
          <FeatureIcon Icon={Rocket} />
          <FeatureIcon Icon={Globe} />
          <FeatureIcon Icon={Shield} />
          <FeatureIcon Icon={Zap} />
          <FeatureIcon Icon={Cpu} />
          <FeatureIcon Icon={Layers} />
          <FeatureIcon Icon={HardDrive} />
        </div>
      </div>
    </motion.div>
  );
};

const FeatureIcon = ({ Icon }) => (
  <div className="group cursor-default relative">
    <Icon className="w-10 h-10 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[15deg]" />
    <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

export default Features;
