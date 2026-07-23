import Link from 'next/link';

interface SinglePostPageProps {
  params: {
    category: string;
    slug: string;
  };
}

// Full Content Database Registry
const dossierDatabase: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  signal: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
}> = {
  'sovereign-debt-super-cycle': {
    title: 'The Sovereign Debt Super-Cycle: Global Liquidity Shifts & Systemic Collapse Vectors',
    excerpt: 'An exhaustive structural dissection of central bank balance sheets, collateral scarcity dynamics, and the impending monetary pivot affecting cross-asset allocations.',
    category: 'INTEL-DOSSIER #042',
    readTime: '12 MIN READ',
    date: '2026-07-20',
    signal: 'High Volatility / Structural Bullion Shift',
    author: 'ChronoVerse Capital Macro Division',
    keyTakeaways: [
      'Quantitative Tightening (QT) capacity is hitting collateral constraints in Tier-1 funding markets.',
      'Sovereign duration supply is outpacing primary dealer balance sheet absorption limits.',
      'Non-fiat reserve assets (Physical Bullion/Hard Assets) are being structurally re-priced as collateral hedges.'
    ],
    content: [
      'The structural fragility of sovereign debt markets has reached a critical inflection point. As central bank balance sheets undergo quantitative tightening, collateral scarcity in primary funding markets is creating asymmetric tail risks across global asset classes.',
      'Cross-border capital flows are rapidly adjusting to sovereign debt servicing burdens. When real yields remain elevated alongside expanding fiscal deficits, traditional monetary transmission mechanisms fracture under the weight of duration absorption.',
      'Historically, the terminal phase of a sovereign debt super-cycle shifts focus from interest rate policy toward balance sheet mechanics and unencumbered collateral verification. Capital allocators must prepare for structural liquidity interventions as cross-asset volatility spreads.'
    ]
  },
  'real-yields-treasury-spreads': {
    title: 'Real Yields & Treasury Spreads: Decoding the Next Bond Market Shock',
    excerpt: 'Tracking systemic credit stress and reverse repo drainage as liquidity conditions tighten across Tier-1 banking channels.',
    category: 'MARKET-SIGNAL #019',
    readTime: '8 MIN READ',
    date: '2026-07-22',
    signal: 'Defensive Allocation',
    author: 'Quantitative Intelligence Team',
    keyTakeaways: [
      'Reverse Repo (RRP) buffers are reaching baseline exhaustion levels.',
      'Un-inversion vectors in the yield curve reflect supply-driven term premium expansion.',
      'Tier-1 banking credit default swaps (CDS) indicate localized collateral friction.'
    ],
    content: [
      'Systemic liquidity indicators reflect an accelerating drain in overnight funding facilities. The interaction between real yields and sovereign credit spreads signals an impending re-pricing across fixed-income instruments.',
      'When duration supply outpaces dealer balance sheet intermediation, market depth deteriorates rapidly. This structural mismatch forces volatility out of rates markets and directly into equity and credit markets.',
      'Defensive positioning in short-dated paper remains prudent while monitoring overnight repo dynamics for signs of broader central bank liquidity facilities being re-opened.'
    ]
  },
  'algorithmic-execution-frameworks': {
    title: 'Algorithmic Execution Frameworks for High-Velocity Macro Hedges',
    excerpt: 'Proprietary codebases and quantitative indicators designed to capture tail-risk events and asymmetric market corrections.',
    category: 'TECH-ARSENAL #008',
    readTime: '10 MIN READ',
    date: '2026-07-21',
    signal: 'Neutral / Accumulate',
    author: 'Quantitative Systems Division',
    keyTakeaways: [
      'Automated volatility trigger thresholds prevent emotional execution drag during tail events.',
      'Algorithmic order routing minimizes liquidity slippage in fragmented markets.',
      'Real-time stress scores dynamically hedge cross-asset exposures.'
    ],
    content: [
      'Execution velocity and automated risk metrics are vital when macro conditions shift rapidly. Proprietary algorithmic scripts allow institutional allocators to execute hedges with minimal market footprint.',
      'By evaluating cross-asset correlation breakdowns in real time, execution models can automatically adjust hedge ratios before legacy price feeds reflect full market clearing.',
      'Systematic execution frameworks isolate portfolio risk during liquidity gaps, maintaining capital preservation during high-velocity correction cycles.'
    ]
  },
  'sovereign-reserve-realignment': {
    title: 'Sovereign Reserve Realignment: Central Bank Gold Accumulation & Institutional Vault Vectors',
    excerpt: 'An insider structural audit of sovereign balance sheet shifts, physical gold settlement protocols, and non-fiat reserve asset allocation.',
    category: 'THE-VAULT #001',
    readTime: '18 MIN READ',
    date: '2026-07-23',
    signal: 'High-Conviction Reserve Accumulation',
    author: 'Strategic Reserve Research',
    keyTakeaways: [
      'Central banks are accelerating physical gold settlement and repatriating reserve assets.',
      'Bilateral settlement mechanisms are reducing reliance on centralized messaging networks.',
      'Unencumbered hard assets are emerging as the preferred tier-1 sovereign collateral.'
    ],
    content: [
      'The structural reallocation of sovereign reserves away from debt claims toward unencumbered physical assets represents a generational shift in central banking monetary architecture.',
      'Direct bilateral reserve clearing protocols bypass traditional intermediary risks, establishing new pricing vectors for non-fiat monetary assets.',
      'Institutional portfolios aligning with sovereign balance sheet trends emphasize allocated physical custody and sovereign-grade collateral frameworks.'
    ]
  }
};

export default function SingleDossierPage({ params }: SinglePostPageProps) {
  const dossier = dossierDatabase[params.slug] || {
    title: 'Institutional Dossier Analysis',
    excerpt: 'Comprehensive macroeconomic analysis and strategic risk framework.',
    category: params.category.toUpperCase(),
    readTime: '10 MIN READ',
    date: '2026-07-23',
    signal: 'Monitored Exposure',
    author: 'ChronoVerse Capital Analytics',
    keyTakeaways: [
      'Macroeconomic telemetry indicates shifting liquidity parameters.',
      'Portfolio risk modeling advises strategic capital preservation.',
      'Cross-asset correlations remain under continuous surveillance.'
    ],
    content: [
      'Detailed intelligence research for this report is being parsed into the institutional database.',
      'Please consult the main research division index or terminal feed for additional market telemetry.'
    ]
  };

  return (
    <article className="w-full bg-[#0A0A0C] text-zinc-100 font-sans min-h-screen">
      
      {/* Dossier Header Section */}
      <header className="w-full border-b border-white/5 bg-[#121216]/50 py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <Link 
            href={`/category/${params.category}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#C58A38] hover:underline uppercase tracking-widest"
          >
            ← Back to {params.category} Coverage
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="px-2.5 py-1 rounded bg-[#C58A38]/10 text-[#C58A38] border border-[#C58A38]/20 text-[11px]">
              {dossier.category}
            </span>
            <span>•</span>
            <span>{dossier.readTime}</span>
            <span>•</span>
            <span>{dossier.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-zinc-100 leading-tight">
            {dossier.title}
          </h1>

          <p className="text-base sm:text-xl text-zinc-400 leading-relaxed font-sans">
            {dossier.excerpt}
          </p>

          <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div>
              <span>AUTHOR: </span>
              <span className="text-zinc-200">{dossier.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C58A38]"></span>
              <span>OUTLOOK: {dossier.signal}</span>
            </div>
          </div>

        </div>
      </header>

      {/* Main Dossier Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-10">
        
        {/* Executive Key Takeaways Box */}
        <div className="bg-[#121216] border border-[#C58A38]/20 rounded-xl p-6 sm:p-8 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#C58A38]">
            Key Takeaways & Executive Signals
          </h3>
          <ul className="space-y-3 text-sm text-zinc-300">
            {dossier.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#C58A38] font-mono">0{idx + 1}.</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-serif">
          {dossier.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer Dossier Navigation */}
        <div className="pt-10 border-t border-white/5 flex items-center justify-between">
          <Link
            href={`/category/${params.category}`}
            className="px-6 py-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-300 transition-all"
          >
            ← Return to Division Index
          </Link>
          <a
            href="https://intel.chronoversecapital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded bg-[#C58A38] hover:bg-[#b0782e] text-zinc-950 font-bold text-xs font-mono uppercase tracking-widest transition-all"
          >
            Access Terminal →
          </a>
        </div>

      </section>

    </article>
  );
}

