import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navConfig = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about-us' },
  { name: 'SERVICES', path: '/services' },
  { name: 'FACILITIES', path: '/facilities' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'FEEDBACK', path: '/feedback' },
  { name: 'CONTACT US', path: '/contact-us' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-100 w-full afacad absolute top-0 left-0">
      <div className="sm:px-15 sm:py-6 p-3">
        <div className="flex items-center h-12">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navConfig.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) => 
                    `relative py-2 text-sm tracking-wide transition-colors duration-200 ${
                      isActive 
                        ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white' 
                        : 'text-white/60 hover:text-white'
                    }`
                  }
                  end
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-black/30 backdrop-blur-sm shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-6 py-4">
            <div className="space-y-4">
              {navConfig.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) => 
                    `block py-3 text-sm font-medium tracking-wide border-b border-gray-500 last:border-b-0 transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    }`
                  }
                  onClick={toggleMenu}
                  end
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;