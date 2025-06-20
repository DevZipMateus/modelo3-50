
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingButton = () => {
  const [isPulsing, setIsPulsing] = useState(true);
  const isMobile = useIsMobile();
  
  // Start pulsing effect every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const openWhatsApp = () => {
    window.open('https://wa.me/5585982384438', '_blank', 'noopener,noreferrer');
    setIsPulsing(false); // Stop pulsing when clicked
  };
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-3 right-3' : 'bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8'} z-50`}>
      {/* Main Button - Direct WhatsApp */}
      <button
        onClick={openWhatsApp}
        className={`${isMobile ? 'p-3 w-12 h-12' : 'p-3 sm:p-4 w-12 h-12 sm:w-14 sm:h-14'} rounded-full flex items-center justify-center transition-all duration-300 
          bg-emerald-500 hover:bg-emerald-600 text-white
          ${isPulsing ? 'animate-pulse' : ''}
          transform hover:scale-105 active:scale-95 shadow-lg`}
        aria-label="Abrir WhatsApp"
        style={{
          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
        }}
      >
        <div className={`${isMobile ? 'w-4 h-4' : 'w-4 h-4 sm:w-5 sm:h-5'}`}>
          <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-full h-full object-contain" />
        </div>
      </button>
    </div>
  );
};

export default FloatingButton;
