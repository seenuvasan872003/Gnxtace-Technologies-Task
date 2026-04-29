import { motion } from 'framer-motion';
import { Search, Filter, LayoutGrid } from 'lucide-react';

const TemplateFilters = ({ search, setSearch, category, setCategory, categories }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary-600/20 rounded-xl flex items-center justify-center border border-primary-500/20">
            <LayoutGrid className="w-5 h-5 text-primary-400" />
          </div>
          <span className="text-primary-400 font-black text-xs uppercase tracking-[0.3em]">Explore Vault</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-6 tracking-tight">
          Premium <span className="text-gradient">Assets</span>
        </h1>
        <p className="text-white/40 max-w-xl text-lg font-medium leading-relaxed">
          Everything you need to build at the speed of thought. High-fidelity 
          components and full-scale templates.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
      >
        <div className="relative group w-full lg:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary-400 transition-colors w-5 h-5" />
          <input 
            type="text"
            placeholder="Search assets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/40 transition-all font-medium placeholder:text-white/10"
          />
        </div>

        <div className="relative w-full lg:w-56">
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-5 h-5" />
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/40 appearance-none transition-all font-medium cursor-pointer"
          >
            {categories.map(cat => (
              <option key={cat} value={cat} className="bg-slate-950 text-white">{cat}</option>
            ))}
          </select>
        </div>
      </motion.div>
    </div>
  );
};

export default TemplateFilters;
