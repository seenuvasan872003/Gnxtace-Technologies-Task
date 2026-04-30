import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Camera, Save, Loader2, CheckCircle2, AlertCircle, Command, ArrowLeft, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || '');
  const [profileImage, setProfileImage] = useState(user?.profile_image || '');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    try {
      await updateProfile({ name, profile_image: profileImage });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Profile synchronization failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-48 pb-32 max-w-4xl">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="group flex items-center space-x-3 mb-10 text-white/30 hover:text-white transition-all duration-300"
      >
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </div>
        <span className="font-black uppercase tracking-[0.3em] text-[10px] italic">Back to Console</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 relative overflow-hidden bg-black"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.05] blur-[100px] -z-10" />
        
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/10">
              <Command className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] sm:text-[10px] text-white/30 font-black uppercase tracking-[0.4em] leading-tight">Identity Management</span>
              <span className="text-white font-bold text-xs sm:text-sm italic">Core Protocols</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-display font-black text-white mb-4 tracking-tighter uppercase italic leading-none">
            Member <span className="text-gradient">Profile</span>
          </h1>
          <p className="text-white/20 text-xs sm:text-sm font-black uppercase tracking-[0.3em] italic">Customize your presence in the vault</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-12">
          {/* Avatar Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 p-6 sm:p-10 bg-white/[0.02] rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-black border border-white/10 group-hover:border-white transition-all duration-700 shadow-2xl relative">
                {profileImage ? (
                  <img src={profileImage} alt="Avatar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-12 h-12 sm:w-16 sm:h-16 text-white/5" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-4 w-full relative z-10">
              <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] ml-2 italic">Avatar Source URL</label>
              <input 
                type="text"
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
                placeholder="https://images.unsplash.com/photo-..."
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 sm:py-5 px-6 text-white font-black uppercase tracking-widest text-xs focus:outline-none focus:bg-white/5 focus:border-white/20 transition-all placeholder:text-white/5"
              />
              <p className="text-[8px] sm:text-[10px] text-white/20 font-black uppercase tracking-widest ml-2 italic">Protocol: Square high-resolution assets recommended</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] ml-4 italic">Operative Name</label>
              <input 
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl sm:rounded-3xl py-4 sm:py-5 px-8 text-white font-black uppercase tracking-widest text-sm focus:outline-none focus:bg-white/5 focus:border-white/20 transition-all"
              />
            </div>
            <div className="space-y-4 opacity-30 cursor-not-allowed">
              <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] ml-4 italic">Email Identity (Locked)</label>
              <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl sm:rounded-3xl py-4 sm:py-5 px-8 text-white/40 font-black text-sm uppercase tracking-widest">
                {user?.email}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center space-x-4 text-white font-black text-xs sm:text-sm uppercase tracking-widest italic"
              >
                <CheckCircle2 className="w-5 h-5 text-white/40" />
                <span>Synchronization complete. All nodes updated.</span>
              </motion.div>
            )}
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center space-x-4 text-white font-black text-xs sm:text-sm uppercase tracking-widest italic"
              >
                <AlertCircle className="w-5 h-5 text-white/40" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-6 pt-8 relative z-10">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCancel}
              className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-2xl sm:rounded-3xl font-black text-lg flex items-center justify-center space-x-3 transition-all border border-white/5"
            >
              <X className="w-5 h-5" />
              <span className="uppercase tracking-widest">Cancel</span>
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full sm:w-auto px-12 py-5 bg-white text-black rounded-2xl sm:rounded-3xl font-black text-lg flex items-center justify-center space-x-4 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] uppercase tracking-widest"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                <>
                  <Save className="w-6 h-6" />
                  <span>Sync Profile</span>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Profile;
