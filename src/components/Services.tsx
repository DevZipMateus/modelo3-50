
import React from 'react';
import { FileSpreadsheet, FileCheck, Building2, FileText, Calculator, Users, MapPin, HeadphonesIcon } from 'lucide-react';
import { siteTexts } from '../config/texts';

const services = [
  {
    id: 1,
    title: siteTexts.services.list[0].title,
    description: siteTexts.services.list[0].description,
    icon: Building2,
    delay: '0s'
  },
  {
    id: 2,
    title: siteTexts.services.list[1].title,
    description: siteTexts.services.list[1].description,
    icon: FileCheck,
    delay: '0.1s'
  },
  {
    id: 3,
    title: siteTexts.services.list[2].title,
    description: siteTexts.services.list[2].description,
    icon: FileText,
    delay: '0.2s'
  },
  {
    id: 4,
    title: siteTexts.services.list[3].title,
    description: siteTexts.services.list[3].description,
    icon: Users,
    delay: '0.3s'
  },
  {
    id: 5,
    title: siteTexts.services.list[4].title,
    description: siteTexts.services.list[4].description,
    icon: Calculator,
    delay: '0.4s'
  },
  {
    id: 6,
    title: siteTexts.services.list[5].title,
    description: siteTexts.services.list[5].description,
    icon: MapPin,
    delay: '0.5s'
  },
  {
    id: 7,
    title: siteTexts.services.list[6].title,
    description: siteTexts.services.list[6].description,
    icon: FileSpreadsheet,
    delay: '0.6s'
  },
  {
    id: 8,
    title: siteTexts.services.list[7].title,
    description: siteTexts.services.list[7].description,
    icon: HeadphonesIcon,
    delay: '0.7s'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block bg-amber-100 text-amber-600 font-medium px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            {siteTexts.services.badge}
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4 md:mb-6 px-2">
            {siteTexts.services.title}
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
            {siteTexts.services.description}
          </p>
        </div>
        
        {/* Services Grid - improved responsive layout */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl p-4 sm:p-5 md:p-6 border border-neutral-100 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in group w-full"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-amber-100 group-hover:bg-amber-200 p-2 sm:p-3 md:p-4 rounded-lg inline-block mb-3 sm:mb-4 md:mb-5 transition-colors">
                <service.icon className="text-amber-600" size={20} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-neutral-900 leading-tight hyphens-auto">{service.title}</h3>
              <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed hyphens-auto">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA - improved mobile layout */}
        <div className="text-center px-2">
          <div className="bg-neutral-50 rounded-2xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mb-3 sm:mb-4 leading-tight">
              {siteTexts.services.ctaTitle}
            </h3>
            <p className="text-neutral-600 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
              {siteTexts.services.ctaDescription}
            </p>
            <a 
              href="https://wa.me/5585982384438" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-amber-400 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-md transition-all inline-flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-xs sm:text-sm md:text-base"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="whitespace-nowrap">{siteTexts.services.ctaButton}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
