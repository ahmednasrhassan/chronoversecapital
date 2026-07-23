'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="w-full bg-[#0A0A0C] text-zinc-100 font-sans min-h-screen">
      
      {/* 1️⃣ HERO SECTION */}
      <section className="w-full px-4 sm:px-8 py-20 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Institutional Macroeconomic Intelligence
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-serif text-zinc-100 leading-tight">
            Systemic Risk & Capital Allocation <span className="text-amber-500">Architecture</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            High-conviction macro modeling, sovereign debt research, and predictive algorithmic signals designed for institutional decision-makers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://intel.chronoversecapital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/10 uppercase"
            >
              Access Intelligence Hub
            </a>
            
            <Link
              href="/category/intel-dossiers"
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 font-semibold text-sm tracking-wide transition-all uppercase"
            >
              Explore Dossiers
            </Link>
          </div>
        </div>
      </section>

      {/* 2️⃣ MASTER FEATURED REPORT (Full Width) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400">Featured Flagship Dossier</h3>
          <span className="text-xs font-mono text-zinc-500">UPDATED WEEKLY</span>
        </div>

        <div className="bg-[#121216] border border-amber-500/20 rounded-xl p-6 sm:p-10 relative overflow-hidden group hover:border-amber-500/40 transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 mb-4">
            <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">INTEL-DOSSIER #042</span>
            <span>•</span>
            <span>MACRO LIQUIDITY MODEL</span>
            <span>•</span>
            <span>12 MIN READ</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-zinc-100 mb-4 group-hover:text-amber-400 transition-colors">
            The Sovereign Debt Super-Cycle: Global Liquidity Shifts & Systemic Collapse Vectors
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 max-w-3xl">
            An exhaustive structural dissection of central bank balance sheets, collateral scarcity dynamics, and the impending monetary pivot affecting cross-asset allocations.
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-white/5 flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Outlook: High Volatility / Structural Bullion Shift
            </div>
            <Link
              href="/category/intel-dossiers"
              className="text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
            >
              <span>Read Full Dossier</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3️⃣ RESEARCH DOSSIERS GRID (2 Columns) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400">Core Research Coverage</h3>
          <Link href="/category/intel-dossiers" className="text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors">View All →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#121216] border border-white/5 rounded-xl p-6 hover:border-amber-500/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
                <span className="text-amber-400">MARKET-SIGNALS</span>
                <span>•</span>
                <span>8 MIN READ</span>
              </div>
              <h4 className="text-xl font-bold font-serif text-zinc-100 mb-3 hover:text-amber-400 transition-colors">
                Real Yields & Treasury Spreads: Decoding the Next Bond Market Shock
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Tracking systemic credit stress and reverse repo drainage as liquidity conditions tighten across Tier-1 banking channels.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">Signal: Defensive</span>
              <Link href="/category/market-signals" className="text-amber-400 hover:underline">Access Signal</Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#121216] border border-white/5 rounded-xl p-6 hover:border-amber-500/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
                <span className="text-amber-400">TECH-ARSENAL</span>
                <span>•</span>
                <span>10 MIN READ</span>
              </div>
              <h4 className="text-xl font-bold font-serif text-zinc-100 mb-3 hover:text-amber-400 transition-colors">
                Algorithmic Execution Frameworks for High-Velocity Macro Hedges
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Proprietary codebases and quantitative indicators designed to capture tail-risk events and asymmetric market corrections.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">Signal: Neutral / Accumulate</span>
              <Link href="/category/tech-arsenal" className="text-amber-400 hover:underline">Explore Arsenal</Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4️⃣ LIVE MARKET CHARTS & PREDICTIVE OUTLOOK (Terminal Teaser) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400">Terminal Telemetry & Live Signals</h3>
            <p className="text-xs text-zinc-500 mt-1">Algorithmic outlook previews. Full execution signals locked to Terminal subscribers.</p>
          </div>
          <a href="https://www.chronoversecapital.com/p/the-terminal.html" target="_blank" rel="noopener noreferrer" className="text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1.5 rounded hover:bg-amber-500/20 transition-all">
            Unlock Full Terminal →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Chart Preview 1 */}
          <div className="bg-[#121216] border border-white/5 rounded-xl p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-zinc-300">US 10Y Real Yield / Liquidity Index</span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">BULLISH DIVERGENCE</span>
            </div>
            
            <div className="w-full h-36 bg-[#0A0A0C] rounded border border-white/5 flex items-center justify-center mb-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="text-xs font-mono text-zinc-500">Live API Chart Telemetry Stream...</div>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/10 rounded p-3 text-xs text-zinc-300">
              <strong className="text-amber-400 font-mono">Predictive Outlook:</strong> Expect downward pressure on yields over the next 14-21 sessions. Recommended positioning: Scale into duration assets.
            </div>
          </div>

          {/* Chart Preview 2 */}
          <div className="bg-[#121216] border border-white/5 rounded-xl p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-zinc-300">Global Central Bank Balance Sheet Net Flow</span>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">ACCUMULATION PHASE</span>
            </div>
            
            <div className="w-full h-36 bg-[#0A0A0C] rounded border border-white/5 flex items-center justify-center mb-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="text-xs font-mono text-zinc-500">Live API Chart Telemetry Stream...</div>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/10 rounded p-3 text-xs text-zinc-300">
              <strong className="text-amber-400 font-mono">Predictive Outlook:</strong> Liquidity expansion accelerating in Eastern corridors. Upside continuation expected for hard assets.
            </div>
          </div>

        </div>
      </section>

      {/* 5️⃣ EXCLUSIVE INSTITUTIONAL SPONSORS BAR */}
      <section className="w-full bg-[#121216]/50 border-t border-b border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-6">
            Trusted By Elite Research Partners & Institutional Infrastructure
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all text-xs font-mono tracking-widest text-zinc-400">
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
