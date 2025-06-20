
import React from 'react';
import { Heart, Shield, Users, Target, CheckCircle, Clock } from 'lucide-react';
import { siteTexts } from '../config/texts';

const values = [
  {
    icon: Shield,
    title: siteTexts.about.values[0].title,
    description: siteTexts.about.values[0].description
  },
  {
    icon: Heart,
    title: siteTexts.about.values[1].title,
    description: siteTexts.about.values[1].description
  },
  {
    icon: CheckCircle,
    title: siteTexts.about.values[2].title,
    description: siteTexts.about.values[2].description
  },
  {
    icon: Users,
    title: siteTexts.about.values[3].title,
    description: siteTexts.about.values[3].description
  },
  {
    icon: Clock,
    title: siteTexts.about.values[4].title,
    description: siteTexts.about.values[4].description
  },
  {
    icon: Target,
    title: siteTexts.about.values[5].title,
    description: siteTexts.about.values[5].description
  }
];

const AboutUs = () => {
  return (
    <section id="about" className="section bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-amber-100 text-amber-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            {siteTexts.about.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            {siteTexts.about.title}
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-6">
            {siteTexts.about.description}
          </p>
          <p className="text-neutral-600 text-lg leading-relaxed mb-6">
            {siteTexts.about.historyText}
          </p>
          <p className="text-neutral-600 text-lg leading-relaxed mb-6">
            {siteTexts.about.approachText}
          </p>
          <p className="text-neutral-600 text-lg leading-relaxed mb-6">
            {siteTexts.about.objectiveText}
          </p>
          <p className="text-amber-600 font-semibold text-lg italic">
            {siteTexts.about.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">{siteTexts.about.missionTitle}</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {siteTexts.about.missionText}
              </p>
              
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">{siteTexts.about.visionTitle}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {siteTexts.about.visionText}
              </p>
            </div>
          </div>

          {/* Right Content - Values Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">{siteTexts.about.valuesTitle}</h3>
              <div className="space-y-4">
                {siteTexts.about.values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full mt-1">
                      <CheckCircle className="text-amber-600" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">{value.title}</h4>
                      <p className="text-neutral-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section as Cards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-neutral-900 mb-12">Nossos Valores em Detalhes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md hover:border-amber-200 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4">
                  <value.icon className="text-amber-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">{value.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
