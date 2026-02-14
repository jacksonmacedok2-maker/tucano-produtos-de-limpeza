
import React, { useState } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { PageName } from '../types.js';
import { LOGO_URL } from '../constants.js';

interface HeaderProps {
  currentPage: PageName;
  setCurrentPage: (page: PageName) => void;
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const navLinks: { name: string; value: PageName }[] = [
    { name: 'Início', value: 'home' },
    { name: 'Produtos', value: 'products' },
    { name: 'Sobre Nós', value: 'about' },
    { name: 'Contato', value: 'contact' },
  ];

  const handleNav = (page: PageName) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Logic to determine text color
  // If we are on Home or About, the background is dark/colored, so we need light text when header is transparent.
  // If scrolled, header becomes white, so text must be dark.
  const isDarkHeroPage = currentPage === 'home' || currentPage === 'about';
  const useLightText = !isScrolled && isDarkHeroPage;

  const textColorClass = useLightText ? 'text-white' : 'text-slate-600';
  const logoTextClass = useLightText ? 'text-white' : 'text-tucano-blue';
  const logoSubTextClass = useLightText ? 'text-blue-100' : 'text-tucano-green';
  const activeLinkClass = useLightText 
    ? 'text-white border-b-2 border-tucano-yellow' 
    : 'text-tucano-blue border-b-2 border-tucano-yellow';
  const hoverLinkClass = useLightText ? 'hover:text-tucano-yellow' : 'hover:text-tucano-blue';
  const mobileMenuButtonClass = useLightText ? 'text-white' : 'text-slate-700';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNav('home')} 
          className="flex items-center space-x-3 cursor-pointer group"
        >
          {!imgError ? (
            <img 
              src={LOGO_URL} 
              alt="Tucano Logo" 
              className="h-12 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className={`p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 ${useLightText ? 'bg-white/20' : 'bg-tucano-yellow'}`}>
              <Droplets className={`w-6 h-6 ${useLightText ? 'text-white' : 'text-tucano-blue'}`} />
            </div>
          )}
          
          <div className="flex flex-col">
            <span className={`text-2xl font-bold tracking-tight leading-none transition-colors ${logoTextClass}`}>
              Tucano
            </span>
            <span className={`text-xs font-medium tracking-widest uppercase transition-colors ${logoSubTextClass}`}>
              Produtos de Limpeza
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => handleNav(link.value)}
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                currentPage === link.value
                  ? activeLinkClass
                  : `${textColorClass} ${hoverLinkClass}`
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 transition-colors ${mobileMenuButtonClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNav(link.value)}
                className={`px-6 py-3 text-left font-medium ${
                  currentPage === link.value
                    ? 'text-tucano-blue bg-blue-50'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
