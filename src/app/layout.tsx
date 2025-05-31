import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const siteName = "ExamenConia: Generador de Exámenes con IA";
const siteDescription = "Crea exámenes completos y personalizados en minutos con ExamenConia, tu generador de exámenes impulsado por IA. Sube tus apuntes o indica un tema y obtén evaluaciones listas para usar.";
const siteUrl = "https://www.examenconia.com"; // Reemplaza con el dominio real

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  keywords: ["generador de exámenes con IA", "crear exámenes con IA", "IA para exámenes", "plataforma creación exámenes", "exámenes desde apuntes", "exámenes por tema", "examenconia.com", "herramienta de evaluación online", "creación automatizada de evaluaciones"],
  authors: [{ name: "Equipo ExamenConia" }],
  creator: "Equipo ExamenConia",
  publisher: "ExamenConia",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "ExamenConia: Tu Generador de Exámenes con Inteligencia Artificial",
    description: "Genera exámenes de forma rápida y sencilla. Ideal para educadores y formadores que buscan optimizar su tiempo.",
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.png`, // Reemplaza con la URL real de la imagen OG
        width: 1200,
        height: 630,
        alt: "ExamenConia Generador de Exámenes con IA",
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ExamenConia: Transforma tus Apuntes en Exámenes con IA",
    description: "Ahorra horas de trabajo generando exámenes personalizados con nuestra plataforma de IA. Prueba ExamenConia.",
    images: [`${siteUrl}/twitter-image.png`], // Reemplaza con la URL real de la imagen de Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', // Reemplaza con la ruta real del favicon
    shortcut: '/favicon-16x16.png', // Reemplaza
    apple: '/apple-touch-icon.png', // Reemplaza
  },
};

const schemaLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "ExamenConia",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`, // Reemplaza con la URL real del logo
      "description": "Plataforma de generación de exámenes impulsada por IA, diseñada para crear evaluaciones personalizadas a partir de temas o apuntes.",
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "name": "ExamenConia - Generador de Exámenes con IA",
      "url": siteUrl,
      "publisher": {
        "@id": `${siteUrl}/#organization`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "description": "Utiliza IA para generar exámenes y evaluaciones de forma eficiente. ExamenConia te ayuda a crear el material perfecto para tus estudiantes o formaciones."
    }
  ]
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLd) }}
        />
      </head>
      <body className="font-body antialiased">
      {children}
      <Toaster />
      </body>
      </html>
  );
}
