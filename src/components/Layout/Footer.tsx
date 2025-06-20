
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { siteTexts } from '../../config/texts';

const Footer = () => {
  return (
    <footer className="bg-black text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 break-words">{siteTexts.footer.contact.title}</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start min-w-0">
                <Phone className="mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-sm sm:text-base break-words min-w-0">{siteTexts.footer.contact.phone}</span>
              </li>
              <li className="flex items-start min-w-0">
                <Mail className="mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-sm sm:text-base break-all min-w-0">{siteTexts.footer.contact.email}</span>
              </li>
              <li className="flex items-start min-w-0">
                <MapPin className="mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-sm sm:text-base break-words min-w-0">{siteTexts.footer.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Technical Responsibles */}
          <div className="animate-fade-in min-w-0" style={{ animationDelay: '0.05s' }}>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 break-words">{siteTexts.footer.technicalResponsibles.title}</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="min-w-0">
                <p className="font-medium text-amber-400 text-sm sm:text-base break-words">{siteTexts.footer.technicalResponsibles.mariano}</p>
                <p className="text-xs sm:text-sm text-white/80 break-words">{siteTexts.footer.technicalResponsibles.marianoCrc}</p>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-amber-400 text-sm sm:text-base break-words">{siteTexts.footer.technicalResponsibles.paloma}</p>
                <p className="text-xs sm:text-sm text-white/80 break-words">{siteTexts.footer.technicalResponsibles.palomaCrc}</p>
              </div>
              <div className="mt-3 sm:mt-4 min-w-0">
                <p className="text-xs sm:text-sm text-white/80 break-words">{siteTexts.footer.technicalResponsibles.cnpj}</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in min-w-0" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 break-words">{siteTexts.footer.quickLinks.title}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300 inline-block text-sm sm:text-base break-words">{siteTexts.footer.quickLinks.home}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors duration-300 inline-block text-sm sm:text-base break-words">{siteTexts.footer.quickLinks.about}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors duration-300 inline-block text-sm sm:text-base break-words">{siteTexts.footer.quickLinks.services}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors duration-300 inline-block text-sm sm:text-base break-words">{siteTexts.footer.quickLinks.contact}</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="animate-fade-in min-w-0" style={{ animationDelay: '0.15s' }}>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 break-words">{siteTexts.footer.socialMedia.title}</h3>
            <div className="flex space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <a href="https://www.instagram.com/marianocontabilidades?igsh=Ynhwa2d4ZDh0MnFu" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-amber-400/80 hover:text-black transition-colors duration-300 p-2 rounded-full flex-shrink-0">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 sm:mt-10 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-white/70">
          <p className="break-words">© {new Date().getFullYear()} {siteTexts.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
