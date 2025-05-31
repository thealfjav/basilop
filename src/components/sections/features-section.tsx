import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Clock, Settings, FileText, Zap } from 'lucide-react';
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
    title: 'Precisión Impulsada por IA',
    description: 'Crea diversos tipos de preguntas con dificultad ajustable utilizando nuestra IA avanzada. Asegura una evaluación integral adaptada a tus necesidades.',
    keywords: 'preguntas IA, diversos tipos preguntas, dificultad ajustable',
  },
  {
    icon: Clock,
    title: 'Ahorra Tiempo Valioso',
    description: 'Genera exámenes completos en minutos, no en horas. Libera tu agenda para centrarte en la enseñanza y la participación de los estudiantes.',
    keywords: 'ahorro tiempo, generación rápida exámenes, eficiencia',
  },
  {
    icon: Settings,
    title: 'Personalización Total',
    description: 'Adapta los exámenes a tu plan de estudios específico, objetivos de aprendizaje y niveles de los estudiantes. Control total sobre el contenido y la estructura.',
    keywords: 'exámenes personalizados, valoración personalizada, alineación curricular',
  },
  {
    icon: FileText,
    title: 'Desde tus Apuntes o Temas',
    description: 'Sube tus propios apuntes o simplemente indica un tema. Nuestra IA analizará el contenido para crear un examen relevante y bien estructurado.',
    keywords: 'exámenes desde apuntes, exámenes por tema, IA contextual, análisis contenido',
  },
  {
    icon: Zap,
    title: 'Herramientas Avanzadas de Preguntas',
    description: 'Aprovecha un conjunto de herramientas para diversos formatos de preguntas, incluyendo opción múltiple, verdadero/falso, respuesta corta y escenarios complejos.',
    keywords: 'formatos preguntas, herramientas valoración, creador exámenes',
  },
];

export function FeaturesSection() {
  return (
      <section id="features" className="py-16 sm:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Por qué elegir <span className="text-primary">ExamenConia</span>?
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Descubre las potentes características que hacen de ExamenConia el generador de exámenes con IA líder.
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
                    <p className="mt-2 text-xs text-muted-foreground">Palabras clave: {feature.keywords}</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
}
