import React from 'react';
import { PageName } from '../types.ts';
import { PRODUCTS, FEATURES, TESTIMONIALS, PHONE_NUMBER } from '../constants.ts';
import { ArrowRight, Star, CheckCircle2, MessageCircle } from 'lucide-react';

interface HomeProps {
  navigate: (page: PageName) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate }) => {
  
  const heroWhatsAppLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Olá! Vi o site e quero fazer um pedido.")}`;
  const HERO_IMAGE = "https://lh3.googleusercontent.com/d/1w2Oz0rGIu06rxcKARbixG-KPPDLkLZRy";

  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image Container with Animation */}
        <div className="absolute inset-0 z-0 animate-fade-in">
           {/* Image with filters for professional look */}
           <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url('${HERO_IMAGE}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.9) saturate(1.1)', 
              }}
            />
            {/* Vignette / Radial Gradient for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(15,23,42,0.4)_100%)] mix-blend-multiply" />
        </div>
        
        {/* Overlays for Text Readability */}
        {/* Main dark gradient from top/bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/80 z-10" />
        {/* Solid tint to unify */}
        <div className="absolute inset-0 bg-slate-900/20 z-10" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-center text-white h-full flex flex-col justify-center items-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center pt-10">
             
             {/* Badge */}
             <div 
               className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-sm font-bold tracking-wide mb-8 animate-fade-in-up text-tucano-yellow shadow-lg" 
               style={{animationDelay: '0.2s'}}
             >
              ✨ Limpeza Profissional para seu Lar
            </div>

            {/* Headline */}
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-fade-in-up drop-shadow-2xl" 
              style={{animationDelay: '0.4s'}}
            >
              Qualidade que <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tucano-yellow to-white filter drop-shadow-lg">
                você pode sentir
              </span>
            </h1>
            
            {/* Subtitle */}
            <p 
              className="text-lg md:text-2xl text-slate-100 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up font-light drop-shadow-md" 
              style={{animationDelay: '0.6s'}}
            >
              Produtos desenvolvidos com a máxima tecnologia para garantir eficiência, brilho e aquele cheirinho de casa limpa que dura muito mais.
            </p>
            
            {/* Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-5 justify-center w-full animate-fade-in-up" 
              style={{animationDelay: '0.8s'}}
            >
              <a 
                href={heroWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-tucano-yellow text-tucano-dark rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-yellow-500/30 flex items-center justify-center gap-2 group ring-4 ring-yellow-400/20"
              >
                Comprar Agora
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => navigate('products')}
                className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/40 text-white rounded-full font-bold text-lg hover:bg-white/15 transition-all flex items-center justify-center hover:scale-105 shadow-lg"
              >
                Ver Catálogo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por que escolher a Tucano?</h2>
          <p className="text-slate-600">
            Nossa fórmula exclusiva combina poder de limpeza com fragrâncias importadas para proporcionar uma experiência única.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-tucano-blue rounded-2xl flex items-center justify-center mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-tucano-blue font-bold tracking-wider uppercase text-sm">Destaques</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Nossos Favoritos</h2>
            </div>
            <button 
              onClick={() => navigate('products')} 
              className="hidden md:flex items-center text-tucano-blue font-semibold hover:text-blue-700"
            >
              Ver todos os produtos <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-tucano-blue">{product.price}</span>
                    <button 
                      onClick={() => navigate('products')}
                      className="text-sm font-semibold text-tucano-green hover:underline"
                    >
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button 
                onClick={() => navigate('products')} 
                className="inline-flex items-center text-tucano-blue font-semibold hover:text-blue-700"
              >
                Ver todos os produtos <ArrowRight size={16} className="ml-2" />
              </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">O que dizem nossos clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm relative">
              <div className="flex gap-1 mb-4 text-tucano-yellow">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} size={16} fill={i < t.rating ? "currentColor" : "none"} strokeWidth={i < t.rating ? 0 : 2} className={i >= t.rating ? "text-slate-300" : ""} />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="container mx-auto px-4">
        <div className="bg-tucano-blue rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para transformar sua limpeza?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Entre em contato agora mesmo pelo WhatsApp e faça seu pedido. Entregamos rapidez e qualidade na sua porta.
            </p>
            <a 
              href={heroWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-tucano-yellow text-tucano-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <MessageCircle size={24} className="animate-bounce" />
              Falar com Vendedor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};