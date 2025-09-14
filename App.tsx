import React from 'react';
import { CartProvider } from './context/CartContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';

const PageRenderer: React.FC = () => {
  const { navigationState } = useNavigation();

  switch (navigationState.view) {
    case 'home':
      return <HomePage />;
    case 'products':
      return <ProductsPage />;
    case 'productDetail':
      return <ProductDetailPage />;
    case 'cart':
      return <CartPage />;
    case 'checkout':
      return <CheckoutPage />;
    default:
      return <NotFoundPage />;
  }
}

const App: React.FC = () => {
  return (
    <CartProvider>
      <NavigationProvider>
        <div className="bg-brand-dark text-brand-light min-h-screen flex flex-col font-sans">
          <Header />
          <main className="flex-grow">
            <PageRenderer />
          </main>
          <Footer />
        </div>
      </NavigationProvider>
    </CartProvider>
  );
};

export default App;