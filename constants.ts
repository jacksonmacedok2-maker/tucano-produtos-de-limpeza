
import { Product, Testimonial } from './types.ts';
import { Sparkles, Droplets, ShieldCheck, Zap } from 'lucide-react';

export const PHONE_NUMBER = "557588078221";
export const INSTAGRAM_URL = "https://www.instagram.com/produtostucano/";
// Using lh3.googleusercontent.com for better direct image linking support
export const LOGO_URL = "https://lh3.googleusercontent.com/d/1dffhb6fgEBnWshdfpbw0n4Ff8oMowI9k";

export const PRODUCTS: Product[] = [
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

export const TESTIMONIALS: Testimonial[] = [
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

export const FEATURES = [
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