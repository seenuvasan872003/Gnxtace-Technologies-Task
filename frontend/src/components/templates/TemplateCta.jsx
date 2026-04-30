import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ShieldCheck, Zap } from 'lucide-react';

const TemplateCta = () => {
  return (
    <section className="mt-40 mb-20">
      <div className="relative glass-card rounded-[3rem] sm:rounded-[4rem] p-12 sm:p-24 overflow-hidden text-center bg-white/[0.01] border-white/5">
        {/* Background Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-10">
            <Cpu className="w-4 h-4 text-white/40" />
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] italic">Intelligence Protocol</span>
          </div>
          
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9] max-w-4xl mx-auto">
            Ready to <span className="text-gradient">Initialize</span> <br />
            Your Evolution?
          </h2>
          
          <p className="text-white/30 text-lg sm:text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed italic">
            "Join the elite operatives deploying high-performance digital assets at scale. The vault is open."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <button className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.15)] flex items-center justify-center space-x-4 group">
              <span>Access All Assets</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
            <div className="flex items-center space-x-12">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-6 h-6 text-white/20 mb-2" />
                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest italic">Encrypted</span>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="w-6 h-6 text-white/20 mb-2" />
                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest italic">Fast-Track</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TemplateCta;
