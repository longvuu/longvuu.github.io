import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode } = useTheme();

  return (
    <nav className="navbar backdrop-blur-md fixed top-0 w-full z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center items-center relative">
        {/* Hamburger menu for mobile */}
        <div 
          className="hamburger-menu lg:hidden flex flex-col justify-between w-6 h-5 cursor-pointer z-50 absolute right-4" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </div>
        
        {/* Navigation links centered */}
        <ul className={`lg:flex items-center space-x-10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
          <li>
            <Link 
              to="/" 
              className={`py-2 px-3 font-medium transition-colors duration-300 hover:text-purple-400 ${location.pathname === '/' ? 'text-purple-500 font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link 
              to="/resources" 
              className={`py-2 px-3 font-medium transition-colors duration-300 hover:text-purple-400 ${location.pathname === '/resources' ? 'text-purple-500 font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link 
              to="/music" 
              className={`py-2 px-3 font-medium transition-colors duration-300 hover:text-purple-400 ${location.pathname === '/music' ? 'text-purple-500 font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Music
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;