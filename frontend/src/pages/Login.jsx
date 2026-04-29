import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, Mail, Lock, Loader2, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';
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
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="w-full max-w-lg relative">
        <div className="absolute inset-0 bg-primary-600/10 blur-[120px] -z-10 rounded-full animate-pulse" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-card rounded-[3rem] p-10 md:p-16 border-white/10 relative overflow-hidden"
        >
          {/* Subtle Accent Light */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full" />

          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-primary-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/10">
                <LogIn className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-display font-black text-white mb-3 tracking-tight">Access Your Vault</h1>
            <p className="text-white/40 font-medium tracking-wide">Enter your credentials to continue</p>
          </motion.div>

          {error && (
            <motion.div 
              variants={itemVariants}
              className="bg-red-500/5 border border-red-500/10 rounded-2xl p-5 mb-10 flex items-center space-x-4 text-red-400 text-sm font-bold"
            >
              <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <span>{error}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="text-[10px] font-black text-white/30 ml-2 tracking-[0.2em] uppercase">Identity</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-500 transition-colors" />
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/40 transition-all font-bold placeholder:text-white/10"
                  placeholder="email@vault.com"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center justify-between mx-2">
                <label className="text-[10px] font-black text-white/30 tracking-[0.2em] uppercase">Security Key</label>
                <button type="button" className="text-[10px] text-primary-500 hover:text-primary-400 font-black tracking-widest uppercase transition-all">Forgot Key?</button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-500 transition-colors" />
                <input 
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/40 transition-all font-bold placeholder:text-white/10"
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
              className="w-full relative group h-16 rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/20 disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-primary-600 group-hover:bg-primary-500 transition-colors" />
              <div className="relative flex items-center justify-center space-x-3 text-white font-black text-lg">
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                  <>
                    <span>Authenticate</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </motion.button>
          </form>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-white/30 font-bold text-sm">
              New operative?{' '}
              <Link to="/register" className="text-primary-400 hover:text-primary-300 font-black transition-colors ml-1 border-b border-primary-500/30 hover:border-primary-500">
                Register Account
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
