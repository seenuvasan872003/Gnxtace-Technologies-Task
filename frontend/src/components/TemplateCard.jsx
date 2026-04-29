import { Heart, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TemplateCard = ({ template, isFavorite, onToggleFavorite, onDeploy }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }
    onToggleFavorite(template.id);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      className="group relative glass-card rounded-[2rem] overflow-hidden p-3"
    >
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.08), transparent 40%)`
        }}
      />

      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
        <img 
          src={template.thumbnail_url} 
          alt={template.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
        
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 p-3 rounded-2xl backdrop-blur-xl transition-all duration-300 transform hover:scale-110 active:scale-90 ${
            isFavorite 
              ? 'bg-red-500 text-white shadow-xl shadow-red-500/40' 
              : 'bg-black/40 text-white/70 hover:bg-black/60 hover:text-white border border-white/10'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <div className="bg-primary-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary-500/30 flex items-center space-x-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-wider text-primary-400">
              {template.category}
            </span>
          </div>
          <div className="bg-emerald-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30 flex items-center space-x-1.5">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">Verified</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-400 transition-colors tracking-tight">
            {template.name}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-primary-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        
        <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
          {template.description}
        </p>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={onDeploy}
            className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl text-sm font-bold border border-white/5 hover:border-white/10 transition-all"
          >
            Preview
          </button>
          <button 
            onClick={onDeploy}
            className="flex-1 bg-primary-600 hover:bg-primary-500 text-white py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary-900/20"
          >
            Get Template
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
