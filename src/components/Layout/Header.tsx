
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import { siteTexts } from '../../config/texts';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 sm:py-3' : 'bg-white py-3 sm:py-4'}`}>
      {/* Top Bar - Hidden on very small screens, shown on sm+ */}
      <div className="container-custom px-4 sm:px-6">
        <div className="hidden sm:flex flex-col md:flex-row md:justify-between items-center mb-2 md:mb-2">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-6 text-xs sm:text-sm text-gray-600 mb-2 md:mb-0 items-center">
            <a href={`mailto:${siteTexts.header.email}`} className="flex items-center hover:text-amber-500 transition-colors duration-300 mb-1 sm:mb-0">
              <Mail size={14} className="mr-1 sm:mr-2 flex-shrink-0" />
              <span className="truncate">{siteTexts.header.email}</span>
            </a>
            <a href={`tel:+55${siteTexts.header.phone.replace(/\D/g, '')}`} className="flex items-center hover:text-amber-500 transition-colors duration-300 whitespace-nowrap">
              <Phone size={14} className="mr-1 sm:mr-2 flex-shrink-0" />
              {siteTexts.header.phone}
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-3 sm:space-x-4">
            <a href="https://www.instagram.com/marianocontabilidades?igsh=Ynhwa2d4ZDh0MnFu" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-500 transition-colors duration-300">
              <Instagram size={16} />
            </a>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-500 transition-all duration-300 transform hover:scale-[1.02] truncate max-w-[200px] sm:max-w-none">
            {siteTexts.header.logo}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link to="/" className="nav-link text-sm lg:text-base">{siteTexts.header.nav.home}</Link>
            <a href="#about" className="nav-link text-sm lg:text-base">{siteTexts.header.nav.about}</a>
            <a href="#services" className="nav-link text-sm lg:text-base">{siteTexts.header.nav.services}</a>
            <a href="#contact" className="nav-link text-sm lg:text-base">{siteTexts.header.nav.contact}</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 hover:text-amber-500 focus:outline-none p-1" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out bg-white border-t shadow-sm`}>
        <div className="container-custom py-4 px-4 sm:px-6 flex flex-col space-y-3">
          {/* Mobile Contact Info */}
          <div className="flex flex-col space-y-2 text-xs text-gray-600 pb-3 border-b border-gray-100">
            <a href={`mailto:${siteTexts.header.email}`} className="flex items-center hover:text-amber-500 transition-colors duration-300">
              <Mail size={12} className="mr-2 flex-shrink-0" />
              <span className="truncate">{siteTexts.header.email}</span>
            </a>
            <a href={`tel:+55${siteTexts.header.phone.replace(/\D/g, '')}`} className="flex items-center hover:text-amber-500 transition-colors duration-300">
              <Phone size={12} className="mr-2 flex-shrink-0" />
              {siteTexts.header.phone}
            </a>
          </div>
          
          {/* Mobile Navigation Links */}
          <Link to="/" className="px-3 py-2 text-gray-700 hover:text-amber-500 hover:bg-gray-50 rounded-md transition-colors text-sm" onClick={toggleMobileMenu}>{siteTexts.header.nav.home}</Link>
          <a href="#about" className="px-3 py-2 text-gray-700 hover:text-amber-500 hover:bg-gray-50 rounded-md transition-colors text-sm" onClick={toggleMobileMenu}>{siteTexts.header.nav.about}</a>
          <a href="#services" className="px-3 py-2 text-gray-700 hover:text-amber-500 hover:bg-gray-50 rounded-md transition-colors text-sm" onClick={toggleMobileMenu}>{siteTexts.header.nav.services}</a>
          <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-amber-500 hover:bg-gray-50 rounded-md transition-colors text-sm" onClick={toggleMobileMenu}>{siteTexts.header.nav.contact}</a>
          
          {/* Mobile Social Media */}
          <div className="flex justify-center pt-3 border-t border-gray-100">
            <a href="https://www.instagram.com/marianocontabilidades?igsh=Ynhwa2d4ZDh0MnFu" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-500 transition-colors duration-300 p-2">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
