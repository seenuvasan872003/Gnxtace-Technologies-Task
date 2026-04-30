import { useState, useEffect } from 'react';
import api from '../api/axios';
import TemplateCard from '../components/TemplateCard';
import DeploymentModal from '../components/DeploymentModal';
import { Heart, Loader2, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const res = await api.get('/favorites');
      setFavorites(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      await api.post(`/favorites/${id}`);
      setFavorites(favorites.filter(f => f.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="relative">
          <div className="absolute inset-0 bg-white blur-3xl opacity-10 animate-pulse" />
          <Loader2 className="w-16 h-16 text-white animate-spin relative z-10 opacity-20" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-48 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 sm:mb-24"
      >
        <div className="flex items-center space-x-3 sm:space-x-4 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center border border-red-500/20">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 fill-red-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-[10px] text-white/30 font-black uppercase tracking-[0.4em] leading-tight">Curated Vault</span>
            <span className="text-white font-bold text-xs sm:text-sm italic">Pinned Assets</span>
          </div>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter uppercase italic leading-[0.9]">
          Personal <br />
          <span className="text-gradient">Selection</span>
        </h1>
      </motion.div>

      <AnimatePresence mode="popLayout">
        {favorites.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
          >
            {favorites.map(template => (
              <TemplateCard 
                key={template.id}
                template={template}
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
                onDeploy={() => {
                  setSelectedTemplate(template);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/[0.02] border border-dashed border-white/10 rounded-[2.5rem] sm:rounded-[4rem] py-32 sm:py-48 text-center"
          >
            <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 text-white/5 mx-auto mb-8" />
            <p className="text-white/20 text-2xl sm:text-3xl font-display font-black uppercase tracking-widest italic mb-10 px-6">
              Vault Pinned Section Empty
            </p>
            <Link 
              to="/templates" 
              className="inline-flex items-center space-x-4 bg-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-xs sm:text-sm shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            >
              <span>Explore Assets</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <DeploymentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        template={selectedTemplate}
      />
    </div>
  );
};

export default Favorites;
