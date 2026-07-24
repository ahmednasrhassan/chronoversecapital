import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Link from 'next/link';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'ChronoVerse Capital | Macroeconomic Intelligence',
  description: 'Navigating global liquidity, institutional structures, and structural market shifts through rigorous economic research.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-[#160d08] text-neutral-200 min-h-screen flex flex-col selection:bg-[#b36b39] selection:text-white`}>
        
        {/* Main Navigation and SES Subscription Bar */}
        <SiteHeader />

        {/* Page Content */}
        <main className="flex-1 flex flex-col relative overflow-hidden">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-black py-10 px-8 border-t border-[#2a2a2a] flex flex-col items-center justify-center space-y-4 z-10">
          <div className="text-neutral-500 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} ChronoVerse Capital. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-neutral-600 hover:text-[#b36b39] text-xs uppercase tracking-wider transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-neutral-600 hover:text-[#b36b39] text-xs uppercase tracking-wider transition-colors">
              Terms of Service
            </Link>
          </div>
        </footer>

        <SpeedInsights />
      </body>
    </html>
  );
}