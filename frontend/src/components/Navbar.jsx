import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Layout, Heart, LogOut, User, LogIn, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between border border-white/5 shadow-2xl">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-500 blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
            <div className="relative bg-gradient-to-br from-primary-400 to-primary-600 p-2 rounded-xl">
              <Layout className="text-white w-5 h-5" />
            </div>
          </div>
          <span className="text-2xl font-display font-black tracking-tight text-white">
            SaaS<span className="text-primary-400">Vault</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <NavLink to="/templates" active={isActive('/templates')}>Templates</NavLink>
          {user && <NavLink to="/favorites" active={isActive('/favorites')}>Favorites</NavLink>}
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 pl-4 border-l border-white/10">
                <Link to="/profile" className="text-right hidden sm:block hover:opacity-70 transition-opacity">
                  <p className="text-xs text-white/40 font-medium">Welcome back,</p>
                  <p className="text-sm text-white font-bold">{user.name}</p>
                </Link>
                <Link to="/profile" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 overflow-hidden hover:border-primary-500/50 transition-all">
                  {user.profile_image ? (
                    <img 
                      src={user.profile_image} 
                      alt="avatar" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} 
                      alt="avatar" 
                      className="w-full h-full"
                    />
                  )}
                </Link>
                <button 
                  onClick={handleLogout}
                  className="p-2 text-white/40 hover:text-red-400 transition-colors rounded-xl hover:bg-red-400/10"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login" className="px-5 py-2 text-sm font-bold text-white/70 hover:text-white transition-colors">
                Login
              </Link>
              <Link 
                to="/register" 
                className="relative group px-6 py-2.5 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary-600 group-hover:bg-primary-500 transition-colors" />
                <span className="relative text-sm font-bold text-white flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Join Now</span>
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, active }) => (
  <Link 
    to={to} 
    className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
      active ? 'bg-white/5 text-primary-400' : 'text-white/50 hover:text-white hover:bg-white/5'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
