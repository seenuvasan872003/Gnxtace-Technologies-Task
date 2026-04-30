import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, Mail, Lock, Loader2, AlertCircle, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/templates');
    } catch (err) {
      setError(err.response?.data?.message || 'Protocol authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1], staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-32 pb-20 bg-black">
      <div className="w-full max-w-lg relative">
        <div className="absolute inset-0 bg-white/[0.02] blur-[120px] -z-10 rounded-full animate-pulse" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-card rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 border-white/10 relative overflow-hidden bg-black"
        >
          {/* Subtle Accent Light */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.05] blur-3xl rounded-full" />

          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-12">
            <div className="relative inline-block group mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-white blur-2xl opacity-10 group-hover:opacity-30 transition-opacity" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl sm:rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl border border-white/10">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-black text-white mb-3 tracking-tight italic uppercase">Access Vault<span className="text-white/20 not-italic">.</span></h1>
            <p className="text-white/20 text-xs sm:text-sm font-black uppercase tracking-[0.3em] italic">Authentication Required</p>
          </motion.div>

          {error && (
            <motion.div 
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 flex items-center space-x-4 text-white text-xs sm:text-sm font-bold italic"
            >
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-white/40" />
              </div>
              <span className="opacity-60">{error}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="text-[10px] font-black text-white/20 ml-4 tracking-[0.4em] uppercase italic">Identity Hash</label>
              <div className="relative group">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-white transition-colors" />
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl sm:rounded-3xl py-4 sm:py-5 pl-16 pr-6 text-white focus:outline-none focus:bg-white/5 focus:border-white/20 transition-all font-black placeholder:text-white/5 text-sm sm:text-base tracking-widest"
                  placeholder="identity@vault.com"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center justify-between mx-4">
                <label className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase italic">Access Key</label>
              </div>
              <div className="relative group">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-white transition-colors" />
                <input 
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl sm:rounded-3xl py-4 sm:py-5 pl-16 pr-6 text-white focus:outline-none focus:bg-white/5 focus:border-white/20 transition-all font-black placeholder:text-white/5 text-sm sm:text-base tracking-widest"
                  placeholder="••••••••"
                />
              </div>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full relative group h-14 sm:h-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-white group-hover:bg-white/90 transition-colors" />
              <div className="relative flex items-center justify-center space-x-3 text-black font-black text-base sm:text-lg uppercase tracking-[0.2em]">
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                  <>
                    <span>Authenticate</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                  </>
                )}
              </div>
            </motion.button>
          </form>

          <motion.div variants={itemVariants} className="mt-10 sm:mt-12 text-center">
            <p className="text-white/20 font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] italic">
              New operative?{' '}
              <Link to="/register" className="text-white hover:text-white/60 font-black transition-colors ml-2 border-b border-white/20 pb-0.5">
                Initialize Account
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
