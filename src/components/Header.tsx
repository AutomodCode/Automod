import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full bg-primary/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary-light">
            Automod
          </a>
          <div className="flex gap-6">
            <a href="/contact" className="text-primary-light hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 