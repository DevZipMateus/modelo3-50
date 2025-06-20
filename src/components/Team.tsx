
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { siteTexts } from '../config/texts';

const team = [{
  id: 1,
  name: siteTexts.team.members[0].name,
  role: siteTexts.team.members[0].role,
  sector: siteTexts.team.members[0].sector,
  description: siteTexts.team.members[0].description,
  image: '/lovable-uploads/bc63a39a-924f-43fc-9078-a01f2365cab3.png',
  delay: '0s'
}, {
  id: 2,
  name: siteTexts.team.members[1].name,
  role: siteTexts.team.members[1].role,
  sector: siteTexts.team.members[1].sector,
  description: siteTexts.team.members[1].description,
  image: '/lovable-uploads/7b52a53e-93b7-472e-89c7-1b9725d46d97.png',
  delay: '0.1s'
}, {
  id: 3,
  name: siteTexts.team.members[2].name,
  role: siteTexts.team.members[2].role,
  sector: siteTexts.team.members[2].sector,
  description: siteTexts.team.members[2].description,
  image: '/lovable-uploads/6d047fd0-96c2-4501-8383-f3ccea86bf87.png',
  delay: '0.2s'
}, {
  id: 4,
  name: siteTexts.team.members[3].name,
  role: siteTexts.team.members[3].role,
  sector: siteTexts.team.members[3].sector,
  description: siteTexts.team.members[3].description,
  image: '/lovable-uploads/becc6546-a49a-4db9-8c41-abd0009fac90.png',
  delay: '0.3s'
}, {
  id: 5,
  name: siteTexts.team.members[4].name,
  role: siteTexts.team.members[4].role,
  sector: siteTexts.team.members[4].sector,
  description: siteTexts.team.members[4].description,
  image: '/lovable-uploads/f2cd93de-eb75-43bf-afb2-326afacd66c2.png',
  delay: '0.4s'
}];

const Team = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 px-4 sm:px-6">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-3 py-1.5 sm:px-4 rounded-full text-xs sm:text-sm mb-4">
            {siteTexts.team.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            {siteTexts.team.title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            {siteTexts.team.description}
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {team.map(member => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in mx-auto max-w-sm sm:max-w-none" 
              style={{ animationDelay: member.delay }}
            >
              <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              
              <div className="p-4 sm:p-6">
                <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 leading-tight">{member.name}</p>
                <p className="text-corporate-blue mb-2 font-medium text-sm sm:text-base">{member.role}</p>
                <p className="text-orange-500 mb-3 font-medium text-xs sm:text-sm leading-tight">{member.sector}</p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
