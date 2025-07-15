import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'services', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setActiveSection(sectionId);
  };

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-dark-900/95 backdrop-blur-md shadow-2xl border-b border-primary-600/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 relative">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-white hover:text-primary-500 transition-all duration-300 group relative"
            >
              <span className="relative z-10">
                JMT<span className="text-gradient animate-gradient">.</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-600/20 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 blur-sm"></div>
            </button>
          </div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    activeSection === item.id
                      ? 'text-primary-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active indicator */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-600/10 rounded-lg transform transition-all duration-300 ${
                    activeSection === item.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}></div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                  
                  {/* Bottom indicator */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-white/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>
              <div className="relative flex flex-col items-center justify-center w-6 h-6">
                <div className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-current transform transition-all duration-300 mt-1 ${
                  isOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-current transform transition-all duration-300 mt-1 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-800/95 backdrop-blur-md rounded-lg mt-2 border border-primary-600/10">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative w-full text-left block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === item.id
                    ? 'text-primary-400 bg-primary-600/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                } ${isOpen ? 'animate-slide-in-left' : ''}`}
                style={{ 
                  animationDelay: `${index * 100 + 200}ms`,
                  animationFillMode: 'both'
                }}
              >
                <span className="relative z-10 flex items-center">
                  {item.name}
                  {activeSection === item.id && (
                    <div className="ml-2 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                  )}
                </span>
                
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-transparent rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Background blur overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-dark-900/50 backdrop-blur-sm md:hidden -z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
