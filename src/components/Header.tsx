import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Domaines de Droit', href: '/domaines-de-droit' },
    { name: 'Témoignages', href: '/témoignages' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleConsultationClick = () => {
    const phoneNumber = '+24206XXXXXXX'; // Remplacez par le vrai numéro
    const message = encodeURIComponent('Bonjour, je souhaiterais prendre rendez-vous pour une consultation juridique.');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-amber-300 transition-colors duration-300">
              <Phone className="h-4 w-4" />
              <span>+242 06 XXX XXXX</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-amber-300 transition-colors duration-300">
              <Mail className="h-4 w-4" />
              <span>contact@cabinet-avocat-brazzaville.com</span>
            </div>
          </div>
          <div className="hidden md:block text-xs opacity-90">
            Consultation sur rendez-vous • Brazzaville, Congo
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className={`sticky top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-white shadow-xl backdrop-blur-md' : 'bg-white/98 backdrop-blur-sm shadow-lg'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-amber-600 p-2 rounded-lg group-hover:bg-amber-700 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h1 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">Cabinet Juridique</h1>
                <p className="text-sm text-gray-600">Brazzaville</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium py-2 group ${
                    location.pathname === item.href ? 'text-amber-600' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.href ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
              <button
                onClick={handleConsultationClick}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg transform active:scale-95 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                  Consultation WhatsApp
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <X className={`h-6 w-6 text-gray-700 absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                }`} />
                <Menu className={`h-6 w-6 text-gray-700 absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                }`} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 py-4 space-y-3 bg-white border-t border-gray-100">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-amber-50 transform hover:translate-x-2 ${
                    location.pathname === item.href ? 'text-amber-600 bg-amber-50' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                    transition: `all 0.3s ease-in-out ${index * 50}ms`
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleConsultationClick();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 font-medium text-center mt-4 hover:scale-105 transform active:scale-95"
              >
                Consultation WhatsApp
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;