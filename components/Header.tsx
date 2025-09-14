import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CartIcon } from './icons/CartIcon';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';
import CustomLink from './CustomLink';
import { PageView } from '../types';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { view: PageView; params: { category?: string }; name: string }[] = [
    { view: 'home', params: {}, name: 'Home' },
    { view: 'products', params: { category: 'Hoodies' }, name: 'Hoodies' },
    { view: 'products', params: { category: 'T-Shirts' }, name: 'T-Shirts' },
    { view: 'products', params: { category: 'Pants' }, name: 'Pants' },
    { view: 'products', params: { category: 'Accessories' }, name: 'Accessories' },
    { view: 'products', params: { category: undefined }, name: 'All' },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `uppercase tracking-wider text-sm hover:text-white transition-colors duration-300 ${isActive ? 'text-white' : 'text-brand-gray'}`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-800">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-light">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0">
            <CustomLink view="home" className="text-2xl font-black tracking-tighter text-brand-light">
              RepzzHeaven
            </CustomLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:space-x-8">
            {navLinks.map(link => (
              <CustomLink key={link.name} view={link.view} params={link.params} className={linkClass}>
                {link.name}
              </CustomLink>
            ))}
          </nav>

          {/* Cart */}
          <div className="flex items-center">
            <CustomLink view="cart" className="relative text-brand-light hover:text-white transition-colors">
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-brand-dark bg-brand-light rounded-full">
                  {cartCount}
                </span>
              )}
            </CustomLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-dark border-b border-gray-800">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map(link => (
              <CustomLink key={link.name} view={link.view} params={link.params} className={linkClass} onClick={closeMenu}>
                {link.name}
              </CustomLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;