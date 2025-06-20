
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { siteTexts } from '../config/texts';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-12 md:pb-16 lg:pb-20 bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-amber-100 text-amber-600 font-medium px-3 py-1.5 sm:px-4 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 animate-fade-in">
            {siteTexts.hero.badge}
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            {siteTexts.hero.title}<br />
            <span className="text-amber-400">{siteTexts.hero.titleHighlight}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-amber-200 mb-8 sm:mb-10 animate-fade-in max-w-4xl mx-auto leading-relaxed px-2" style={{
            animationDelay: '0.2s'
          }}>
            {siteTexts.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in px-4 sm:px-0" style={{
            animationDelay: '0.3s'
          }}>
            <a 
              href="https://wa.me/5585982384438" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-all flex items-center justify-center gap-2 sm:gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>{siteTexts.hero.whatsappButton}</span>
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-all flex items-center justify-center gap-2 font-semibold backdrop-blur-sm text-sm sm:text-base"
            >
              {siteTexts.hero.servicesButton}
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-amber-200/80 animate-fade-in px-4" style={{
            animationDelay: '0.4s'
          }}>
            {siteTexts.hero.trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                <span className="text-xs sm:text-sm whitespace-nowrap">{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
