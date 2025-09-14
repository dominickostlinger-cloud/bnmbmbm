
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Hoodies' | 'T-Shirts' | 'Pants' | 'Accessories';
  images: string[];
  sizes: string[];
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  totalPrice: number;
}

// Types for the new state-based navigation system
export type PageView = 'home' | 'products' | 'productDetail' | 'cart' | 'checkout' | 'notFound';

export interface NavigationParams {
  category?: string;
  id?: string;
  [key: string]: any;
}

export interface NavigationState {
  view: PageView;
  params: NavigationParams;
}

export interface NavigationContextType {
  navigationState: NavigationState;
  navigate: (view: PageView, params?: NavigationParams) => void;
}
