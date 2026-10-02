import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'ORBANIX GROUP · Real Estate, Investment & Advisory',
    template: '%s · ORBANIX GROUP'
  },
  description: 'ORBANIX GROUP. Real Estate, Investment y Advisory en Catalunya. Building Value, Creating Legacy.',
  keywords: ['Real Estate Catalunya', 'Inversión inmobiliaria Barcelona', 'Asesoramiento inmobiliario', 'Family office', 'Patrimonio'],
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: 'ORBANIX GROUP · Real Estate, Investment & Advisory',
    description: 'Conectamos conocimiento inmobiliario, capital y ejecución en Catalunya.',
    siteName: 'ORBANIX GROUP',
    locale: 'es_ES',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <Header />
        <main id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
