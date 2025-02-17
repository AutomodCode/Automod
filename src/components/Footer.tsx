import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-light py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Automod. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 