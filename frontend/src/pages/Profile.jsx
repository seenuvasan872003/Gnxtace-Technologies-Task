import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Camera, Save, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Profile = () => {
  const { user, updateProfile } = useAuth();
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
      setError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 pt-40 pb-32 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-[3rem] p-10 md:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 blur-[100px] -z-10" />
        
        <div className="mb-12">
          <h1 className="text-5xl font-display font-black text-white mb-4">Edit Profile</h1>
          <p className="text-white/40 font-medium">Customize your presence in the vault</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Avatar Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 p-8 bg-white/5 rounded-[2.5rem] border border-white/5">
            <div className="relative group">
              <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden bg-slate-800 border-2 border-primary-500/30 group-hover:border-primary-500 transition-all shadow-2xl">
                {profileImage ? (
                  <img src={profileImage} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    <User className="w-16 h-16 text-white/10" />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center shadow-xl border border-white/10 group-hover:scale-110 transition-transform">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex-1 space-y-4 w-full">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">Avatar Source URL</label>
              <input 
                type="text"
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
                placeholder="https://images.unsplash.com/photo-..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary-500/40 transition-all placeholder:text-white/5"
              />
              <p className="text-[10px] text-white/20 font-bold ml-2">Recommended: Use a square high-resolution image URL</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">Operative Name</label>
              <input 
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary-500/40 transition-all"
              />
            </div>
            <div className="space-y-3 opacity-50 cursor-not-allowed">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">Email Identity (Locked)</label>
              <div className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white/40 font-bold">
                {user?.email}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {success && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 flex items-center space-x-4 text-emerald-400 font-bold text-sm"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Profile synchronization complete. All systems updated.</span>
              </motion.div>
            )}
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 flex items-center space-x-4 text-red-400 font-bold text-sm"
              >
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-end pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="px-12 py-5 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-black text-lg flex items-center space-x-3 transition-all shadow-2xl shadow-primary-900/40 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                <>
                  <Save className="w-5 h-5" />
                  <span>Save Changes</span>
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
