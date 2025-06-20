
import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { siteTexts } from '../config/texts';

const testimonials = siteTexts.testimonials.list.map((testimonial, index) => ({
  id: index + 1,
  name: testimonial.name,
  position: testimonial.position,
  content: testimonial.content,
  rating: 5
}));

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            {siteTexts.testimonials.badge}
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
            {siteTexts.testimonials.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
            {siteTexts.testimonials.description}
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div 
            className="relative bg-white rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm animate-fade-in border border-gray-100"
            key={testimonials[activeIndex].id}
          >
            {/* Quotation Mark */}
            <div className="absolute -top-2 sm:-top-4 md:-top-6 left-4 sm:left-6 md:left-8 text-2xl sm:text-4xl md:text-6xl text-corporate-blue/20">"</div>
            
            {/* Content */}
            <div className="text-center">
              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm sm:text-base md:text-lg italic mb-4 sm:mb-6 leading-relaxed px-2 hyphens-auto">
                "{testimonials[activeIndex].content}"
              </p>
              
              {/* Author Info */}
              <div className="flex flex-col items-center">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 text-center">{testimonials[activeIndex].name}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 text-center">{testimonials[activeIndex].position}</p>
                
                {/* Rating */}
                <div className="flex justify-center">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-3 h-3 sm:w-4 sm:h-4" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-3 sm:space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-corporate-blue/10 text-gray-600 hover:text-corporate-blue transition-colors duration-300 flex-shrink-0"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={14} />
            </button>
            
            {/* Indicator Dots */}
            <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto max-w-xs">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                    activeIndex === index ? 'bg-corporate-blue w-4 sm:w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-corporate-blue/10 text-gray-600 hover:text-corporate-blue transition-colors duration-300 flex-shrink-0"
              aria-label="Next testimonial"
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
