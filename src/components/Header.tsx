import React, { useState } from 'react';
import { ShoppingBag, Menu, X, MapPin, Phone, User, LogOut } from 'lucide-react';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [cartCount, setCartCount] = useState(0);

  const handleLogin = (email: string, password: string) => {
    // Simulate login
    setUser({ name: 'John Doe', email });
  };

  const handleSignup = (userData: any) => {
    // Simulate signup
    setUser({ name: userData.name, email: userData.email });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-amber-800">
                <MapPin className="w-4 h-4 mr-1" />
                <span>24 Simrole,  Indore ,  Madhay Pradesh</span>
              </div>
              <div className="flex items-center text-amber-800">
                <Phone className="w-4 h-4 mr-1" />
                <span>(555) 123-CAKE</span>
              </div>
            </div>
            <div className="text-amber-800">
              Open Daily: 6:00 AM - 8:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">🥖</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">APNA THIKANA</h1>
                <p className="text-sm text-amber-600">APNA THIKANA</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Contact</a>

              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
                >
                  Login / Sign Up
                </button>
              )}

              <button className="flex items-center bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Cart ({cartCount})
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-amber-600 font-medium">Home</a>
                <a href="#products" className="text-gray-700 hover:text-amber-600 font-medium">Products</a>
                <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium">About</a>
                <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium">Contact</a>

                {user ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{user.name}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="text-gray-700 hover:text-amber-600 font-medium w-full text-left"
                  >
                    Login / Sign Up
                  </button>
                )}

                <button className="flex items-center justify-center bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors w-full">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Cart ({cartCount})
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />
    </>
  );
};

export default Header;