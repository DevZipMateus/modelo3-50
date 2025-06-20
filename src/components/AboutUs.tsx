
import React from 'react';
import { Heart, Shield, Users, Target, CheckCircle, Clock } from 'lucide-react';
import { siteTexts } from '../config/texts';

const values = [{
  icon: Shield,
  title: siteTexts.about.values[0].title,
  description: siteTexts.about.values[0].description
}, {
  icon: Heart,
  title: siteTexts.about.values[1].title,
  description: siteTexts.about.values[1].description
}, {
  icon: CheckCircle,
  title: siteTexts.about.values[2].title,
  description: siteTexts.about.values[2].description
}, {
  icon: Users,
  title: siteTexts.about.values[3].title,
  description: siteTexts.about.values[3].description
}, {
  icon: Clock,
  title: siteTexts.about.values[4].title,
  description: siteTexts.about.values[4].description
}, {
  icon: Target,
  title: siteTexts.about.values[5].title,
  description: siteTexts.about.values[5].description
}];

const AboutUs = () => {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center w-full mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block bg-amber-100 text-amber-600 font-medium px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            {siteTexts.about.badge}
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 sm:mb-6 px-2">
            {siteTexts.about.title}
          </h2>
          <div className="space-y-3 sm:space-y-4 md:space-y-6 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
            <p>{siteTexts.about.description}</p>
            <p>{siteTexts.about.historyText}</p>
            <p>{siteTexts.about.approachText}</p>
            <p>{siteTexts.about.objectiveText}</p>
            <p className="text-amber-600 font-semibold italic">
              {siteTexts.about.tagline}
            </p>
          </div>
        </div>

        {/* Mission and Vision Section - Full Width */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-neutral-100 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6">{siteTexts.about.missionTitle}</h3>
                <p className="text-neutral-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {siteTexts.about.missionText}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6">{siteTexts.about.visionTitle}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  {siteTexts.about.visionText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section as Cards */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-6 sm:mb-8 md:mb-12 px-2">Nossos Valores em Detalhes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-neutral-100 hover:shadow-md hover:border-amber-200 transition-all duration-300 animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-100 p-2 sm:p-3 rounded-lg inline-block mb-3 sm:mb-4">
                  <value.icon className="text-amber-600" size={20} />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2">{value.title}</h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
