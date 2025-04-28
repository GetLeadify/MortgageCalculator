import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Home className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">MortgageCalc</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-primary-600 font-medium' : 'text-gray-600'} hover:text-primary-600 transition-colors`}
            >
              Home
            </Link>
            <a 
              href="#calculator" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Calculator
            </a>
            <a 
              href="#guide" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Mortgage Guide
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`${
                location.pathname === '/' ? 'text-primary-600 font-medium' : 'text-gray-600'
              } block px-3 py-2 rounded-md text-base`}
            >
              Home
            </Link>
            <a
              href="#calculator"
              className="text-gray-600 block px-3 py-2 rounded-md text-base"
              onClick={toggleMenu}
            >
              Calculator
            </a>
            <a
              href="#guide"
              className="text-gray-600 block px-3 py-2 rounded-md text-base"
              onClick={toggleMenu}
            >
              Mortgage Guide
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;