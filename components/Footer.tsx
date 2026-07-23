'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0C] border-t border-amber-500/10 text-zinc-300 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        
        {/* 3 Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand Logo & Description (on the left) */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <img 
                src="/logo.png" 
                alt="ChronoVerse Capital Logo" 
                className="h-10 w-10 rounded-full object-cover border border-amber-500/30 shadow-md" 
              />
              <span className="text-lg font-bold tracking-tight text-zinc-100 group-hover:text-amber-400 transition-colors uppercase font-serif">
                ChronoVerse <span className="text-amber-500 font-sans font-light text-sm tracking-widest">CAPITAL</span>
              </span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Institutional macroeconomic research, systemic debt modeling, and elite capital allocation intelligence designed for high-conviction decision-makers.
            </p>
          </div>

          {/* Column 2: Blog Categories */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-6 border-b border-white/5 pb-2">
              Research Coverage
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/category/intel-dossiers" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Intel-Dossiers
                </Link>
              </li>
              <li>
                <Link href="/category/market-signals" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Market-Signals
                </Link>
              </li>
              <li>
                <Link href="/category/tech-arsenal" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Tech-Arsenal
                </Link>
              </li>
              <li>
                <Link href="/category/the-vault" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  The-Vault
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Administrative & Legal Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-6 border-b border-white/5 pb-2">
              Institutional Index & Policy
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <li>
                <a href="https://www.chronoversecapital.com/p/the-terminal.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  The Terminal
                </a>
              </li>
              <li>
                <a href="https://www.chronoversecapital.com/p/the-chrono-verse-capital-manifesto.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="https://www.chronoversecapital.com/p/the-arsenal.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  The Arsenal
                </a>
              </li>
              <li>
                <a href="https://www.chronoversecapital.com/p/editorial-policy.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Editorial Policy
                </a>
              </li>
              <li>
                <a href="https://www.chronoversecapital.com/p/intelligence-index.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Intelligence Index
                </a>
              </li>
              <li>
                <a href="https://www.chronoversecapital.com/p/terms-of-service.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://www.chronoversecapital.com/p/dmca.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  DMCA
                </a>
              </li>
              <li>
                <a href="https://www.chronoversecapital.com/p/faq.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://www.chronoversecapital.com/p/disclaimer.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="https://www.chronoversecapital.com/p/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.chronoversecapital.com/p/contact-us.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://www.chronoversecapital.com/p/about-us.html" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright Bottom Section */}
        <div className="pt-8 border-t border-white/5 space-y-4">
          <p className="text-[11px] text-zinc-500 leading-relaxed text-center sm:text-left">
            <strong className="text-zinc-400">Institutional Disclaimer:</strong> All publications, market signals, debt dossiers, and analytical frameworks provided by ChronoVerse Capital are strictly intended for macroeconomic research, data modeling, and informational purposes only. They do not constitute formal financial, investment, or legal advice. 
          </p>
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 font-mono gap-4 pt-4 border-t border-white/5">
            <p>© {new Date().getFullYear()} ChronoVerse Capital. All rights reserved.</p>
            <p className="text-amber-400/80">Secured Intelligence & Macro Infrastructure</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

