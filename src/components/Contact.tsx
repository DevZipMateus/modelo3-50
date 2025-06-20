
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { siteTexts } from '../config/texts';

const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="section bg-neutral-100">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-amber-100 text-amber-600 font-medium px-3 py-1.5 sm:px-4 rounded-full text-xs sm:text-sm mb-4">
            {siteTexts.contact.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
            {siteTexts.contact.title}
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg md:text-xl leading-relaxed">
            {siteTexts.contact.description}
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in lg:col-span-1">
            <div className="bg-emerald-500 p-4 sm:p-6 flex items-center justify-center">
              <img src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" alt="WhatsApp" className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">{siteTexts.contact.whatsapp.title}</h3>
              <p className="text-neutral-600 mb-4 text-sm sm:text-base">{siteTexts.contact.whatsapp.description}</p>
              <a href="https://wa.me/5585982384438" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-neutral-800 text-amber-400 px-4 sm:px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm sm:text-base">
                <span>{siteTexts.contact.whatsapp.button}</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in lg:col-span-1" style={{
            animationDelay: '0.2s'
          }}>
            <div className="bg-neutral-800 p-4 sm:p-6 flex items-center justify-center">
              <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400" />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">{siteTexts.contact.email.title}</h3>
              <p className="text-neutral-600 mb-4 text-sm sm:text-base">{siteTexts.contact.email.description}</p>
              <a href="mailto:marianocontabilidade@hotmail.com" className="bg-black hover:bg-neutral-800 text-amber-400 px-4 sm:px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm sm:text-base break-all">
                <span className="truncate max-w-full">{siteTexts.contact.email.address}</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-neutral-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                <MapPin className="text-neutral-700" size={isMobile ? 20 : 24} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">{siteTexts.contact.address.title}</h4>
                <p className="text-neutral-600 whitespace-pre-line text-sm sm:text-base leading-relaxed">{siteTexts.contact.address.full}</p>
              </div>
            </div>
            
            {/* Working Hours */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-4">{siteTexts.contact.hours.title}</h4>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-neutral-600 text-sm sm:text-base">{siteTexts.contact.hours.weekdays}</span>
                  <span className="font-medium text-neutral-900 text-sm sm:text-base">{siteTexts.contact.hours.weekdaysTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
