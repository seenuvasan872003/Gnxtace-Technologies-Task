import { motion } from 'framer-motion';
import { Rocket, Layout, Shield, Activity, Users, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: 'Asset Transfers', value: '1.2M+', icon: Activity },
    { label: 'Active Clusters', value: '840+', icon: Globe },
    { label: 'System Uptime', value: '99.99%', icon: Shield },
  ];

  return (
    <section className="py-24 sm:py-48 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -15, backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="glass-card p-10 sm:p-14 rounded-[2.5rem] sm:rounded-[3.5rem] relative overflow-hidden border border-white/5 group"
            >
              <div className="mb-6 sm:mb-10 text-white/20 group-hover:text-white transition-colors duration-500 transform group-hover:scale-110 group-hover:rotate-12 inline-block">
                <stat.icon className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h4 className="text-5xl sm:text-6xl font-display font-black text-white mb-2 sm:mb-4 tracking-tighter italic">
                {stat.value}
              </h4>
              <p className="text-white/20 font-black uppercase tracking-[0.3em] text-[8px] sm:text-[10px] group-hover:text-white transition-colors duration-500">
                {stat.label}
              </p>
              
              {/* Background accent */}
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                <stat.icon className="w-24 h-24 sm:w-32 sm:h-32" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
