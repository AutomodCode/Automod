import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-primary text-primary-light overflow-hidden">
      {/* Header */}
      <header className="fixed w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 hover-scale">
              <img 
                src="/images/icon.png" 
                alt="AutoMod AI Icon" 
                className="w-20 h-20 object-contain"
              />
              <img 
                src="/images/logo_name.png" 
                alt="AutoMod AI Logo" 
                className="h-8 object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-accent transition-colors duration-300 hover-scale">Home</Link>
              <Link to="/#features" className="hover:text-accent transition-colors duration-300 hover-scale">Features</Link>
              <Link to="/#pricing" className="hover:text-accent transition-colors duration-300 hover-scale">Pricing</Link>
              <Link to="/#contact" className="hover:text-accent transition-colors duration-300 hover-scale">Contact</Link>
              <Link 
                to="/dashboard"
                className="inline-block bg-accent hover:bg-accent-bright px-8 py-2 transition-all duration-300 hover-scale relative"
                style={{
                  clipPath: 'polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)',
                }}
              >
                <span className="font-semibold relative z-10">Dashboard</span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-secondary animate-slideDown">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/" className="block hover:text-accent transition-colors duration-300">Home</Link>
              <Link to="/#features" className="block hover:text-accent transition-colors duration-300">Features</Link>
              <Link to="/#pricing" className="block hover:text-accent transition-colors duration-300">Pricing</Link>
              <Link to="/#contact" className="block hover:text-accent transition-colors duration-300">Contact</Link>
              <Link 
                to="/dashboard"
                className="block w-full bg-accent hover:bg-accent-bright px-8 py-2 transition-all duration-300 hover-scale relative"
                style={{
                  clipPath: 'polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)',
                }}
              >
                <span className="font-semibold text-center relative z-10">Dashboard</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative py-12">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-fixed" 
          style={{
            backgroundImage: 'url("/images/footerbgnewnew.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(0px)',
            transform: 'scale(1.1)' // Prevents blur edges from showing
          }}
        />
        
        {/* Content Layer with Glassmorphism */}
        <div className="relative z-10">
          <div className="container mx-auto px-20">
            <div className="backdrop-blur-md bg-secondary/30 border border-gray-600/50 rounded-xl p-10">
              <div className="grid md:grid-cols-2 gap-20">
                {/* Logo and Elevator Pitch */}
                <div className="max-w-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <img 
                      src="/images/logo.png" 
                      alt="AutoMod AI Logo"
                      className="w-48 h-auto object-contain"
                    />
                  </div>
                  <p className="text-primary-light text-justify">
                    AutoMod is your go-to platform for car customization, offering expert<br></br> 
                    guides, premium parts, and professional services to upgrade performance.
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex flex-col items-end max-w-xl">
                  <h4 className="font-semibold mb-6 text-3xl">Follow Us</h4>
                  <div className="flex space-x-8">
                    <a href="https://www.facebook.com/automodAI/" 
                      className="text-primary-light hover:text-accent transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="https://x.com/automodai" 
                      className="text-primary-light hover:text-accent transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://www.pinterest.com/automodAI/" 
                      className="text-primary-light hover:text-accent transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.521-.995-.521-1.597 0-1.544 1.169-3.038 3.161-3.038 1.72 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.205-2.201 3.205-.687 0-1.201-.568-1.036-1.265.197-.833.58-1.73.58-2.331 0-.537-.288-.986-.89-.986-.705 0-1.269.73-1.269 1.708 0 .623.211 1.044.211 1.044s-.694 2.934-.821 3.479c-.142.605-.086 1.454-.025 2.008-2.603-1.02-4.442-3.57-4.442-6.555 0-3.866 3.135-7 7-7s7 3.134 7 7-3.135 7-7 7z"/>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@Automod-AI" 
                      className="text-primary-light hover:text-accent transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Footer Bottom */}
              <div className="border-t border-gray-600/50 mt-12 pt-8 text-primary-light">
                <div className="flex justify-between items-center">
                  <div>
                    <p>&copy; {new Date().getFullYear()} AutoMod AI. All rights reserved.</p>
                  </div>
                  <div className="flex space-x-6 mr-10">
                    <Link 
                      to="/privacy-policy" 
                      className="hover:text-accent transition-colors duration-300"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      to="/terms-and-conditions" 
                      className="hover:text-accent transition-colors duration-300"
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 