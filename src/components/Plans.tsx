
import React from 'react';
import { Check, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';

const plans = [
  {
    id: 1,
    name: 'Plano Essencial',
    price: '99,99',
    description: 'Ideal para microempresas ou empreendedores individuais que buscam serviços básicos de contabilidade.',
    features: [
      {
        text: 'Emissão de até 10 notas fiscais mensais',
        included: true
      },
      {
        text: 'Declaração mensal de impostos',
        included: true
      },
      {
        text: 'Suporte contábil por e-mail',
        included: true
      },
      {
        text: 'Relatório financeiro básico mensal',
        included: true
      },
      {
        text: 'Acompanhamento básico de tributos',
        included: true
      },
      {
        text: 'Consultoria contábil trimestral',
        included: false
      },
      {
        text: 'Otimização fiscal',
        included: false
      },
      {
        text: 'Atendimento personalizado',
        included: false
      }
    ],
    popular: false,
    delay: '0s',
    color: 'bg-neutral-50'
  },
  {
    id: 2,
    name: 'Plano Business',
    price: '269,99',
    description: 'Perfeito para pequenas empresas que necessitam de suporte contábil mais abrangente e relatórios detalhados.',
    features: [
      {
        text: 'Emissão de até 30 notas fiscais mensais',
        included: true
      },
      {
        text: 'Declaração mensal de impostos e encargos trabalhistas',
        included: true
      },
      {
        text: 'Suporte contábil por e-mail e telefone',
        included: true
      },
      {
        text: 'Relatório financeiro detalhado mensal',
        included: true
      },
      {
        text: 'Acompanhamento mensal de tributos',
        included: true
      },
      {
        text: 'Consultoria contábil trimestral',
        included: true
      },
      {
        text: 'Otimização fiscal',
        included: true
      },
      {
        text: 'Atendimento personalizado',
        included: false
      }
    ],
    popular: true,
    delay: '0.1s',
    color: 'bg-amber-50'
  },
  {
    id: 3,
    name: 'Plano Enterprise',
    price: '699,99',
    description: 'Solução completa para empresas que requerem acompanhamento contábil contínuo e consultoria estratégica.',
    features: [
      {
        text: 'Emissão ilimitada de notas fiscais',
        included: true
      },
      {
        text: 'Declaração mensal de impostos e encargos trabalhistas',
        included: true
      },
      {
        text: 'Suporte contábil ilimitado por e-mail, telefone e chat',
        included: true
      },
      {
        text: 'Relatórios financeiros completos mensais e trimestrais',
        included: true
      },
      {
        text: 'Acompanhamento estratégico de tributos',
        included: true
      },
      {
        text: 'Consultoria contábil mensal e planejamento financeiro',
        included: true
      },
      {
        text: 'Otimização fiscal avançada',
        included: true
      },
      {
        text: 'Atendimento personalizado prioritário',
        included: true
      }
    ],
    popular: false,
    delay: '0.2s',
    color: 'bg-neutral-50'
  }
];

const Plans = () => {
  const isMobile = useIsMobile();

  return (
    <section id="plans" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Nossos Planos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Escolha o plano ideal para o seu negócio. Oferecemos soluções contábeis completas 
            para empresas de todos os tamanhos em Fortaleza.
          </p>
        </div>

        <div className={cn(
          "grid gap-8",
          isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        )}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in",
                plan.color,
                plan.popular ? "ring-2 ring-amber-500 scale-105" : "hover:scale-105"
              )}
              style={{ animationDelay: plan.delay }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={cn(
                      "text-sm",
                      feature.included ? "text-gray-700" : "text-gray-400"
                    )}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5585982384438"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2",
                  plan.popular
                    ? "bg-amber-500 hover:bg-amber-600 text-white shadow-lg"
                    : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
                )}
              >
                <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
                Contratar Plano
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-gray-600 mb-4">
            Precisa de algo personalizado? Entre em contato conosco!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-amber-500 hover:text-amber-600 font-semibold transition-colors"
          >
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
