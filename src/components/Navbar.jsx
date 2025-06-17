import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const navConfig = [
  { name: 'HOME', path: '/' },
  { 
    name: 'SERVICES', 
    path: '/services',
    subItems: [
      { name: 'Room Booking', path: '/room-booking' },
      { name: 'Day Out Booking', path: '/day-out-booking' }
    ]
  },
  { name: 'ABOUT US', path: '/about-us' },
  { name: 'FACILITIES', path: '/facilities' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'FEEDBACK', path: '/feedback' },
  { name: 'CONTACT US', path: '/contact-us' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  const isFacilitiesPage = location.pathname === '/facilities' && isMobile;
  const servicesRef = useRef(null);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset services dropdown when closing menu
    if (isMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <nav className={`z-100 w-full afacad absolute top-0 left-0 `}>
      <div className="sm:px-15 sm:py-6 p-3">
        <div className="flex items-center h-12">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navConfig.map((item, index) => (
                <div key={index} className="relative group" ref={item.subItems ? servicesRef : null}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={toggleServices}
                        className={`relative py-2 text-sm tracking-wide transition-colors duration-200 flex items-center ${
                          location.pathname.startsWith(item.path) 
                            ? `text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white` 
                            : `text-white/60 hover:text-white ${isFacilitiesPage ? '!text-black/80 hover:!text-black' : ''}`
                        }`}
                      >
                        {item.name}
                        {isServicesOpen ? (
                          <ChevronUp className="ml-1 w-4 h-4" />
                        ) : (
                          <ChevronDown className="ml-1 w-4 h-4" />
                        )}
                      </button>
                      {isServicesOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                          <div className="py-1">
                            {item.subItems.map((subItem, subIndex) => (
                              <NavLink
                                key={subIndex}
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {subItem.name}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => 
                        `relative py-2 text-sm tracking-wide transition-colors duration-200 ${
                          isActive 
                            ? `text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white` 
                            : `text-white/60 hover:text-white ${isFacilitiesPage ? '!text-black/80 hover:!text-black' : ''}`
                        }`
                      }
                      end
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className={`hover:text-gray-300 focus:outline-none p-2 ${
                isFacilitiesPage ? 'text-black' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Keeping the existing layout exactly as it was */}
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
                <div key={index}>
                  {item.subItems ? (
                    <div className="mb-2">
                      <button
                        onClick={toggleMobileServices}
                        className={`flex items-center justify-between w-full py-3 text-sm font-medium tracking-wide border-b border-gray-500 last:border-b-0 transition-colors duration-200 ${
                          location.pathname.startsWith(item.path) 
                            ? 'text-white' 
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        <span>{item.name}</span>
                        {isMobileServicesOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      {isMobileServicesOpen && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <NavLink
                              key={subIndex}
                              to={subItem.path}
                              className={({ isActive }) => 
                                `block py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                                }`
                              }
                              onClick={toggleMenu}
                            >
                              {subItem.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
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
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;