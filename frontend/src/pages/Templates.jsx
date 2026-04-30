import { useState, useEffect } from 'react';
import api from '../api/axios';
import TemplateCard from '../components/TemplateCard';
import DeploymentModal from '../components/DeploymentModal';
import TemplateFilters from '../components/templates/TemplateFilters';
import TemplateSkeleton from '../components/TemplateSkeleton';
import { Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    fetchTemplates();
    if (user) {
      fetchFavorites();
    }
  }, [user]);

  const fetchTemplates = async () => {
    try {
      setError(null);
      const res = await api.get('/templates');
      setTemplates(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to connect to the template server. Please check if the backend is running and seeded.');
    } finally {
      setLoading(false);
    }
  };

  const fetchFavorites = async () => {
    try {
      const res = await api.get('/favorites');
      setFavorites(res.data.map(f => f.id));
    } catch (err) {
      console.error(err);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      const res = await api.post(`/favorites/${id}`);
      if (res.data.action === 'added') {
        setFavorites([...favorites, id]);
      } else {
        setFavorites(favorites.filter(favId => favId !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const categories = ['All', ...new Set(templates.map(t => t.category))];

  const filteredTemplates = templates.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                         t.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || t.category === category;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="container mx-auto px-6 pt-40 pb-32">
        <TemplateSkeleton />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 pt-40 pb-32">
      <TemplateFilters 
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-10 text-center">
          <p className="text-red-400 font-bold">{error}</p>
          <button 
            onClick={fetchTemplates}
            className="mt-4 text-white/60 hover:text-white transition-colors underline"
          >
            Try Again
          </button>
        </div>
      )}

      <AnimatePresence mode="popLayout">
        {filteredTemplates.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredTemplates.map((template) => (
              <TemplateCard 
                key={template.id}
                template={template}
                isFavorite={favorites.includes(template.id)}
                onToggleFavorite={toggleFavorite}
                onDeploy={() => {
                  setSelectedTemplate(template);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </motion.div>
        ) : !error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-[3rem] py-40 text-center border-dashed border-white/5"
          >
            <Sparkles className="w-16 h-16 text-white/5 mx-auto mb-6" />
            <p className="text-white/30 text-2xl font-display font-bold">No assets found</p>
            <button 
              onClick={() => { setSearch(''); setCategory('All'); }}
              className="mt-6 text-primary-400 hover:text-primary-300 font-bold underline transition-colors"
            >
              Clear all filters
            </button>
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

export default Templates;
