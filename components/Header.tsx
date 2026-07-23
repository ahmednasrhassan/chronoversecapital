'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [email, setEmail] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail(''); // Clear the input field
        // Reset button status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-amber-500/10">
      <div className="w-full bg-[#121216] border-b border-white/5 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs gap-2">
          <div className="flex items-center gap-2 text-zinc-400 font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-zinc-500 hidden sm:inline">INTELLIGENCE HUB:</span>
            <a 
              href="https://intel.chronoversecapital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400/90 hover:text-amber-300 transition-colors underline underline-offset-4 decoration-amber-500/30"
            >
              intel.chronoversecapital.com
            </a>
          </div>

          <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Institutional email..."
              disabled={status === 'loading' || status === 'success'}
              className="hidden md:block bg-[#1C1C22] text-zinc-200 text-xs px-3 py-1 rounded border border-white/10 focus:outline-none focus:border-amber-500/50 w-56 placeholder:text-zinc-600 transition-all disabled:opacity-50"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 hover:text-amber-300 border border-amber-500/30 text-[11px] sm:text-xs px-2.5 py-1 rounded font-medium tracking-wide transition-all uppercase whitespace-nowrap disabled:opacity-50 min-w-[140px]"
            >
              {status === 'loading' ? 'Processing...' : status === 'success' ? 'Authorized ✅' : status === 'error' ? 'Error. Retry' : 'Access Intelligence'}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="ChronoVerse Capital Logo" 
            className="h-9 w-9 rounded-full object-cover border border-amber-500/30 shadow-md transition-transform group-hover:scale-105" 
          />
          <span className="text-lg font-bold tracking-tight text-zinc-100 group-hover:text-amber-400 transition-colors uppercase font-serif">
            ChronoVerse <span className="text-amber-500 font-sans font-light text-sm tracking-widest">CAPITAL</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-300">
          <Link 
            href="/category/intel-dossiers" 
            className="hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Intel-Dossiers
          </Link>

          <Link 
            href="/category/market-signals" 
            className="hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Market-Signals
          </Link>

          <Link 
            href="/category/tech-arsenal" 
            className="hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Tech-Arsenal
          </Link>

          <Link 
            href="/category/the-vault" 
            className="hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            The-Vault
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/category/the-vault"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-100 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded border border-white/10 transition-all"
          >
            <span>TERMINAL</span>
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 bg-white/5 hover:bg-white/10 rounded border border-white/10 transition-all focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D11] border-b border-amber-500/20 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-medium text-sm text-zinc-300">
            <Link 
              href="/category/intel-dossiers" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1 border-b border-white/5 transition-colors"
            >
              Intel-Dossiers
            </Link>

            <Link 
              href="/category/market-signals" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1 border-b border-white/5 transition-colors"
            >
              Market-Signals
            </Link>

            <Link 
              href="/category/tech-arsenal" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1 border-b border-white/5 transition-colors"
            >
              Tech-Arsenal
            </Link>

            <Link 
              href="/category/the-vault" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1 border-b border-white/5 transition-colors"
            >
              The-Vault
            </Link>
          </nav>

          <div className="pt-2">
            <Link
              href="/category/the-vault"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 w-full py-2.5 rounded transition-all"
            >
              <span>ACCESS TERMINAL</span>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
