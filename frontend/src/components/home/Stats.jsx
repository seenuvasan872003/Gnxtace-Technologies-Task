import { motion } from 'framer-motion';
import { Rocket, Layout, Shield } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: 'Downloads', value: '1.2M+', icon: Rocket, color: 'text-primary-400' },
    { label: 'Components', value: '450+', icon: Layout, color: 'text-indigo-400' },
    { label: 'Uptime', value: '99.99%', icon: Shield, color: 'text-emerald-400' },
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className={`mb-6 ${stat.color}`}>
                <stat.icon className="w-10 h-10" />
              </div>
              <h4 className="text-5xl font-display font-black text-white mb-2">{stat.value}</h4>
              <p className="text-white/40 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
