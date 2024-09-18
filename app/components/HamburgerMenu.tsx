import React, { useState } from 'react';
import { Link } from '@remix-run/react';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-foreground focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            <Link to="/" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100">About</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100">Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
