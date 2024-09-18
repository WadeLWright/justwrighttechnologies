import React, { useState } from 'react';
import { Link } from '@remix-run/react';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={toggleMenu}
        className="text-foreground focus:outline-none p-2 bg-gray-200 rounded-md hover:bg-gray-300"
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
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
