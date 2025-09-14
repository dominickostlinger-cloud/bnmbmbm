import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { PageView, NavigationParams } from '../types';

interface CustomLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'> {
  view: PageView;
  params?: NavigationParams;
  className?: string | ((props: { isActive: boolean }) => string);
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ view, params = {}, children, className, onClick, ...rest }) => {
  const { navigate, navigationState } = useNavigation();

  // Determine if the link is active. It's active if the view matches.
  // For product categories, we also check if the category param matches.
  const isActive = 
    navigationState.view === view && 
    (
      view !== 'products' || 
      navigationState.params.category === params.category
    );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(view, params);
    if (onClick) {
      onClick(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(view, params);
    }
  };
  
  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className;

  return (
    <a 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={resolvedClassName}
      role="link"
      tabIndex={0}
      style={{ cursor: 'pointer', ...rest.style }}
      {...rest}
    >
      {children}
    </a>
  );
};

export default CustomLink;
