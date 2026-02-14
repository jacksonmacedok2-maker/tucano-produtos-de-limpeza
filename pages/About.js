
import React from 'react';
import { Award, Heart, Users, Smile } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-tucano-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossa História</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Nascemos com um propósito simples: levar limpeza de qualidade, confiança e alegria para todos os lares brasileiros.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Inspirado na natureza,<br/>feito para sua casa.</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              A <strong>Tucano Produtos de Limpeza</strong> surgiu da observação das cores vibrantes e da energia da nossa fauna. O tucano, com sua beleza e imponência, representa tudo o que queremos entregar: 
              produtos que se destacam, que trazem vida ao ambiente e que são puramente brasileiros.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Começamos como uma pequena fábrica familiar e hoje temos orgulho de estar presentes em milhares de lares e comércios, sempre mantendo nossa essência: 
              atendimento próximo, qualidade rigorosa e aquele cheirinho inconfundível de limpeza.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/400/500?random=11" alt="Equipe Tucano" className="rounded-2xl shadow-lg mt-8" />
            <img src="https://picsum.photos/400/500?random=12" alt="Fábrica" className="rounded-2xl shadow-lg mb-8" />
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-tucano-blue">
              <div className="w-12 h-12 bg-blue-50 text-tucano-blue rounded-full flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Missão</h3>
              <p className="text-slate-600">
                Oferecer soluções de limpeza de alta performance com preço justo, facilitando o dia a dia das famílias e empresas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-tucano-yellow">
               <div className="w-12 h-12 bg-yellow-50 text-tucano-yellow rounded-full flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Visão</h3>
              <p className="text-slate-600">
                Ser referência regional em produtos de limpeza, reconhecida pela inovação, sustentabilidade e carinho com o consumidor.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-tucano-green">
               <div className="w-12 h-12 bg-green-50 text-tucano-green rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Valores</h3>
              <p className="text-slate-600">
                Honestidade nas relações, compromisso com a qualidade, respeito ao meio ambiente e paixão pelo que fazemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12 text-slate-900">Nossa Qualidade em Números</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6">
            <div className="text-4xl font-bold text-tucano-blue mb-2">+50</div>
            <div className="text-slate-500">Produtos no Catálogo</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-tucano-blue mb-2">+2000</div>
            <div className="text-slate-500">Clientes Atendidos</div>
          </div>
           <div className="p-6">
            <div className="text-4xl font-bold text-tucano-blue mb-2">98%</div>
            <div className="text-slate-500">Aprovação</div>
          </div>
           <div className="p-6">
            <div className="text-4xl font-bold text-tucano-blue mb-2">24h</div>
            <div className="text-slate-500">Atendimento Ágil</div>
          </div>
        </div>
      </section>
    </div>
  );
};
