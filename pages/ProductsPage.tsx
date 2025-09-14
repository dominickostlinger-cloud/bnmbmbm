
import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { useNavigation } from '../context/NavigationContext';

const ProductsPage: React.FC = () => {
  const { navigationState } = useNavigation();
  const { category } = navigationState.params;

  const filteredProducts = category
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : products;
    
  const title = category ? category : 'All Products';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-black tracking-tighter text-center uppercase mb-12">
        {title}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;