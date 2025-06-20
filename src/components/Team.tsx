
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { siteTexts } from '../config/texts';

const team = [{
  id: 1,
  name: siteTexts.team.members[0].name,
  role: siteTexts.team.members[0].role,
  crc: siteTexts.team.members[0].crc,
  sector: siteTexts.team.members[0].sector,
  description: siteTexts.team.members[0].description,
  image: '/lovable-uploads/bc63a39a-924f-43fc-9078-a01f2365cab3.png',
  delay: '0s'
}, {
  id: 2,
  name: siteTexts.team.members[1].name,
  role: siteTexts.team.members[1].role,
  crc: siteTexts.team.members[1].crc,
  sector: siteTexts.team.members[1].sector,
  description: siteTexts.team.members[1].description,
  image: '/lovable-uploads/7b52a53e-93b7-472e-89c7-1b9725d46d97.png',
  delay: '0.1s'
}, {
  id: 3,
  name: siteTexts.team.members[2].name,
  role: siteTexts.team.members[2].role,
  crc: siteTexts.team.members[2].crc,
  sector: siteTexts.team.members[2].sector,
  description: siteTexts.team.members[2].description,
  image: '/lovable-uploads/6d047fd0-96c2-4501-8383-f3ccea86bf87.png',
  delay: '0.2s'
}, {
  id: 4,
  name: siteTexts.team.members[3].name,
  role: siteTexts.team.members[3].role,
  crc: siteTexts.team.members[3].crc,
  sector: siteTexts.team.members[3].sector,
  description: siteTexts.team.members[3].description,
  image: '/lovable-uploads/becc6546-a49a-4db9-8c41-abd0009fac90.png',
  delay: '0.3s'
}, {
  id: 5,
  name: siteTexts.team.members[4].name,
  role: siteTexts.team.members[4].role,
  crc: siteTexts.team.members[4].crc,
  sector: siteTexts.team.members[4].sector,
  description: siteTexts.team.members[4].description,
  image: '/lovable-uploads/f2cd93de-eb75-43bf-afb2-326afacd66c2.png',
  delay: '0.4s'
}];

const Team = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            {siteTexts.team.badge}
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
            {siteTexts.team.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2">
            {siteTexts.team.description}
          </p>
        </div>
        
        {/* Team Grid - responsive layout with proper spacing */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center">
          {team.map(member => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in w-full max-w-xs sm:max-w-sm md:max-w-none flex flex-col" 
              style={{ animationDelay: member.delay }}
            >
              <div className="relative overflow-hidden aspect-[3/4] flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" 
                />
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 flex-1 flex flex-col">
                <div className="mb-3 sm:mb-4 text-center flex-1">
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight">
                    {member.name}
                  </p>
                  <p className="text-corporate-blue font-medium text-xs sm:text-sm md:text-base mb-1">
                    {member.role}
                  </p>
                  {member.crc && (
                    <p className="text-corporate-blue font-medium text-xs sm:text-sm md:text-base mb-1">
                      {member.crc}
                    </p>
                  )}
                  <p className="text-orange-500 mt-1 sm:mt-2 font-medium text-xs sm:text-sm leading-tight">
                    {member.sector}
                  </p>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-center mt-auto">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
