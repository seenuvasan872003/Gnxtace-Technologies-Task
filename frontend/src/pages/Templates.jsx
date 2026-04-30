import { useState, useEffect } from 'react';
import api from '../api/axios';
import TemplateCard from '../components/TemplateCard';
import DeploymentModal from '../components/DeploymentModal';
import TemplateFilters from '../components/templates/TemplateFilters';
import TemplateSkeleton from '../components/TemplateSkeleton';
import TemplateFeatured from '../components/templates/TemplateFeatured';
import TemplateCta from '../components/templates/TemplateCta';
import { Sparkles, AlertCircle, RotateCcw } from 'lucide-react';
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
      setLoading(true);
      setError(null);
      const res = await api.get('/templates');
      setTemplates(res.data);
    } catch (err) {
      console.error(err);
      setError('The protocol connection failed. Please ensure the backend gateway is active and synchronized.');
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

  if (loading && templates.length === 0) {
    return (
      <div className="container mx-auto px-6 pt-48 pb-32">
        <TemplateSkeleton />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 pt-48 pb-32">
      <TemplateFeatured />
      
      <TemplateFilters 
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      {error && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-12 mb-20 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-white/10" />
          <AlertCircle className="w-16 h-16 text-white/20 mx-auto mb-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
          <p className="text-white text-xl font-bold mb-8 italic max-w-lg mx-auto leading-relaxed uppercase tracking-tighter">
            {error}
          </p>
          <button 
            onClick={fetchTemplates}
            className="inline-flex items-center space-x-3 bg-white text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/80 transition-all active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Reconnect</span>
          </button>
        </motion.div>
      )}

      <AnimatePresence mode="popLayout">
        {filteredTemplates.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
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
        ) : !error && !loading && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/[0.02] border border-dashed border-white/10 rounded-[4rem] py-48 text-center"
          >
            <Sparkles className="w-20 h-20 text-white/5 mx-auto mb-8" />
            <p className="text-white/20 text-3xl font-display font-black uppercase tracking-widest italic leading-none">
              Vault Is Empty<span className="text-white/5 not-italic">.</span>
            </p>
            <button 
              onClick={() => { setSearch(''); setCategory('All'); }}
              className="mt-10 text-white font-bold uppercase tracking-[0.4em] text-xs hover:text-white/60 transition-colors border-b border-white/20 pb-1"
            >
              Reset Protocols
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <TemplateCta />

      <DeploymentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        template={selectedTemplate}
      />
    </div>
  );
};

export default Templates;
