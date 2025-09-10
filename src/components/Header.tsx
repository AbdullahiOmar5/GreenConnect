import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detect if on home page
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'About', path: '/about' },
    // { name: 'Work', path: '/work' },
    { name: 'Services', path: '/impact' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
    
  ];

  // Determine header background and text color
  const isTransparent = isHome && !isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isTransparent ? 'bg-transparent' : 'bg-white shadow-lg backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {/* <div className={`w-10 h-10 bg-gradient-to-br from-[#76B947] to-[#94C973] rounded-lg flex items-center justify-center transition-colors duration-300`}>
              <Leaf className="w-16 h-16 text-white" />
            </div> */}
            <img
                src={
                  isTransparent
                    ? './public/logo-solid_2.png' // transparent version for home before scroll
                    : './public/logo-transparent.png'       // solid version for scrolled or other pages
                }
                alt="Agri Connect Logo"
                width="100px"
                height="56px"
                className="transition-all duration-300"
              />


            <span className={`text-xl font-bold transition-colors duration-300 ${
              isTransparent ? 'text-white' : 'text-[#2F5233]'
            }`}>
              {/* Green Connect */}
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-[#76B947] ${
                  isTransparent ? 'text-white hover:text-[#B1D8B7]' : 'text-[#2F5233]'
                } ${location.pathname === item.path ? 'text-[#76B947]' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isTransparent ? 'text-white hover:bg-white hover:bg-opacity-20' : 'text-[#2F5233] hover:bg-gray-100'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg animate-fade-in">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 text-[#2F5233] hover:bg-[#B1D8B7] hover:bg-opacity-20 transition-colors duration-300 ${
                    location.pathname === item.path ? 'bg-[#B1D8B7] bg-opacity-20 text-[#76B947] font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;