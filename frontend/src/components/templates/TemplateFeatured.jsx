import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

const TemplateFeatured = () => {
  return (
    <div className="relative mb-24 overflow-hidden rounded-[3rem] group">
      {/* Background with subtle glow */}
      <div className="absolute inset-0 bg-white/[0.03] group-hover:bg-white/[0.05] transition-all duration-700" />
      <div className="absolute top-0 right-0 w-[40%] h-full bg-white/[0.02] blur-3xl rounded-full translate-x-1/2" />
      
      <div className="relative px-8 py-16 sm:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-white text-black px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
              Featured Asset
            </div>
            <div className="flex items-center space-x-2 text-white/30 text-[10px] font-black uppercase tracking-widest italic">
              <Shield className="w-3 h-3" />
              <span>Verified Identity</span>
            </div>
          </div>
          
          <h2 className="text-5xl sm:text-7xl font-display font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            The <span className="text-gradient">Nexis</span> <br />
            Dashboard Protocol
          </h2>
          
          <p className="text-white/40 text-lg sm:text-xl font-medium mb-12 max-w-lg leading-relaxed italic">
            "Engineered for hyper-growth enterprises. A complete modular dashboard system with integrated analytics and real-time synchronization."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center justify-center space-x-3">
              <span>Initialize Vault</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3 text-white/20 text-xs font-black uppercase tracking-widest italic">
              <Zap className="w-4 h-4" />
              <span>Deployment Ready</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-75 opacity-50" />
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 glass-card rounded-[2.5rem] border-white/10 p-4 sm:p-6 overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-700"
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
              alt="Nexis Dashboard Protocol" 
              className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-sm uppercase tracking-widest">Protocol Sync</span>
                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">v4.0.2 Stable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TemplateFeatured;
