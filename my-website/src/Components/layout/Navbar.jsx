import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Stethoscope, User, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth.jsx';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { user, isAuthenticated, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSwitchToRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-full">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Dr. Samarpita Gaba</h1>
              <p className="text-xs text-gray-600">Dental Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm">Call Now</span>
            </a>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/appointments"
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Appointment</span>
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{user?.firstName}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link to="/patient-portal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg">
                      Patient Portal
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg flex items-center space-x-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setShowRegisterModal(true)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <User className="h-4 w-4" />
                  <span>Sign Up</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-gray-700 px-3 py-2">
                  <Phone className="h-4 w-4" />
                  <span>Call: +1 234 567 890</span>
                </a>
                
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/appointments"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-3 rounded-lg"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book Appointment</span>
                    </Link>
                    <Link
                      to="/patient-portal"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center space-x-2 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-100"
                    >
                      <User className="h-4 w-4" />
                      <span>Patient Portal</span>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-center space-x-2 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setShowLoginModal(true);
                        setIsOpen(false);
                      }}
                      className="w-full text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-100"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        setShowRegisterModal(true);
                        setIsOpen(false);
                      }}
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-3 rounded-lg"
                    >
                      <User className="h-4 w-4" />
                      <span>Sign Up</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={handleSwitchToRegister}
      />

      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </motion.nav>
  );
};

export default Navbar;