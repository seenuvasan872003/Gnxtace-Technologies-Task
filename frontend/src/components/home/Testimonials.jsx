import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight } from 'lucide-react';

const reviews = [
  {
    name: "ALEX RIVERA",
    role: "Lead Architect",
    company: "TECHFLOW",
    content: "The templates provided by Vault are unparalleled. We reduced our development cycle by 40% and launched our MVP in record time.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "SARAH CHEN",
    role: "Product Director",
    company: "NEXUS AI",
    content: "Clean, performant, and incredibly well-documented. The monochrome aesthetic gave our product a premium feel right out of the box.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "MARCUS VANE",
    role: "CTO",
    company: "VELOCITY",
    content: "Vault isn't just a template store; it's a technical protocol. Every asset is built with production-grade excellence.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="w-16 h-1 bg-white/20 rounded-full mb-8" />
        <h2 className="text-5xl sm:text-6xl font-display font-black text-white tracking-tighter uppercase italic leading-tight mb-4">
          Trusted by <span className="text-gradient">Industry Leaders</span>
        </h2>
        <p className="text-white/30 text-lg font-bold uppercase tracking-[0.3em] italic">Real feedback from the field</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-[2.5rem] p-10 border-white/5 group hover:bg-white/[0.04] transition-all"
          >
            <Quote className="w-10 h-10 text-white/10 mb-8 transition-colors group-hover:text-white/20" />
            
            <p className="text-white/60 text-lg leading-relaxed mb-10 font-medium italic">
              "{review.content}"
            </p>

            <div className="flex items-center space-x-5 border-t border-white/5 pt-10">
              <div className="w-14 h-14 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-sm uppercase tracking-widest">{review.name}</span>
                <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">{review.role} • {review.company}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-center">
        <div className="flex space-x-2 mb-6">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-white fill-white" />)}
        </div>
        <p className="text-white/40 text-sm font-black uppercase tracking-widest italic">4.9/5 Average Intelligence Rating</p>
      </div>
    </section>
  );
};

export default Testimonials;
