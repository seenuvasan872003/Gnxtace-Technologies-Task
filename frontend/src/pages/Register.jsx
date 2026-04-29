import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserPlus, Mail, Lock, User, Loader2, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(name, email, password);
      navigate('/templates');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
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
        <div className="absolute inset-0 bg-indigo-600/10 blur-[120px] -z-10 rounded-full animate-pulse" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-card rounded-[3rem] p-10 md:p-16 border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />

          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/10">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-display font-black text-white mb-3 tracking-tight">Join the Elite</h1>
            <p className="text-white/40 font-medium tracking-wide">Create your professional operative account</p>
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="text-[10px] font-black text-white/30 ml-2 tracking-[0.2em] uppercase">Full Designation</label>
              <div className="relative group">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                <input 
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-14 text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary-500/40 transition-all placeholder:text-white/10"
                  placeholder="John Smith"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <label className="text-[10px] font-black text-white/30 ml-2 tracking-[0.2em] uppercase">Email Connection</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-14 text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary-500/40 transition-all placeholder:text-white/10"
                  placeholder="email@vault.com"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <label className="text-[10px] font-black text-white/30 ml-2 tracking-[0.2em] uppercase">Security Key</label>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                <input 
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-14 text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary-500/40 transition-all placeholder:text-white/10"
                  placeholder="•••••••• (min 6 keys)"
                />
              </div>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full relative group h-16 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/20 disabled:opacity-50 mt-4"
            >
              <div className="absolute inset-0 bg-primary-600 group-hover:bg-primary-500 transition-colors" />
              <div className="relative flex items-center justify-center space-x-3 text-white font-black text-lg">
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                  <>
                    <span>Initialize Account</span>
                    <ShieldCheck className="w-5 h-5" />
                  </>
                )}
              </div>
            </motion.button>
          </form>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-white/30 font-bold text-sm">
              Already verified?{' '}
              <Link to="/login" className="text-primary-400 hover:text-primary-300 font-black transition-colors ml-1 border-b border-primary-500/30 hover:border-primary-500">
                Secure Sign In
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
