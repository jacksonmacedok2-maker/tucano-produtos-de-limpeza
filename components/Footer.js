
import React from 'react';
import { PageName } from '../types.js';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants.js';

interface FooterProps {
  navigate: (page: PageName) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-tucano-yellow">Tucano</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Soluções completas em limpeza para sua casa e empresa. Qualidade, perfume e eficiência que você confia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-slate-200">Navegação</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button onClick={() => navigate('home')} className="hover:text-tucano-yellow transition">Início</button></li>
              <li><button onClick={() => navigate('products')} className="hover:text-tucano-yellow transition">Nossos Produtos</button></li>
              <li><button onClick={() => navigate('about')} className="hover:text-tucano-yellow transition">Sobre Nós</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-tucano-yellow transition">Fale Conosco</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-slate-200">Contato</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-tucano-yellow" />
                <span>+55 75 8807-8221</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-tucano-yellow" />
                <span>contato@produtostucano.com.br</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-tucano-yellow mt-1" />
                <span>Feira de Santana - BA<br />Entregamos em toda região</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-slate-200">Siga-nos</h4>
            <a 
              href={INSTAGRAM_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full transition-transform hover:scale-105 shadow-lg"
            >
              <Instagram size={18} />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Tucano Produtos de Limpeza. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com carinho para o seu lar.</p>
        </div>
      </div>
    </footer>
  );
};
