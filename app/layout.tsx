import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '@/components/Header';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'ChronoVerse Capital',
  description: 'Institutional Macroeconomic Research & Investment Portal'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        {/* Institutional Header */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1">
          {children}
        </main>

        <SpeedInsights />
      </body>
    </html>
  );
}
