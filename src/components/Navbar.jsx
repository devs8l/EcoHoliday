import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');

  const navItems = [
    'HOME',
    'ABOUT US',
    'SERVICES',
    'FACILITIES',
    'GALLERY',
    'FEEDBACK',
    'CONTACT US'
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  return (
    <nav className=" z-50  w-full afacad absolute top-0 left-0">
      {/* Desktop Navigation */}
      <div className="sm:px-15 sm:py-6 p-3">
        <div className="flex  items-center h-12">
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => handleItemClick(item)}
                  className={`relative py-2 text-sm  tracking-wide transition-colors duration-200 ${
                    activeItem === item 
                      ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0  after:h-0.5 after:bg-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0000007b] bg-opacity-50 z-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-black/30 backdrop-blur-sm shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="px-6 py-4">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => handleItemClick(item)}
                  className={`block py-3 text-sm font-medium tracking-wide border-b border-gray-500 last:border-b-0 transition-colors duration-200 ${
                    activeItem === item 
                      ? 'text-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;