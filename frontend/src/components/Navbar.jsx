import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Layout, Heart, LogOut, User, LogIn, Sparkles, Command, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 sm:px-6 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto glass rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-white blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative bg-white p-2 sm:p-2.5 rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:rotate-[10deg]">
              <Command className="text-black w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
          <span className="text-xl sm:text-2xl font-display font-black tracking-tight text-white uppercase italic">
            Vault<span className="text-white/30 not-italic">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 bg-white/5 rounded-2xl p-1.5 border border-white/5">
          <NavLink to="/templates" active={isActive('/templates')}>Templates</NavLink>
          {user && <NavLink to="/favorites" active={isActive('/favorites')}>Favorites</NavLink>}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 pl-6 border-l border-white/10">
                <Link to="/profile" className="text-right hidden lg:block hover:opacity-70 transition-opacity">
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Active Member</p>
                  <p className="text-sm text-white font-black">{user.name}</p>
                </Link>
                <Link to="/profile" className="w-10 h-10 lg:w-11 lg:h-11 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden hover:border-white/40 transition-all duration-500 hover:scale-105 active:scale-95">
                  {user.profile_image ? (
                    <img src={user.profile_image} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="avatar" className="w-full h-full" />
                  )}
                </Link>
                <button 
                  onClick={handleLogout}
                  className="p-2.5 text-white/30 hover:text-white transition-all duration-300 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-sm font-bold text-white/50 hover:text-white transition-all duration-300">
                Log in
              </Link>
              <Link 
                to="/register" 
                className="bg-white text-black px-8 py-3 rounded-2xl font-black text-sm transition-all duration-300 hover:scale-105 hover:bg-white/90 active:scale-95 flex items-center space-x-2 shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>Join Vault</span>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white/50 hover:text-white transition-all border border-white/10 rounded-xl bg-white/5"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-[110%] left-4 right-4 bg-black/95 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-8 shadow-2xl z-[100]"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/templates" active={isActive('/templates')} onClick={() => setIsOpen(false)}>
                Templates
              </MobileNavLink>
              {user && (
                <MobileNavLink to="/favorites" active={isActive('/favorites')} onClick={() => setIsOpen(false)}>
                  Favorites
                </MobileNavLink>
              )}
              
              <div className="h-[1px] bg-white/5 my-4" />

              {user ? (
                <div className="space-y-4">
                  <Link 
                    to="/profile" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 p-4 rounded-3xl bg-white/5 border border-white/5"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10">
                      {user.profile_image ? (
                        <img src={user.profile_image} alt="avatar" className="w-full h-full object-cover" />
                      ) : (
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="avatar" className="w-full h-full" />
                      )}
                    </div>
                    <div>
                      <p className="text-white font-black text-lg">{user.name}</p>
                      <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest italic">View Profile Protocol</p>
                    </div>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-3 p-5 rounded-3xl bg-white/5 text-white/40 hover:text-white transition-all border border-white/5"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-black uppercase tracking-widest text-xs">Terminate Session</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-4">
                  <Link 
                    to="/login" 
                    onClick={() => setIsOpen(false)}
                    className="w-full py-5 rounded-3xl bg-white/5 text-white font-black text-center border border-white/5 uppercase tracking-widest text-xs"
                  >
                    Log in
                  </Link>
                  <Link 
                    to="/register" 
                    onClick={() => setIsOpen(false)}
                    className="w-full py-5 rounded-3xl bg-white text-black font-black text-center uppercase tracking-widest text-xs shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
                  >
                    Join Vault
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ to, children, active }) => (
  <Link 
    to={to} 
    className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all duration-500 uppercase tracking-wider ${
      active 
        ? 'bg-white text-black shadow-[0_10px_20px_rgba(255,255,255,0.1)]' 
        : 'text-white/40 hover:text-white hover:bg-white/5'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, active, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`w-full py-5 px-8 rounded-3xl text-sm font-black transition-all duration-300 uppercase tracking-[0.2em] flex items-center justify-between ${
      active 
        ? 'bg-white text-black italic' 
        : 'bg-white/5 text-white/30 border border-white/5'
    }`}
  >
    <span>{children}</span>
    {active && <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />}
  </Link>
);

export default Navbar;
