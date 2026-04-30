import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is the Vault Protocol?",
    answer: "Vault is a high-performance ecosystem providing premium SaaS blueprints designed for speed, security, and scalability. Every template is engineered to meet industrial-grade standards."
  },
  {
    question: "Are the templates customizable?",
    answer: "Absolutely. Each template is built with a modular architecture, allowing you to rebrand, restructure, and extend functionality with ease using our documented protocols."
  },
  {
    question: "Is technical support provided?",
    answer: "Yes, every operative gets access to our dedicated technical support channel and comprehensive documentation to ensure seamless deployment and integration."
  },
  {
    question: "Can I use these for commercial projects?",
    answer: "All templates in the vault come with a commercial license, allowing you to build and ship production-ready applications for clients or your own ventures."
  }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={toggle}
        className="w-full py-8 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={`text-xl sm:text-2xl font-display font-black uppercase italic tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
          {faq.question}
        </span>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 border ${isOpen ? 'bg-white border-white rotate-0' : 'bg-white/5 border-white/10 rotate-90'}`}>
          {isOpen ? <Minus className="w-5 h-5 text-black" /> : <Plus className="w-5 h-5 text-white" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-white/30 text-lg leading-relaxed font-medium italic max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-32">
      <div className="flex flex-col mb-16">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em] leading-tight">Information Center</span>
            <span className="text-white font-bold text-sm italic">Knowledge Base</span>
          </div>
        </div>
        <h2 className="text-6xl sm:text-7xl font-display font-black text-white tracking-tighter uppercase italic leading-none">
          Frequently Asked <br />
          <span className="text-gradient">Questions</span>
        </h2>
      </div>

      <div className="glass-card rounded-[3rem] p-8 sm:p-12 border-white/5">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
