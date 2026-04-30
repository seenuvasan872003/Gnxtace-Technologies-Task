import { motion } from 'framer-motion';
import { Search, Filter, LayoutGrid, Sparkles } from 'lucide-react';

const TemplateFilters = ({ search, setSearch, category, setCategory, categories }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 sm:gap-16 mb-16 sm:mb-24">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-auto"
      >
        <div className="flex items-center space-x-3 sm:space-x-4 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/10 group overflow-hidden relative">
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <LayoutGrid className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-[10px] text-white/30 font-black uppercase tracking-[0.4em] leading-tight">Digital Vault</span>
            <span className="text-white font-bold text-xs sm:text-sm">v1.0.4</span>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[0.9]">
          Premium <br />
          <span className="text-white/20 italic pr-4">Digital</span> 
          <span className="text-gradient">Assets</span>
        </h1>
        
        <p className="text-white/40 max-w-xl text-base sm:text-xl font-medium leading-relaxed border-l-2 border-white/5 pl-6 sm:pl-8 italic">
          Curated high-fidelity components and full-scale templates built for the next generation of SaaS.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto p-2 bg-white/5 rounded-3xl sm:rounded-[2.5rem] border border-white/10"
      >
        <div className="relative group w-full lg:w-96">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white transition-all duration-300 w-5 h-5" />
          <input 
            type="text"
            placeholder="Search the vault..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl py-4 sm:py-5 pl-16 pr-6 text-white focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all font-bold placeholder:text-white/10 placeholder:italic text-sm sm:text-base"
          />
        </div>

        <div className="relative w-full lg:w-64">
          <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 w-5 h-5" />
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl py-4 sm:py-5 pl-16 pr-10 text-white focus:outline-none focus:bg-white/10 focus:border-white/20 appearance-none transition-all font-black uppercase tracking-widest text-[10px] sm:text-xs cursor-pointer"
          >
            {categories.map(cat => (
              <option key={cat} value={cat} className="bg-black text-white">{cat}</option>
            ))}
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TemplateFilters;
