import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Clock, Settings, Search, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  keywords: string;
}

const features: Feature[] = [
  {
    icon: BrainCircuit,
    title: 'AI-Powered Precision',
    description: 'Craft diverse question types with adjustable difficulty using our advanced AI. Ensure comprehensive assessment tailored to your needs.',
    keywords: 'AI questions, diverse question types, adjustable difficulty',
  },
  {
    icon: Clock,
    title: 'Save Valuable Time',
    description: 'Generate complete exams in minutes, not hours. Free up your schedule to focus on teaching and student engagement.',
    keywords: 'time saving, quick exam generation, efficiency',
  },
  {
    icon: Settings,
    title: 'Total Customization',
    description: 'Tailor exams to your specific curriculum, learning objectives, and student levels. Full control over content and structure.',
    keywords: 'custom exams, personalized assessment, curriculum alignment',
  },
  {
    icon: Search,
    title: 'SEO Optimized Content',
    description: 'Our AI not only generates exam questions but also provides metadata to help your educational content rank better in search engines.',
    keywords: 'SEO exams, metadata generation, search engine visibility',
  },
  {
    icon: Zap,
    title: 'Advanced Question Tools',
    description: 'Leverage a suite of tools for various question formats including multiple-choice, true/false, short answer, and complex scenarios.',
    keywords: 'question formats, assessment tools, exam builder',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose <span className="text-primary">ExamenConia</span>?
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Discover the powerful features that make ExamenConia the leading AI exam generator.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300_sm_transform_hover:scale-105">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <feature.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{feature.description}</p>
                <p className="mt-2 text-xs text-muted-foreground">Keywords: {feature.keywords}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
