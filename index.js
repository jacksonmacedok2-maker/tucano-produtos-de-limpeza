
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Sparkles, Droplets, ShieldCheck, Zap, Menu, X, Instagram, 
  Phone, Mail, MapPin, MessageCircle, ArrowRight, Star, 
  ShoppingCart, Check, Award, Heart, Users, Clock 
} from 'lucide-react';

// ==========================================
// CONSTANTS & DATA
// ==========================================

const PHONE_NUMBER = "557588078221";
const INSTAGRAM_URL = "https://www.instagram.com/produtostucano/";
const LOGO_URL = "https://lh3.googleusercontent.com/d/1dffhb6fgEBnWshdfpbw0n4Ff8oMowI9k";

const PRODUCTS = [
  {
    id: 1,
    name: "Sabão Líquido Premium Azul",
    category: "Sabão Líquido",
    description: "Limpeza profunda que preserva as cores e deixa um perfume duradouro nas roupas.",
    price: "R$ 25,90",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800",
    features: ["Proteção da cor", "Perfume intenso", "Rende 30 lavagens"]
  },
  {
    id: 2,
    name: "Detergente Neutro Cristal",
    category: "Detergente",
    description: "Desengordurante potente, suave para as mãos e com alto rendimento.",
    price: "R$ 4,50",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
    features: ["Dermatologicamente testado", "Alto rendimento", "Brilho intenso"]
  },
  {
    id: 3,
    name: "Cloro Ativo Gel",
    category: "Cloro",
    description: "Máxima eficácia na remoção de limo e branqueamento de superfícies.",
    price: "R$ 15,50",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800",
    features: ["Ação bactericida", "Gel aderente", "Branqueador"]
  },
  {
    id: 4,
    name: "Sabão em Pasta Multiuso",
    category: "Sabão",
    description: "Ideal para dar brilho em panelas e remover sujeiras pesadas.",
    price: "R$ 8,90",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800",
    features: ["Brilho espelhado", "Remove gordura", "Econômico"]
  },
  {
    id: 5,
    name: "Sabão Líquido de Coco",
    category: "Sabão Líquido",
    description: "Suavidade do coco para roupas delicadas e roupas de bebê.",
    price: "R$ 28,90",
    image: "https://images.unsplash.com/photo-1557825835-b7784f18d536?auto=format&fit=crop&q=80&w=800",
    features: ["Hipoalergênico", "Para roupas finas", "Cheirinho suave"]
  },
  {
    id: 6,
    name: "Detergente Maçã",
    category: "Detergente",
    description: "O poder desengordurante com o aroma refrescante de maçã.",
    price: "R$ 4,50",
    image: "https://images.unsplash.com/photo-1622483767123-57c5f85ce6fa?auto=format&fit=crop&q=80&w=800",
    features: ["Controle de odor", "Espuma rica", "Fácil enxágue"]
  },
  {
    id: 7,
    name: "Água Sanitária Potente",
    category: "Cloro",
    description: "Desinfecção completa para sua casa, quintal e roupas brancas.",
    price: "R$ 7,90",
    image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&q=80&w=800",
    features: ["Mata 99,9% dos germes", "Alvejante", "Multiuso"]
  },
  {
    id: 8,
    name: "Sabão em Barra de Coco",
    category: "Sabão",
    description: "Tradição e eficiência na lavagem manual de roupas.",
    price: "R$ 12,90",
    image: "https://images.unsplash.com/photo-1624458564035-7117eb8ba342?auto=format&fit=crop&q=80&w=800",
    features: ["Natural", "Não agride tecidos", "Durável"]
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Dona de Casa",
    text: "O Sabão Líquido Tucano mudou minha rotina. As roupas ficam cheirosas por dias!",
    rating: 5
  },
  {
    id: 2,
    name: "Mercadinho do João",
    role: "Comerciante",
    text: "O Detergente tem uma saída ótima. Meus clientes adoram o custo-benefício.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Empresária",
    text: "Uso o Cloro Tucano na minha empresa de limpeza e o resultado é impecável.",
    rating: 4
  }
];

const FEATURES_DATA = [
  {
    icon: Sparkles,
    title: "Brilho Intenso",
    desc: "Fórmulas desenvolvidas para dar vida nova às superfícies."
  },
  {
    icon: Droplets,
    title: "Rendimento",
    desc: "Concentração alta que faz o produto durar muito mais."
  },
  {
    icon: ShieldCheck,
    title: "Qualidade Garantida",
    desc: "Matérias-primas selecionadas e rigoroso controle de qualidade."
  },
  {
    icon: Zap,
    title: "Ação Rápida",
    desc: "Menos esforço na limpeza pesada do dia a dia."
  }
];

// ==========================================
// COMPONENTS
// ==========================================

const Header = ({ currentPage, setCurrentPage, isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const navLinks = [
    { name: 'Início', value: 'home' },
    { name: 'Produtos', value: 'products' },
    { name: 'Sobre Nós', value: 'about' },
    { name: 'Contato', value: 'contact' },
  ];

  const handleNav = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

const Footer = ({ navigate }) => {
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

const FloatingWhatsApp = () => {
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

// ==========================================
// PAGES
// ==========================================

const Home = ({ navigate }) => {
  const heroWhatsAppLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Olá! Vi o site e quero fazer um pedido.")}`;
  const HERO_IMAGE = "https://lh3.googleusercontent.com/d/1w2Oz0rGIu06rxcKARbixG-KPPDLkLZRy";

  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image Container with Animation */}
        <div className="absolute inset-0 z-0 animate-fade-in">
           <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url('${HERO_IMAGE}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.9) saturate(1.1)', 
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(15,23,42,0.4)_100%)] mix-blend-multiply" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/80 z-10" />
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
          {FEATURES_DATA.map((feature, idx) => (
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

const Products = () => {
  const CATEGORIES = ['Todos', 'Sabão', 'Sabão Líquido', 'Detergente', 'Cloro'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getWhatsAppLink = (productName) => {
    const text = `Olá! Gostaria de comprar o produto: ${productName}.`;
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Header */}
      <div className="bg-white py-16 shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nossos Produtos</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Conheça nossa linha completa de limpeza. Qualidade profissional para o conforto do seu lar.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="container mx-auto px-4 py-8 sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-tucano-blue text-white shadow-md transform scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100">
              <div className="relative h-72 overflow-hidden bg-slate-100 group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{product.description}</p>
                
                {/* Features List */}
                <ul className="mb-6 space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs text-slate-600 font-medium bg-slate-50 p-2 rounded-lg">
                      <Check size={14} className="text-tucano-green mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-tucano-blue">{product.price}</span>
                  </div>
                  <a 
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-green-200"
                  >
                    <ShoppingCart size={18} />
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-slate-400">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const About = () => {
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

const Contact = () => {
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

// ==========================================
// MAIN APP COMPONENT
// ==========================================

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
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

// ==========================================
// ROOT RENDER
// ==========================================

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
