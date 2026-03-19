import { Link, useLocation } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: 'Products', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-extrabold tracking-tighter text-tertiary font-manrope">
          Nalis Pharmaceuticals
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 font-manrope font-semibold tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-all duration-300 ease-in-out pb-1 ${
                location.pathname === link.path
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-on-surface">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
}
