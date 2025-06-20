
import React from 'react';
import { Heart, Shield, Users, Target, CheckCircle, Clock } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Ética',
    description: 'Atuamos com integridade e responsabilidade em cada serviço prestado.'
  },
  {
    icon: Heart,
    title: 'Comprometimento',
    description: 'Assumimos a contabilidade dos nossos clientes como se fosse nossa.'
  },
  {
    icon: CheckCircle,
    title: 'Clareza',
    description: 'Explicamos o complexo de forma simples e acessível.'
  },
  {
    icon: Users,
    title: 'Empatia',
    description: 'Respeitamos a jornada de cada cliente com escuta ativa e atendimento acolhedor.'
  },
  {
    icon: Clock,
    title: 'Pontualidade',
    description: 'Cumprimos prazos e obrigações com rigor e organização.'
  },
  {
    icon: Target,
    title: 'Proximidade',
    description: 'Mantemos um atendimento direto, humanizado e sempre disponível.'
  }
];

const AboutUs = () => {
  return (
    <section id="about" className="section bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-amber-100 text-amber-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Sobre Nós
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Mariano Contabilidade - Tradição e Confiança em Fortaleza
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Somos um escritório especializado em soluções contábeis para MEIs, pequenas empresas e negócios do Simples Nacional, 
            localizado no coração de Fortaleza. Nossa missão é oferecer não apenas números, mas segurança e tranquilidade 
            para quem empreende.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Nossa Missão</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Oferecer soluções contábeis com seriedade, clareza e acolhimento, contribuindo para o crescimento 
                sustentável de micro e pequenas empresas. Atuar com proximidade e comprometimento, traduzindo o 
                mundo contábil para a linguagem do empreendedor.
              </p>
              
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Nossa Visão</h3>
              <p className="text-neutral-600 leading-relaxed">
                Ser reconhecida como referência em contabilidade humanizada no Ceará, especialmente para MEIs e 
                empresas do Simples Nacional, sendo lembrada pela confiança, excelência e relacionamento próximo 
                com o cliente.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Por que nos escolher?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-full mt-1">
                    <CheckCircle className="text-amber-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Equipe Experiente</h4>
                    <p className="text-neutral-600 text-sm">Profissionais qualificados e em constante atualização</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-full mt-1">
                    <Heart className="text-amber-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Atendimento Humanizado</h4>
                    <p className="text-neutral-600 text-sm">Relacionamento próximo e acolhedor com cada cliente</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-full mt-1">
                    <Shield className="text-amber-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Ambiente Acolhedor</h4>
                    <p className="text-neutral-600 text-sm">Espaço confortável e organizado para receber nossos clientes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-full mt-1">
                    <Target className="text-amber-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Foco em Resultados</h4>
                    <p className="text-neutral-600 text-sm">Organização, transparência e comprometimento com seu sucesso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-neutral-900 mb-12">Nossos Valores</h3>
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

        {/* Differentials */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-neutral-100">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8">Nossos Diferenciais</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">MEI</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Especialistas em MEI</h4>
              <p className="text-neutral-600 text-sm">Conhecimento profundo das necessidades e particularidades dos Microempreendedores Individuais</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-amber-600">SN</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Simples Nacional</h4>
              <p className="text-neutral-600 text-sm">Domínio completo do regime tributário mais utilizado pelas pequenas empresas brasileiras</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="text-amber-600" size={24} />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Linguagem Acessível</h4>
              <p className="text-neutral-600 text-sm">Traduzimos termos técnicos para uma comunicação clara e próxima da sua realidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
