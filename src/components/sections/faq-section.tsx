import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FaqItem {
  question: string;
  answer: string;
  keywords: string;
}

const faqItems: FaqItem[] = [
  {
    question: '¿Cómo funciona la generación de exámenes con IA de ExamenConia?',
    answer: 'Nuestra IA avanzada analiza el tema o los apuntes proporcionados, la materia y los requisitos específicos (como el nivel de dificultad y los tipos de preguntas) para generar preguntas y respuestas de examen relevantes, diversas y de alta calidad.',
    keywords: 'tecnología IA, proceso creación exámenes, inteligencia artificial',
  },
  {
    question: '¿Puedo personalizar los exámenes creados por ExamenConia?',
    answer: '¡Absolutamente! ExamenConia ofrece amplias opciones de personalización. Puedes especificar áreas temáticas, niveles de dificultad, tipos de preguntas, número de preguntas e incluso ingresar tu propio contenido (apuntes) para que la IA lo desarrolle. También puedes editar cualquier contenido generado.',
    keywords: 'personalización, exámenes personalizados, configuración exámenes, editar exámenes',
  },
  {
    question: '¿Qué tipos de preguntas son compatibles?',
    answer: 'Admitimos una amplia variedad de tipos de preguntas, incluidas las de opción múltiple, verdadero/falso, respuesta corta, completar espacios en blanco, correspondencia y preguntas de ensayo. Trabajamos continuamente para agregar formatos de preguntas más avanzados e interactivos.',
    keywords: 'formatos de pregunta, opción múltiple, verdadero falso, respuesta corta',
  },
  {
    question: '¿Cómo puedo generar un examen a partir de mis apuntes?',
    answer: 'Es muy sencillo. En la interfaz de generación, tendrás una opción para pegar el texto de tus apuntes o subir un documento. Nuestra IA procesará ese contenido y creará preguntas basadas en la información proporcionada.',
    keywords: 'generar desde apuntes, subir apuntes, IA análisis de texto, crear examen de texto',
  },
  {
    question: '¿Están seguros mis datos y apuntes con ExamenConia?',
    answer: 'Sí, la seguridad de los datos es una de nuestras principales prioridades. Empleamos medidas de seguridad estándar de la industria, incluido el cifrado, para proteger tus datos y garantizar la confidencialidad. Consulta nuestra Política de Privacidad para obtener más detalles.',
    keywords: 'seguridad datos, privacidad, cifrado, plataforma segura, protección apuntes',
  },
];

export function FaqSection() {
  return (
      <section id="faq" className="py-16 sm:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Preguntas <span className="text-primary">Frecuentes</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Encuentra respuestas a preguntas comunes sobre ExamenConia y su generador de exámenes con IA.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card p-4 rounded-lg shadow-md">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-medium text-foreground">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <p className="text-foreground/80">{item.answer}</p>
                    <p className="mt-2 text-xs text-muted-foreground">Palabras clave: {item.keywords}</p>
                  </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
  );
}
