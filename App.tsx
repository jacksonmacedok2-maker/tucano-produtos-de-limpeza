import React, { useState, useEffect } from 'react';
import { PageName } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={setCurrentPage} />;
      case 'products': return <Products />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home navigate={setCurrentPage} />;
    }
  };

  // Pages that start with a hero/colored section that should go under the header
  const isTransparentHeaderPage = currentPage === 'home' || currentPage === 'about';

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isScrolled={isScrolled} 
      />
      
      <main className={`flex-grow ${isTransparentHeaderPage ? '' : 'pt-20'}`}>
        {renderPage()}
      </main>

      <Footer navigate={setCurrentPage} />
      <FloatingWhatsApp />
    </div>
  );
}