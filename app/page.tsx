'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TradingViewChart } from '@/components/TradingViewChart';

export default function HomePage() {
  return (
    <div className="w-full bg-[#0A0A0C] text-zinc-100 font-sans min-h-screen overflow-x-hidden relative">
      
      {/* 1. HERO SECTION */}
      <section className="w-full px-4 sm:px-8 py-16 sm:py-20 border-b border-white/5 relative overflow-hidden">
        
        {/* Priority Hero Background Image */}
        <div className="absolute inset-0 pointer-events-none flex justify-center opacity-[0.03]">
          <Image
            src="/hero-bg.png"
            alt="Systemic Risk Architecture"
            width={1920}
            height={1080}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C58A38]/10 border border-[#C58A38]/25 text-[#C58A38] text-[11px] sm:text-xs font-mono tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C58A38] animate-pulse"></span>
            Institutional Macroeconomic Intelligence
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight font-serif text-zinc-100 leading-tight">
            Systemic Risk & Capital Allocation <span className="text-[#C58A38]">Architecture</span>
          </h1>

          <p className="text-sm sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            High-conviction macro modeling, sovereign debt research, and predictive algorithmic signals designed for high-conviction decision-makers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://intel.chronoversecapital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#C58A38] hover:bg-[#b0782e] text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#C58A38]/10 uppercase text-center"
            >
              Access Intelligence Hub
            </a>
            
            <Link
              href="/category/intel-dossiers"
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 font-semibold text-sm tracking-wide transition-all uppercase text-center"
            >
              Explore Dossiers
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MASTER FEATURED REPORT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#C58A38]">Featured Flagship Dossier</h3>
          <span className="text-[11px] font-mono text-zinc-500">UPDATED WEEKLY</span>
        </div>

        <div className="bg-[#121216] border border-[#C58A38]/20 rounded-xl p-5 sm:p-10 relative overflow-hidden group hover:border-[#C58A38]/40 transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C58A38]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-zinc-400 mb-4 relative z-10">
            <span className="px-2.5 py-1 rounded bg-[#C58A38]/10 text-[#C58A38] border border-[#C58A38]/20 text-[10px] sm:text-xs">INTEL-DOSSIER #042</span>
            <span>•</span>
            <span>MACRO LIQUIDITY MODEL</span>
            <span>•</span>
            <span>12 MIN READ</span>
          </div>

          <h2 className="text-xl sm:text-4xl font-bold font-serif text-zinc-100 mb-4 group-hover:text-[#C58A38] transition-colors relative z-10">
            The Sovereign Debt Super-Cycle: Global Liquidity Shifts & Systemic Collapse Vectors
          </h2>

          <p className="text-xs sm:text-base text-zinc-400 leading-relaxed mb-8 max-w-3xl relative z-10">
            An exhaustive structural dissection of central bank balance sheets, collateral scarcity dynamics, and the impending monetary pivot affecting cross-asset allocations.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-white/5 gap-4 relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Outlook: High Volatility / Structural Bullion Shift
            </div>
            <Link
              href="/category/intel-dossiers/sovereign-debt-super-cycle"
              className="text-xs font-mono uppercase tracking-widest text-[#C58A38] hover:text-[#d89a44] flex items-center gap-1.5 transition-colors"
            >
              <span>Read Full Dossier</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. RESEARCH DOSSIERS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-12 sm:pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#C58A38]">Core Research Coverage</h3>
          <Link href="/category/intel-dossiers" className="text-xs font-mono text-zinc-400 hover:text-[#C58A38] transition-colors">View All →</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#121216] border border-white/5 rounded-xl p-6 hover:border-[#C58A38]/20 transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
                <span className="text-[#C58A38]">MARKET-SIGNALS</span>
                <span>•</span>
                <span>8 MIN READ</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-serif text-zinc-100 mb-3 hover:text-[#C58A38] transition-colors">
                Real Yields & Treasury Spreads: Decoding the Next Bond Market Shock
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Tracking systemic credit stress and reverse repo drainage as liquidity conditions tighten across Tier-1 banking channels.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">Signal: Defensive</span>
              <Link href="/category/market-signals/real-yields-treasury-spreads" className="text-[#C58A38] hover:underline">Access Signal</Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#121216] border border-white/5 rounded-xl p-6 hover:border-[#C58A38]/20 transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
                <span className="text-[#C58A38]">TECH-ARSENAL</span>
                <span>•</span>
                <span>10 MIN READ</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-serif text-zinc-100 mb-3 hover:text-[#C58A38] transition-colors">
                Algorithmic Execution Frameworks for High-Velocity Macro Hedges
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Proprietary codebases and quantitative indicators designed to capture tail-risk events and asymmetric market corrections.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">Signal: Neutral / Accumulate</span>
              <Link href="/category/tech-arsenal/algorithmic-execution-frameworks" className="text-[#C58A38] hover:underline">Explore Arsenal</Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. LIVE MARKET CHARTS & PREDICTIVE OUTLOOK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-12 sm:pb-16">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#C58A38]">Terminal Telemetry & Live Signals</h3>
            <p className="text-xs text-zinc-500 mt-1">Algorithmic outlook previews. Full execution signals locked to Terminal subscribers.</p>
          </div>
          <a href="https://www.chronoversecapital.com/p/the-terminal.html" target="_blank" rel="noopener noreferrer" className="self-start sm:self-auto text-xs font-mono bg-[#C58A38]/10 text-[#C58A38] border border-[#C58A38]/30 px-3 py-1.5 rounded hover:bg-[#C58A38]/20 transition-all whitespace-nowrap">
            Unlock Full Terminal →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Live Chart 1: US 10Y Yield */}
          <div className="bg-[#121216] border border-white/5 rounded-xl p-6 relative flex flex-col justify-between space-y-4">
            <div>
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <span className="text-xs font-mono text-zinc-300">US 10Y Real Yield / Liquidity Index</span>
                <span className="text-[10px] sm:text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">BULLISH DIVERGENCE</span>
              </div>
              
              {/* Dynamic TradingView API Injection */}
              <div className="w-full rounded border border-white/5 mb-4 relative overflow-hidden bg-[#0A0A0C]">
                <TradingViewChart symbol="TVC:US10Y" height={240} />
              </div>
            </div>

            <div className="bg-[#C58A38]/5 border border-[#C58A38]/10 rounded p-3 text-xs text-zinc-300">
              <strong className="text-[#C58A38] font-mono">Predictive Outlook:</strong> Expect downward pressure on yields over the next 14-21 sessions. Recommended positioning: Scale into duration assets.
            </div>
          </div>

          {/* Live Chart 2: Gold */}
          <div className="bg-[#121216] border border-white/5 rounded-xl p-6 relative flex flex-col justify-between space-y-4">
            <div>
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <span className="text-xs font-mono text-zinc-300">Global Institutional Hard Asset Flow</span>
                <span className="text-[10px] sm:text-xs font-mono text-[#C58A38] bg-[#C58A38]/10 px-2 py-0.5 rounded">ACCUMULATION PHASE</span>
              </div>
              
              {/* Dynamic TradingView API Injection */}
              <div className="w-full rounded border border-white/5 mb-4 relative overflow-hidden bg-[#0A0A0C]">
                <TradingViewChart symbol="TVC:GOLD" height={240} />
              </div>
            </div>

            <div className="bg-[#C58A38]/5 border border-[#C58A38]/10 rounded p-3 text-xs text-zinc-300">
              <strong className="text-[#C58A38] font-mono">Predictive Outlook:</strong> Liquidity expansion accelerating in Eastern corridors. Upside continuation expected for hard assets.
            </div>
          </div>

        </div>
      </section>

      {/* 5. EXCLUSIVE INSTITUTIONAL SPONSORS BAR */}
      <section className="w-full bg-[#121216]/50 border-t border-b border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-6">
            Trusted By Elite Research Partners & Institutional Infrastructure
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-16 opacity-60 hover:opacity-100 transition-all text-xs font-mono tracking-widest text-zinc-400">
            <span>[ VANGUARD MACRO ]</span>
            <span>[ APEX CAPITAL LABS ]</span>
            <span>[ SYSTEMIC LIQUIDITY GROUP ]</span>
            <span>[ QUANTUM ASSET RESEARCH ]</span>
          </div>
        </div>
      </section>

    </div>
  );
}

