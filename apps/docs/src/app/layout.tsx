import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@siberui/react';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://siberui.com';
const siteTitle = 'Siber UI';
const siteTagline = 'Minimalist Cyberpunk React Kit';
const siteDescription =
  'Siber UI is an open-source React component library for building dark-mode, cyberpunk-inspired interfaces. 40+ accessible, Tailwind CSS v4-native components — terminal chrome, neon signal colors, animated border beams, and hairline-first surfaces — ready for Next.js App Router, RSC, and Vite out of the box.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteTitle} | ${siteTagline}`,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  keywords: [
    'Siber UI',
    'React component library',
    'cyberpunk UI kit',
    'Tailwind CSS v4',
    'dark mode components',
    'Next.js UI library',
    'shadcn alternative',
    'terminal UI',
    'neon UI kit',
  ],
  authors: [{ name: 'Volkan Özbek', url: 'https://github.com/volkanozbek' }],
  category: 'technology',
  applicationName: siteTitle,
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: siteTitle,
    title: `${siteTitle} — ${siteTagline}`,
    description: siteDescription,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: `${siteTitle} — ${siteTagline}`,
    description: siteDescription,
  },
  icons: {
    icon: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen flex flex-col bg-bg text-fg">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
