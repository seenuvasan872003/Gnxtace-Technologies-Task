import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';

const FavoritesHeader = () => {
  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center border border-red-500/20">
            <Bookmark className="w-5 h-5 text-red-400" />
          </div>
          <span className="text-red-400 font-black text-xs uppercase tracking-[0.3em]">Personal Vault</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-6 tracking-tight">
          My <span className="text-red-500">Favorites</span>
        </h1>
        <p className="text-white/40 max-w-xl text-lg font-medium leading-relaxed">
          Your curated collection of premium assets. Ready to be deployed into 
          your next big project.
        </p>
      </motion.div>
    </div>
  );
};

export default FavoritesHeader;
