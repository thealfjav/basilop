import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react'; // Using Quote as a speech bubble icon

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
  aiHint: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "ExamenConia transformed how I create assessments! The AI is incredibly smart and the variety of question types is fantastic. It's a huge time-saver.",
    name: 'Dr. Eleanor Vance',
    title: 'University Professor',
    avatarSrc: 'https://placehold.co/80x80.png',
    aiHint: 'educator woman',
  },
  {
    quote: "As a corporate trainer, I need to generate exams quickly and efficiently. ExamenConia does exactly that, and the SEO features are a surprising bonus for our online courses.",
    name: 'Marcus Chen',
    title: 'Lead Corporate Trainer',
    avatarSrc: 'https://placehold.co/80x80.png',
    aiHint: 'professional man',
  },
  {
    quote: "The customization options are top-notch. I can tailor exams perfectly to my curriculum. Plus, the interface is so intuitive and easy to use.",
    name: 'Sophia Rodriguez',
    title: 'High School Teacher',
    avatarSrc: 'https://placehold.co/80x80.png',
    aiHint: 'teacher woman',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by <span className="text-primary">Educators & Trainers</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Hear what our satisfied users have to say about ExamenConia.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-foreground/80 italic mb-6 flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={testimonial.avatarSrc}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                    data-ai-hint={testimonial.aiHint}
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
