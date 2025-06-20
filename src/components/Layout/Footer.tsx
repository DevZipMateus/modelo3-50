
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { siteTexts } from '../../config/texts';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">{siteTexts.footer.contact.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>{siteTexts.footer.contact.phone}</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>{siteTexts.footer.contact.email}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>{siteTexts.footer.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Technical Responsibles */}
          <div className="animate-fade-in" style={{ animationDelay: '0.05s' }}>
            <h3 className="text-xl font-semibold mb-6">{siteTexts.footer.technicalResponsibles.title}</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-amber-400">{siteTexts.footer.technicalResponsibles.mariano}</p>
                <p className="text-sm text-white/80">{siteTexts.footer.technicalResponsibles.marianoCrc}</p>
              </div>
              <div>
                <p className="font-medium text-amber-400">{siteTexts.footer.technicalResponsibles.paloma}</p>
                <p className="text-sm text-white/80">{siteTexts.footer.technicalResponsibles.palomaCrc}</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-white/80">{siteTexts.footer.technicalResponsibles.cnpj}</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">{siteTexts.footer.quickLinks.title}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300 inline-block">{siteTexts.footer.quickLinks.home}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors duration-300 inline-block">{siteTexts.footer.quickLinks.about}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors duration-300 inline-block">{siteTexts.footer.quickLinks.services}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors duration-300 inline-block">{siteTexts.footer.quickLinks.contact}</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <h3 className="text-xl font-semibold mb-6">{siteTexts.footer.socialMedia.title}</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/marianocontabilidades?igsh=Ynhwa2d4ZDh0MnFu" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-amber-400/80 hover:text-black transition-colors duration-300 p-2 rounded-full">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} {siteTexts.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
