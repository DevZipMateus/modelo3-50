
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { siteTexts } from '../config/texts';

const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="section bg-neutral-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-amber-100 text-amber-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            {siteTexts.contact.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            {siteTexts.contact.title}
          </h2>
          <p className="text-neutral-600 text-lg">
            {siteTexts.contact.description}
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
            <div className="bg-emerald-500 p-6 flex items-center justify-center px-[30px]">
              <img src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" alt="WhatsApp" className="w-16 h-16" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{siteTexts.contact.whatsapp.title}</h3>
              <p className="text-neutral-600 mb-4">{siteTexts.contact.whatsapp.description}</p>
              <a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-neutral-800 text-amber-400 px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium">
                <span>{siteTexts.contact.whatsapp.button}</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            <div className="bg-neutral-800 p-6 flex items-center justify-center">
              <Mail className="w-16 h-16 text-amber-400" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{siteTexts.contact.email.title}</h3>
              <p className="text-neutral-600 mb-4">{siteTexts.contact.email.description}</p>
              <a href="mailto:contato@contabilidade.com" className="bg-black hover:bg-neutral-800 text-amber-400 px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium">
                <span>{siteTexts.contact.email.address}</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-neutral-100 p-3 rounded-full mr-4 flex-shrink-0">
                <MapPin className="text-neutral-700" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">{siteTexts.contact.address.title}</h4>
                <p className="text-neutral-600 whitespace-pre-line">{siteTexts.contact.address.full}</p>
              </div>
            </div>
            
            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-4">{siteTexts.contact.hours.title}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-600">{siteTexts.contact.hours.weekdays}</span>
                  <span className="font-medium text-neutral-900">{siteTexts.contact.hours.weekdaysTime}</span>
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
