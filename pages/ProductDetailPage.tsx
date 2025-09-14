import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import NotFoundPage from './NotFoundPage';
import { useNavigation } from '../context/NavigationContext';

const ProductDetailPage: React.FC = () => {
  const { navigationState } = useNavigation();
  const { id } = navigationState.params;
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  const [selectedSize, setSelectedSize] = useState<string | null>(product ? product.sizes[0] : null);
  const [mainImage, setMainImage] = useState<string | undefined>(product?.images[0]);
  const [notification, setNotification] = useState<string>('');

  useEffect(() => {
    if (notification) {
      const timerId = setTimeout(() => {
        setNotification('');
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [notification]);
  
  useEffect(() => {
    if (product) {
        setMainImage(product.images[0]);
        setSelectedSize(product.sizes[0]);
    }
  }, [id, product]);

  if (!product) {
    return <NotFoundPage />;
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
      setNotification(`${product.name} (${selectedSize}) added to cart!`);
    } else {
      setNotification('Please select a size.');
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
       {notification && (
        <div className="fixed top-24 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg z-50 animate-fade-in-out">
          {notification}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="mb-4">
            <img src={mainImage} alt={product.name} className="w-full h-auto object-cover aspect-[4/5]" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <button key={index} onClick={() => setMainImage(img)} className={`border-2 ${mainImage === img ? 'border-white' : 'border-transparent'}`}>
                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-auto object-cover aspect-square" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase">{product.name}</h1>
          <p className="text-2xl text-brand-gray my-4">${product.price.toFixed(2)}</p>
          <p className="text-brand-gray leading-relaxed">{product.description}</p>
          
          <div className="my-6">
            <h3 className="text-sm font-medium uppercase tracking-wider mb-3">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-4 border text-sm uppercase transition-colors duration-200 ${selectedSize === size ? 'bg-white text-brand-dark' : 'border-gray-800 hover:bg-gray-800'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-brand-light text-brand-dark font-bold py-4 px-8 uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selectedSize}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;