'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* 1. Amazon SES Newsletter Bar */}
      <div className="bg-[#120d0a] border-b border-[#2a1a12] py-2 px-4 text-xs font-mono w-full z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="inline-block w-2 h-2 rounded-full bg-[#b36b39] animate-pulse"></span>
            <span>Subscribe to Institutional Macro Intelligence via Amazon SES:</span>
          </div>
          
          <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full sm:w-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter.your@email.com" 
              required
              className="bg-[#0a0a0c] border border-[#2a1a12] px-3 py-1 rounded text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-[#b36b39] text-xs w-full sm:w-56"
            />
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="bg-[#b36b39] text-white px-3 py-1 rounded font-bold hover:bg-[#8c5028] transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Join Briefing'}
            </button>
          </form>
        </div>
        {status === 'success' && (
          <div className="text-center text-[#b36b39] text-[11px] mt-1">✓ Welcome aboard! Confirmation sent via SES.</div>
        )}
        {status === 'error' && (
          <div className="text-center text-red-400 text-[11px] mt-1">✕ Subscription failed. Please try again.</div>
        )}
      </div>

      {/* 2. Main Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#2a1a12] w-full">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo / Name (Keeping your specific branding) */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-2xl font-bold tracking-widest text-neutral-100">
              CHRONOVERSE <span className="text-[#b36b39]">CAPITAL</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
            <Link href="/" className="text-neutral-300 hover:text-[#b36b39] transition-colors duration-300">
              Home
            </Link>
            <Link href="/research" className="text-neutral-300 hover:text-[#b36b39] transition-colors duration-300">
              Research
            </Link>
            <Link href="/publications" className="text-neutral-300 hover:text-[#b36b39] transition-colors duration-300">
              Publications
            </Link>
            <Link href="/terminal" className="text-neutral-300 hover:text-[#b36b39] transition-colors duration-300">
              Terminal
            </Link>
          </nav>

          {/* Desktop Actions & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/admin" 
              className="hidden sm:inline-flex px-4 py-2 rounded border border-[#2a1a12] bg-[#120d0a] text-xs font-mono text-[#b36b39] hover:bg-[#2a1a12] hover:border-[#b36b39]/50 transition-all duration-300 uppercase tracking-widest font-semibold"
            >
              Admin Portal
            </Link>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-[#b36b39] focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070708] border-b border-[#2a1a12] px-6 py-6 space-y-4 text-xs font-mono uppercase tracking-widest">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-[#b36b39] py-2 border-b border-[#1a120c]">
              Home
            </Link>
            <Link href="/research" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-[#b36b39] py-2 border-b border-[#1a120c]">
              Research
            </Link>
            <Link href="/publications" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-[#b36b39] py-2 border-b border-[#1a120c]">
              Publications
            </Link>
            <Link href="/terminal" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-[#b36b39] py-2 border-b border-[#1a120c]">
              Terminal
            </Link>
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="block text-[#b36b39] font-bold py-2">
              Admin Portal →
            </Link>
          </div>
        )}
      </header>
    </>
  );
}