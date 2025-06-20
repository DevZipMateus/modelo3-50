
import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Charles Nobre Franco',
    position: '@suagaragemoficial',
    content: 'Desde 2013, a equipe da Mariano Contabilidade tem sido uma parceira fundamental na minha jornada. Sou muito grato pelo profissionalismo, dedicação e compromisso com que sempre conduziram tudo. Foram anos de confiança, crescimento e muito trabalho — e saber que posso contar com vocês faz toda a diferença. Obrigado por estarem sempre presentes com atenção e excelência. Que nossa parceria continue rendendo muitos frutos!',
    rating: 5
  },
  {
    id: 2,
    name: 'Tatiano Ribeiro',
    position: '@ribeiromoveis_projetados',
    content: 'Estou completamente satisfeito com o serviço de contabilidade que recebi. Desde o início, a equipe foi profissional, atenciosa e extremamente competente. Esclareceram todas as minhas dúvidas com paciência, me orientaram com excelência sobre finanças e planejamento, e contribuíram diretamente para a organização e o crescimento da minha empresa. A agilidade e a precisão no atendimento me passaram muita confiança. Recomendo a quem busca um serviço contábil sério, transparente e comprometido.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ciro Mariano',
    position: '@profciromariano',
    content: 'Comecei minha vida profissional na Mariano Contabilidade e foi lá que construí a base que me levou até onde estou hoje. Aprendi muito sobre Departamento Pessoal e ganhei experiência que me abriu portas. Hoje atuo na área de educação, formando novos profissionais, e sou muito grato por tudo que vivi nesse início. A Mariano foi mais que um primeiro emprego — foi o início de uma trajetória com propósito.',
    rating: 5
  },
  {
    id: 4,
    name: 'Noeliza Almeida',
    position: '@hojepodece',
    content: 'Escolher a Mariano Contabilidade foi uma das melhores decisões que já tomei, me orientaram de forma clara e objetiva e dentro da legalidade. Profissionais atenciosos, comprometidos e sempre disponíveis para tirar dúvidas e ajudar.',
    rating: 5
  },
  {
    id: 5,
    name: 'Camila Mariane',
    position: '@marielasoficial',
    content: 'Com a Mariano contabilidade finalmente consegui colocar em ordem as questões financeiras da empresa, me salvou, super de confiança!!',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 text-lg">
            Conheça a experiência de quem já utiliza nossos serviços e confia em nossa expertise.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div 
            className="relative bg-white rounded-xl p-8 md:p-10 shadow-sm animate-fade-in border border-gray-100"
            key={testimonials[activeIndex].id}
          >
            {/* Quotation Mark */}
            <div className="absolute -top-6 left-8 text-6xl text-corporate-blue/20">"</div>
            
            {/* Content */}
            <div className="text-center">
              {/* Testimonial Text */}
              <p className="text-gray-600 text-lg italic mb-6">
                "{testimonials[activeIndex].content}"
              </p>
              
              {/* Author Info */}
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold text-gray-900">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-600 mb-2">{testimonials[activeIndex].position}</p>
                
                {/* Rating */}
                <div className="flex justify-center">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-corporate-blue/10 text-gray-600 hover:text-corporate-blue transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            {/* Indicator Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-corporate-blue w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-corporate-blue/10 text-gray-600 hover:text-corporate-blue transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
