
import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
  const featured = products.filter(p => p.featured);

  return (
    <div className="bg-brand-dark py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black tracking-tighter text-center uppercase mb-12">
          Featured Items
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
