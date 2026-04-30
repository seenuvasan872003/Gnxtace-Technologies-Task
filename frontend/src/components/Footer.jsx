import { Link } from 'react-router-dom';
import { Command, Code, MessageCircle, Camera, Mail, Shield, Zap, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Vault: [
      { name: 'Templates', href: '/templates' },
      { name: 'Featured', href: '#' },
      { name: 'Trending', href: '#' },
      { name: 'Pinned', href: '/favorites' },
    ],
    Protocol: [
      { name: 'Security', href: '#' },
      { name: 'Deployment', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Status', href: '#' },
    ],
    Social: [
      { name: 'GitHub', href: '#', icon: Code },
      { name: 'Twitter', href: '#', icon: MessageCircle },
      { name: 'Instagram', href: '#', icon: Camera },
    ],
  };

  return (
    <footer className="relative mt-32 border-t border-white/5 bg-black pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-white/[0.02] blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center space-x-3 mb-8 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                <Command className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-display font-black text-white tracking-tighter uppercase italic">
                Vault<span className="text-white/20 not-italic">.</span>
              </span>
            </Link>
            <p className="text-white/30 text-lg leading-relaxed max-w-sm mb-10 font-medium italic">
              "Accelerating digital evolution through high-performance SaaS blueprints and technical excellence."
            </p>
            <div className="flex space-x-5">
              {footerLinks.Social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-8 italic">Storefront</h4>
              <ul className="space-y-4">
                {footerLinks.Vault.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/30 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest italic">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-8 italic">Development</h4>
              <ul className="space-y-4">
                {footerLinks.Protocol.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/30 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest italic">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-8 italic">Newsletter</h4>
              <p className="text-white/20 text-xs font-bold mb-6 italic">Secure updates direct to your console.</p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="OPERATIVE EMAIL"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white text-[10px] font-black focus:outline-none focus:border-white/20 transition-all uppercase tracking-widest"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                  <Mail className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-[10px] font-black text-white/10 uppercase tracking-widest italic">
              <Shield className="w-3 h-3" />
              <span>AES-256 Encrypted</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] font-black text-white/10 uppercase tracking-widest italic">
              <Zap className="w-3 h-3" />
              <span>Edge Optimized</span>
            </div>
          </div>
          
          <p className="text-[10px] font-black text-white/10 uppercase tracking-widest italic">
            © {currentYear} VAULT PROTOCOL. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-black text-white/10 uppercase tracking-widest italic cursor-pointer hover:text-white/30 transition-colors">Privacy</span>
            <span className="text-[10px] font-black text-white/10 uppercase tracking-widest italic cursor-pointer hover:text-white/30 transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
