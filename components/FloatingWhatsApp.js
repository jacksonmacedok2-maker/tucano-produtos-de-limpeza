
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PHONE_NUMBER } from '../constants.js';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Delay appearance slightly for smoother entrance
    const timer1 = setTimeout(() => setIsVisible(true), 500);
    // Show message bubble automatically after 2.5 seconds
    const timer2 = setTimeout(() => setShowBubble(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos Tucano.");
  const link = `https://wa.me/${PHONE_NUMBER}?text=${message}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-in-up">
      {/* Popup Message Bubble */}
      <div 
        className={`bg-white p-4 rounded-2xl rounded-br-none shadow-xl border border-slate-100 max-w-[260px] transition-all duration-500 transform origin-bottom-right relative ${
          showBubble 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setShowBubble(false);
          }}
          className="absolute -top-2 -left-2 bg-slate-100 hover:bg-slate-200 rounded-full p-1 text-slate-500 transition-colors shadow-sm"
          aria-label="Fechar mensagem"
        >
          <X size={14} />
        </button>
        <div className="text-slate-700 text-sm font-medium leading-relaxed">
          <span className="block text-tucano-blue font-bold mb-1">Olá! 👋</span>
          Precisa de ajuda? Fale conosco no WhatsApp!
        </div>
      </div>

      {/* Main Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20b556] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300/50"
        aria-label="Fale conosco no WhatsApp"
        onMouseEnter={() => setShowBubble(true)}
      >
        {/* Pulsing Effect Ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>
        
        {/* Icon */}
        <MessageCircle size={32} className="text-white relative z-10" />
      </a>
    </div>
  );
};
