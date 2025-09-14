import React from 'react';
import CustomLink from './CustomLink';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-dark h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      <img
        src="https://picsum.photos/seed/hero/1920/1080"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-4">
          The New Collection
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-brand-gray mb-8">
          Discover curated essentials and timeless pieces, crafted for the modern wardrobe.
        </p>
        <CustomLink
          view="products"
          className="inline-block bg-brand-light text-brand-dark font-bold py-3 px-8 uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300"
        >
          Shop Now
        </CustomLink>
      </div>
    </div>
  );
};

export default Hero;