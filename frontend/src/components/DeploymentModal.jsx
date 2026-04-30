import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Rocket, Globe, Settings, CheckCircle2, 
  Loader2, ArrowRight, Server, Database, Zap, Command
} from 'lucide-react';

const DeploymentModal = ({ isOpen, onClose, template }) => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step === 3) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep(4), 800);
            return 100;
          }
          return prev + 1.5;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [step]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="relative w-full max-w-2xl bg-black border border-white/10 rounded-[3rem] shadow-[0_0_100px_rgba(255,255,255,0.05)] overflow-hidden"
      >
        {/* Header */}
        <div className="p-10 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Command className="w-7 h-7 text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-black text-white tracking-tight uppercase italic">Deploying <span className="text-white/40 not-italic">{template?.name}</span></h2>
              <p className="text-white/30 text-xs font-black uppercase tracking-[0.3em]">Protocol Phase {step} / 4</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-white/5 rounded-2xl text-white/20 hover:text-white border border-transparent hover:border-white/10 transition-all duration-300">
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="p-12">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] pl-2">Geographic Node</label>
                    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5 flex items-center space-x-4 cursor-pointer hover:bg-white/10 transition-all duration-500 group border-white/40 shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
                      <Globe className="w-6 h-6 text-white group-hover:rotate-[20deg] transition-transform duration-500" />
                      <div>
                        <p className="text-white font-black text-sm uppercase tracking-wider">US East Cluster</p>
                        <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Optimized Edge</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] pl-2">Data Core</label>
                    <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-5 flex items-center space-x-4 cursor-pointer hover:bg-white/5 transition-all duration-500 border-white/10">
                      <Database className="w-6 h-6 text-white/20" />
                      <div>
                        <p className="text-white/40 font-black text-sm uppercase tracking-wider">NoSQL V3</p>
                        <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Standard Instance</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Server className="w-32 h-32 text-white" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <Zap className="w-6 h-6 text-white" />
                      <h3 className="text-white font-black text-xl uppercase tracking-tighter">Infrastructure Intent</h3>
                    </div>
                    <p className="text-white/30 text-base leading-relaxed italic">
                      Provisioning a high-performance compute node with globally distributed edge acceleration. 
                      Standard encryption and zero-trust security will be enforced at the gateway.
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-white text-black py-6 rounded-[2rem] font-black text-xl flex items-center justify-center space-x-4 transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)] uppercase tracking-widest"
                >
                  <span>Accept Protocol</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-10"
              >
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] pl-2">Identification</label>
                    <input 
                      type="text" 
                      defaultValue={`${template?.name.toLowerCase().replace(/\s/g, '-')}.v1`}
                      className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-8 text-white font-black uppercase tracking-widest text-sm focus:outline-none focus:bg-white/10 focus:border-white/40 transition-all"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] pl-2">System Variables</label>
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 font-mono text-xs text-white/20 leading-loose uppercase tracking-widest italic">
                      VAULT_KEY=SECURE_INSTANCE_********<br />
                      CLUSTER_NODE=DISTRIBUTED_V3<br />
                      ACCESS_LEVEL=ROOT_ADMIN
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(3)}
                  className="w-full bg-white text-black py-6 rounded-[2rem] font-black text-xl flex items-center justify-center space-x-4 transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)] uppercase tracking-widest"
                >
                  <Zap className="w-6 h-6 fill-black" />
                  <span>Ignite Deployment</span>
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-12 py-10"
              >
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute inset-0 bg-white blur-[80px] opacity-10 animate-pulse" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 border-4 border-white/5 rounded-full" />
                    <div className="absolute inset-0 border-4 border-t-white rounded-full animate-spin" />
                    <Loader2 className="w-12 h-12 text-white animate-pulse" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-4xl font-display font-black text-white tracking-tighter uppercase italic">Constructing</h3>
                  <p className="text-white/20 font-black uppercase tracking-[0.5em] text-[10px]">Assembling edge nodes & clusters</p>
                </div>

                <div className="space-y-6">
                  <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                    />
                  </div>
                  <p className="text-white font-black tracking-[0.8em] text-[10px] uppercase opacity-40">{Math.round(progress)}% Progress</p>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-12 py-6"
              >
                <div className="w-32 h-32 bg-white rounded-[3rem] flex items-center justify-center mx-auto shadow-[0_0_60px_rgba(255,255,255,0.2)] rotate-12 transform hover:rotate-0 transition-transform duration-700">
                  <CheckCircle2 className="w-16 h-16 text-black" />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-5xl font-display font-black text-white tracking-tighter uppercase italic">Success<span className="text-white/20 not-italic">.</span></h3>
                  <p className="text-white/30 text-lg font-medium leading-relaxed max-w-sm mx-auto italic">
                    The digital asset has been fully materialized and integrated into the global network.
                  </p>
                </div>

                <div className="flex flex-col space-y-6">
                  <button 
                    onClick={onClose}
                    className="w-full bg-white text-black py-6 rounded-[2rem] font-black text-xl flex items-center justify-center space-x-4 transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)] uppercase tracking-widest"
                  >
                    <span>Enter Console</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <button className="text-[10px] text-white/20 hover:text-white font-black uppercase tracking-[0.5em] transition-all">Documentation.pdf</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default DeploymentModal;
