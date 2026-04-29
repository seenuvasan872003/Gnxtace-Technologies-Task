import { useState, useEffect } from 'react';
import api from '../api/axios';
import TemplateCard from '../components/TemplateCard';
import DeploymentModal from '../components/DeploymentModal';
import FavoritesHeader from '../components/templates/FavoritesHeader';
import { Heart, Loader2, ArrowRight } from 'lucide-react';
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-red-500 blur-2xl opacity-20 animate-pulse" />
          <Loader2 className="w-12 h-12 text-red-500 animate-spin relative z-10" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 pt-40 pb-32">
      <FavoritesHeader />

      <AnimatePresence mode="popLayout">
        {favorites.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-[3rem] py-40 text-center border-dashed border-white/5"
          >
            <Heart className="w-16 h-16 text-white/5 mx-auto mb-6" />
            <p className="text-white/30 text-2xl font-display font-bold mb-8">No favorites yet</p>
            <Link 
              to="/templates" 
              className="inline-flex items-center space-x-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-black transition-all border border-white/10"
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
