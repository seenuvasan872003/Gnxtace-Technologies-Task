import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Rocket, Globe, Settings, CheckCircle2, 
  Loader2, ArrowRight, Server, Database, Zap 
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
            setTimeout(() => setStep(4), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
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
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary-600/20 rounded-2xl flex items-center justify-center border border-primary-500/20">
              <Rocket className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h2 className="text-xl font-display font-black text-white">Deploying {template?.name}</h2>
              <p className="text-white/40 text-sm font-medium">Step {step} of 3</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-white/30 uppercase tracking-widest pl-2">Select Region</label>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center space-x-4 cursor-pointer hover:bg-white/10 transition-all border-primary-500/50">
                      <Globe className="w-5 h-5 text-primary-400" />
                      <div>
                        <p className="text-white font-bold text-sm">US East (N. Virginia)</p>
                        <p className="text-[10px] text-white/30 font-bold uppercase">Optimal Latency</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-white/30 uppercase tracking-widest pl-2">Database Engine</label>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center space-x-4 cursor-pointer hover:bg-white/10 transition-all">
                      <Database className="w-5 h-5 text-indigo-400" />
                      <div>
                        <p className="text-white font-bold text-sm">PostgreSQL 15</p>
                        <p className="text-[10px] text-white/30 font-bold uppercase">Dedicated Instance</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-500/5 border border-primary-500/10 rounded-[2rem] p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Server className="w-6 h-6 text-primary-400" />
                    <h3 className="text-white font-bold text-lg">Server Configuration</h3>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    We will provision a new high-performance instance for your template. 
                    Auto-scaling and CDN acceleration will be enabled by default.
                  </p>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-primary-600 hover:bg-primary-500 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 transition-all"
                >
                  <span>Continue to Config</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-white/30 uppercase tracking-widest pl-2">Project Name</label>
                    <input 
                      type="text" 
                      defaultValue={`${template?.name.toLowerCase().replace(/\s/g, '-')}-production`}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary-500/40"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-white/30 uppercase tracking-widest pl-2">Environment Variables</label>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 font-mono text-xs text-white/40 leading-relaxed">
                      API_KEY=********<br />
                      DATABASE_URL=postgresql://user:pass@host:5432/db<br />
                      NODE_ENV=production
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(3)}
                  className="w-full bg-primary-600 hover:bg-primary-500 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 transition-all"
                >
                  <Zap className="w-5 h-5" />
                  <span>Initialize Deployment</span>
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8"
              >
                <div className="relative w-32 h-32 mx-auto">
                  <div className="absolute inset-0 bg-primary-500 blur-3xl opacity-20 animate-pulse" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Loader2 className="w-16 h-16 text-primary-500 animate-spin" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-display font-black text-white">Provisioning Infrastructure</h3>
                  <p className="text-white/40 font-medium">Setting up global CDN and database clusters...</p>
                </div>

                <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-primary-500 shadow-[0_0_20px_rgba(14,165,233,0.5)]"
                  />
                </div>
                <p className="text-primary-400 font-black tracking-widest text-xs uppercase">{progress}% Complete</p>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-10"
              >
                <div className="w-24 h-24 bg-emerald-500/20 rounded-[2rem] flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-4xl font-display font-black text-white">Deployment Success!</h3>
                  <p className="text-white/40 text-lg font-medium leading-relaxed max-w-sm mx-auto">
                    Your template has been successfully deployed to the production environment.
                  </p>
                </div>

                <div className="flex flex-col space-y-4">
                  <button 
                    onClick={onClose}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 transition-all"
                  >
                    <span>View Dashboard</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="text-white/30 hover:text-white font-bold transition-all">Documentation</button>
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
