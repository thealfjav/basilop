import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react'; // Usando Quote como icono de burbuja de diálogo

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
  aiHint: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "¡ExamenConia transformó cómo creo evaluaciones! La IA es increíblemente inteligente y la variedad de tipos de preguntas es fantástica. Es un gran ahorro de tiempo.",
    name: 'Dra. Leonor Vargas',
    title: 'Profesora Universitaria',
    avatarSrc: 'https://placehold.co/80x80.png',
    aiHint: 'educadora mujer',
  },
  {
    quote: "Como formador corporativo, necesito generar evaluaciones rápida y eficientemente. ExamenConia hace exactamente eso, y las funciones SEO son un extra sorprendente para nuestros cursos en línea.",
    name: 'Marcos Chen',
    title: 'Formador Corporativo Principal',
    avatarSrc: 'https://placehold.co/80x80.png',
    aiHint: 'profesional hombre',
  },
  {
    quote: "Las opciones de personalización son de primera. Puedo adaptar las evaluaciones perfectamente a mi plan de estudios. Además, la interfaz es muy intuitiva y fácil de usar.",
    name: 'Sofía Rodríguez',
    title: 'Profesora de Secundaria',
    avatarSrc: 'https://placehold.co/80x80.png',
    aiHint: 'profesora mujer',
  },
];

export function TestimonialsSection() {
  return (
      <section id="testimonials" className="py-16 sm:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Amado por <span className="text-primary">Educadores y Formadores</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Escucha lo que nuestros usuarios satisfechos tienen que decir sobre ExamenConia.
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
