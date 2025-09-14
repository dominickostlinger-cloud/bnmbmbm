import React from 'react';
import CustomLink from '../components/CustomLink';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center h-[60vh]">
      <h1 className="text-6xl font-black tracking-tighter text-brand-light mb-4">404</h1>
      <p className="text-xl text-brand-gray mb-8">Oops! The page you're looking for doesn't exist.</p>
      <CustomLink
        view="home"
        className="inline-block bg-brand-light text-brand-dark font-bold py-3 px-8 uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300"
      >
        Go to Homepage
      </CustomLink>
    </div>
  );
};

export default NotFoundPage;