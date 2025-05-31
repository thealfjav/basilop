import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Generate Engaging Exams <span className="text-primary">Instantly</span> with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl">
              ExamenConia empowers educators and trainers to create diverse, high-quality exams in minutes. Save time, customize content, and leverage AI for SEO-optimized assessments.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105">
                Create Your First Exam Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg transform transition-transform hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden shadow-2xl">
             <Image 
              src="https://placehold.co/800x600.png" 
              alt="AI Exam Generation Interface" 
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 hover:scale-105"
              data-ai-hint="education technology"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
