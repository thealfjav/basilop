import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FaqItem {
  question: string;
  answer: string;
  keywords: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'How does ExamenConia\'s AI exam generation work?',
    answer: 'Our advanced AI analyzes your provided topic, subject matter, and specific requirements (like difficulty level and question types) to generate relevant, diverse, and high-quality exam questions and answers. It can also generate SEO metadata for the exam content.',
    keywords: 'AI technology, exam creation process, artificial intelligence',
  },
  {
    question: 'Can I customize the exams created by ExamenConia?',
    answer: 'Absolutely! ExamenConia offers extensive customization options. You can specify subject areas, difficulty levels, question types, number of questions, and even input your own content for the AI to build upon. You can also edit any generated content.',
    keywords: 'customization, personalized exams, exam settings, edit exams',
  },
  {
    question: 'What question types are supported?',
    answer: 'We support a wide variety of question types, including multiple-choice, true/false, short answer, fill-in-the-blanks, matching, and essay questions. We are continuously working on adding more advanced and interactive question formats.',
    keywords: 'question formats, multiple choice, true false, short answer',
  },
  {
    question: 'How does ExamenConia help with SEO for exams?',
    answer: 'When generating an exam, our AI can also create optimized meta titles, descriptions, and relevant keywords for the exam content. This helps search engines better understand and rank your exam if you choose to publish it online, driving more organic traffic.',
    keywords: 'SEO optimization, exam visibility, search engine ranking, metadata',
  },
  {
    question: 'Is my data secure with ExamenConia?',
    answer: 'Yes, data security is a top priority for us. We employ industry-standard security measures, including encryption, to protect your data and ensure confidentiality. Please refer to our Privacy Policy for more details.',
    keywords: 'data security, privacy, encryption, secure platform',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Find answers to common questions about ExamenConia.
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
                <p className="mt-2 text-xs text-muted-foreground">Keywords: {item.keywords}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
