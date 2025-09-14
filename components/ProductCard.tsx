import React from 'react';
import { Product } from '../types';
import CustomLink from './CustomLink';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CustomLink view="productDetail" params={{ id: product.id }} className="group block">
      <div className="overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-md font-medium text-brand-light">{product.name}</h3>
        <p className="mt-1 text-lg text-brand-gray">${product.price.toFixed(2)}</p>
      </div>
    </CustomLink>
  );
};

export default ProductCard;