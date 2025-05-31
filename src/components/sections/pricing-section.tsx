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
    name: 'Basic',
    price: 'Free',
    priceDetail: 'Forever',
    description: 'Perfect for individuals starting out or trying ExamenConia.',
    features: [
      { text: '3 exams per month', included: true },
      { text: 'Limited question types', included: true },
      { text: 'Standard support', included: true },
      { text: 'Basic analytics', included: false },
      { text: 'SEO metadata generation', included: false },
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    price: '$19',
    priceDetail: 'per month',
    description: 'Ideal for professionals and small teams needing more power.',
    features: [
      { text: 'Unlimited exams', included: true },
      { text: 'All question types', included: true },
      { text: 'Priority support', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'SEO metadata generation', included: true },
    ],
    cta: 'Choose Pro Plan',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceDetail: 'Contact Us',
    description: 'Tailored solutions for large organizations and specific needs.',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'API access', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Volume discounts', included: true },
    ],
    cta: 'Contact Sales',
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Choose the plan that fits your exam generation needs.
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
                    Most Popular
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
