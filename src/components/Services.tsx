
import React from 'react';
import { FileSpreadsheet, FileCheck, Building2, FileText, Calculator, Users, MapPin, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Abertura de Empresas',
    description: 'Abertura e regularização de empresas com toda documentação necessária e orientação completa.',
    icon: Building2,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Imposto de Renda',
    description: 'Declaração do Imposto de Renda para Pessoa Física e Jurídica com segurança e agilidade.',
    icon: FileCheck,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Notas Fiscais',
    description: 'Emissão de notas fiscais e cumprimento de todas as obrigações mensais da sua empresa.',
    icon: FileText,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Folha de Pagamento',
    description: 'Folha de pagamento completa e obrigações trabalhistas sempre em dia.',
    icon: Users,
    delay: '0.3s'
  },
  {
    id: 5,
    title: 'Consultoria MEI',
    description: 'Consultoria especializada para MEI e microempresas com linguagem simples e acessível.',
    icon: Calculator,
    delay: '0.4s'
  },
  {
    id: 6,
    title: 'Endereço Fiscal',
    description: 'Endereço fiscal e escritório virtual para sua empresa com toda segurança legal.',
    icon: MapPin,
    delay: '0.5s'
  },
  {
    id: 7,
    title: 'Contabilidade Geral',
    description: 'Serviços contábeis completos com organização, transparência e proximidade.',
    icon: FileSpreadsheet,
    delay: '0.6s'
  },
  {
    id: 8,
    title: 'Atendimento Personalizado',
    description: 'Atendimento presencial e personalizado, traduzindo o complexo para linguagem simples.',
    icon: HeadphonesIcon,
    delay: '0.7s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-amber-100 text-amber-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Soluções contábeis completas para MEI e pequenas empresas
          </h2>
          <p className="text-neutral-600 text-lg">
            Oferecemos suporte completo para que você possa focar no crescimento do seu negócio, 
            enquanto cuidamos de toda a parte burocrática com clareza e acolhimento.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl p-6 border border-neutral-100 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in group"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-amber-100 group-hover:bg-amber-200 p-4 rounded-lg inline-block mb-5 transition-colors">
                <service.icon className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">{service.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-neutral-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Especialistas em MEI e Simples Nacional
            </h3>
            <p className="text-neutral-600 mb-6">
              Traduzimos o universo contábil para uma linguagem simples, acessível e próxima da sua realidade.
            </p>
            <a 
              href="https://wa.me/5585982384438" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-neutral-800 text-amber-400 px-8 py-4 rounded-md transition-all inline-flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Solicite seu Orçamento</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
