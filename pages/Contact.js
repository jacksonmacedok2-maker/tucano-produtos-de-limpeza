
import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { PHONE_NUMBER, INSTAGRAM_URL } from '../constants.js';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-white shadow-sm py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Fale Conosco</h1>
          <p className="text-slate-500 text-lg">
            Estamos prontos para atender você com rapidez e cordialidade.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-green-100 p-4 rounded-full text-green-600">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">WhatsApp & Telefone</h3>
                <p className="text-slate-500 mb-4">Canal direto para pedidos e dúvidas.</p>
                <a href={`https://wa.me/${PHONE_NUMBER}`} className="text-lg font-bold text-tucano-blue hover:underline">
                  (75) 8807-8221
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-pink-100 p-4 rounded-full text-pink-600">
                <Instagram size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Instagram</h3>
                <p className="text-slate-500 mb-4">Siga nossas novidades e dicas diárias.</p>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-tucano-blue hover:underline">
                  @produtostucano
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Localização</h3>
                <p className="text-slate-500">
                  Feira de Santana - BA<br/>
                  Atendemos toda a região.
                </p>
              </div>
            </div>
          </div>

          {/* Service Promise */}
          <div className="bg-tucano-blue rounded-3xl p-10 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-tucano-green/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                <Clock size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Atendimento Ágil</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Sabemos que a limpeza não pode esperar. Por isso, nos comprometemos em responder suas mensagens o mais rápido possível durante o horário comercial.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-tucano-yellow">Horário de Funcionamento:</p>
                <p>Segunda a Sexta: 08:00 - 18:00</p>
                <p>Sábado: 08:00 - 12:00</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
