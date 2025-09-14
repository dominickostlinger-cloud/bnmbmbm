
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-brand-gray text-sm">
          &copy; {new Date().getFullYear()} RepzzHeaven. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
