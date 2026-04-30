import { Heart, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
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
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      className="group relative glass-card rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden p-3 sm:p-4 border border-white/5 hover:border-white/20 transition-all duration-700"
    >
      {/* Dynamic Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.05), transparent 60%)`
        }}
      />

      <div className="relative aspect-[16/11] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden mb-6 sm:mb-8">
        <img 
          src={template.thumbnail_url} 
          alt={template.name}
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 group-hover:rotate-1"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
        
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 sm:top-6 right-4 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-3xl transition-all duration-500 transform hover:scale-110 active:scale-90 border ${
            isFavorite 
              ? 'bg-red-500 text-white border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.5)]' 
              : 'bg-black/40 text-white/70 hover:bg-white hover:text-black border-white/10'
          }`}
        >
          <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorite ? 'fill-white' : ''}`} />
        </button>

        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex items-center space-x-2 sm:space-x-3">
          <div className="bg-black/60 backdrop-blur-xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-white/10 flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white">
              {template.category}
            </span>
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-4 pb-4 sm:pb-6">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-1">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/40" />
              <span className="text-[8px] sm:text-[10px] font-bold text-white/40 uppercase tracking-widest">Verified Asset</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-black text-white group-hover:tracking-wider transition-all duration-700 tracking-tight leading-tight">
              {template.name}
            </h3>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 transform group-hover:rotate-45">
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-black transition-colors" />
          </div>
        </div>
        
        <p className="text-white/30 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 line-clamp-2 font-medium italic">
          {template.description}
        </p>
        
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button 
            onClick={onDeploy}
            className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-black border border-white/5 hover:border-white/10 transition-all duration-300 uppercase tracking-widest"
          >
            Preview
          </button>
          <button 
            onClick={onDeploy}
            className="flex-1 bg-white text-black py-3 sm:py-4 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-black transition-all duration-300 hover:bg-white/80 shadow-[0_10px_20px_rgba(255,255,255,0.05)] uppercase tracking-widest flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black" />
            <span>Obtain</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
