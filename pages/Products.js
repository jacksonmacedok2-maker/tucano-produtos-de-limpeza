
import React, { useState } from 'react';
import { PRODUCTS, PHONE_NUMBER } from '../constants.js';
import { Category } from '../types.js';
import { ShoppingCart, Check } from 'lucide-react';

const CATEGORIES: Category[] = ['Todos', 'Sabão', 'Sabão Líquido', 'Detergente', 'Cloro'];

export const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getWhatsAppLink = (productName: string) => {
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
