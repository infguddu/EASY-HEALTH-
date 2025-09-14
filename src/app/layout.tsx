import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { LanguageProvider } from '@/context/language-context';
import BottomNavbar from './components/bottom-navbar';
import PageTransition from './components/page-transition';
import RootLayoutClient from './layout-client';

export const metadata: Metadata = {
  title: 'সহজ চিকিৎসা',
  description: 'আপনার স্বাস্থ্য সেবায় একটি সহজ সমাধান।',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Hind+Siliguri:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#94dca9" />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          <RootLayoutClient>{children}</RootLayoutClient>
        </LanguageProvider>
      </body>
    </html>
  );
}
