
export type Category = 'Todos' | 'Sabão' | 'Sabão Líquido' | 'Detergente' | 'Cloro';

export interface Product {
  id: number;
  name: string;
  category: Category;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export type PageName = 'home' | 'products' | 'about' | 'contact';
