import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  priceDetail: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Básico',
    price: 'Gratis',
    priceDetail: 'Para siempre',
    description: 'Perfecto para individuos que comienzan o prueban ExamenConia.',
    features: [
      { text: '3 evaluaciones al mes', included: true },
      { text: 'Tipos de preguntas limitados', included: true },
      { text: 'Soporte estándar', included: true },
      { text: 'Analíticas básicas', included: false },
      { text: 'Generación de metadatos SEO', included: false },
    ],
    cta: 'Comenzar Gratis',
  },
  {
    name: 'Profesional',
    price: '$19',
    priceDetail: 'por mes',
    description: 'Ideal para profesionales y equipos pequeños que necesitan más potencia.',
    features: [
      { text: 'Evaluaciones ilimitadas', included: true },
      { text: 'Todos los tipos de preguntas', included: true },
      { text: 'Soporte prioritario', included: true },
      { text: 'Analíticas avanzadas', included: true },
      { text: 'Generación de metadatos SEO', included: true },
    ],
    cta: 'Elegir Plan Pro',
    isPopular: true,
  },
  {
    name: 'Empresarial',
    price: 'Personalizado',
    priceDetail: 'Contáctanos',
    description: 'Soluciones a medida para grandes organizaciones y necesidades específicas.',
    features: [
      { text: 'Todo en el plan Profesional', included: true },
      { text: 'Gestor de cuenta dedicado', included: true },
      { text: 'Acceso API', included: true },
      { text: 'Integraciones personalizadas', included: true },
      { text: 'Descuentos por volumen', included: true },
    ],
    cta: 'Contactar Ventas',
  },
];

export function PricingSection() {
  return (
      <section id="pricing" className="py-16 sm:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Precios Simples y <span className="text-primary">Transparentes</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Elige el plan que se ajuste a tus necesidades de generación de evaluaciones.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
            {plans.map((plan) => (
                <Card
                    key={plan.name}
                    className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.isPopular ? 'border-2 border-primary ring-4 ring-primary/20 relative' : ''}`}
                >
                  {plan.isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 transform">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-accent text-accent-foreground">
                    Más Popular
                  </span>
                      </div>
                  )}
                  <CardHeader className="pt-8">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-foreground/70 h-12">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                      <span className="text-base font-medium text-foreground/60 ml-1">{plan.priceDetail}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                          <li key={feature.text} className="flex items-center">
                            <CheckCircle2 className={`h-5 w-5 mr-2 ${feature.included ? 'text-primary' : 'text-muted-foreground/50'}`} />
                            <span className={feature.included ? 'text-foreground/90' : 'text-muted-foreground/70 line-through'}>{feature.text}</span>
                          </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                        className={`w-full text-lg py-6 ${plan.isPopular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}`}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
}
