import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Ezekiel Olaleye — AI Specialist, Prompt Engineer & Creative Tech',
  description:
    'I help brands, creators, and businesses use AI, content, automation, and design to build faster, create smarter, and stand out online.',
  keywords: [
    'AI Specialist', 'Prompt Engineer', 'Virtual Assistant',
    'Graphics Designer', 'Tech Content Creator', 'Vibe Coder', 'AI Tools', 'Freelancer',
  ],
  openGraph: {
    title: 'Ezekiel Olaleye — AI Specialist & Creative Tech',
    description: 'Helping brands and creators leverage AI, content, and design to scale efficiently.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ezekiel Olaleye — AI Specialist & Creative Tech',
    description: 'AI, content, automation, and design expert.',
  },
};

// Explicit viewport export — required for correct touch coordinates on iOS
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
