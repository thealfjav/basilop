import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const siteName = "ExamenConia: AI Exam Generator";
const siteDescription = "Generate diverse and engaging exams in minutes with ExamenConia, your AI-powered exam creation tool. Save time, customize questions, and get SEO-optimized content for your domain examenconia.com.";
const siteUrl = "https://www.examenconia.com"; // Replace with actual domain

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: ["AI exam generator", "examenconia.com", "online assessment tool", "create exams with AI", "automated exam creation", "SEO optimized exams"],
  authors: [{ name: "ExamenConia Team" }],
  creator: "ExamenConia Team",
  publisher: "ExamenConia",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.png`, // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "ExamenConia AI Exam Generator",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    // siteId: 'yourTwitterSiteId', // Optional: Your Twitter site ID
    // creator: '@yourTwitterHandle', // Optional: Your Twitter handle
    // creatorId: 'yourTwitterCreatorId', // Optional: Your Twitter creator ID
    images: [`${siteUrl}/twitter-image.png`], // Replace with actual Twitter image URL
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
    icon: '/favicon.ico', // Replace with actual favicon path
    shortcut: '/favicon-16x16.png', // Replace
    apple: '/apple-touch-icon.png', // Replace
  },
  // manifest: `${siteUrl}/site.webmanifest`, // Optional: if you have a manifest file
};

const schemaLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "ExamenConia",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`, // Replace with actual logo URL
      "description": "AI-powered exam generation platform designed to save time and enhance learning assessments.",
      "sameAs": [
        // Add social media links here if available
        // "https://twitter.com/examenconia",
        // "https://www.linkedin.com/company/examenconia"
      ]
    },
    {
      "@type": "WebSite",
      "name": "ExamenConia",
      "url": siteUrl,
      "publisher": {
        "@id": `${siteUrl}/#organization` // Link to the Organization schema
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteUrl}/search?q={search_term_string}` // Hypothetical search URL
        },
        "query-input": "required name=search_term_string"
      },
      "description": siteDescription
    }
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
