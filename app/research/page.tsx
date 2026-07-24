import Link from 'next/link';

// Mock data representing MDX Research publications
const researchPapers = [
  {
    slug: 'munich-margin-call',
    title: 'The Munich Margin Call: Financing the 1930s',
    date: 'July 2026',
    category: 'Historical Liquidity',
    summary: 'An in-depth structural analysis on the capital allocation mechanisms and liquidity voids during the interwar European financial crisis.',
    readTime: '12 min read',
  },
  {
    slug: 'tulip-derivatives-crisis',
    title: 'The Tulip Derivatives Crisis Intel Dossier',
    date: 'June 2026',
    category: 'Market Mechanics',
    summary: 'Deconstructing early derivative structures, speculative leverage, and core asset belief collapses through primary financial archives.',
    readTime: '18 min read',
  },
  {
    slug: 'hormuz-shock-liquidity-void',
    title: 'Hormuz Shock: The Next Global Liquidity Void',
    date: 'May 2026',
    category: 'Macro Shock Dynamics',
    summary: 'Evaluating real-time transmission channels and market maker behavior during energy-driven systemic liquidity contractions.',
    readTime: '15 min read',
  },
];

export default function ResearchPage() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-start p-6 md:p-12 relative">
      <div className="w-full max-w-5xl space-y-12 z-10">
        
        {/* Header Section */}
        <div className="border-b border-[#2a1a12] pb-8 space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-[#b36b39]">
            Institutional Repository
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-100">
            Economic Research & Dossiers
          </h1>
          <p className="text-neutral-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Rigorous macroeconomic monographs, market mechanics analyses, and structural liquidity evaluations published by ChronoVerse Capital.
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {researchPapers.map((paper) => (
            <article 
              key={paper.slug}
              className="group bg-black p-8 rounded-xl border border-[#2a1a12] shadow-2xl hover:border-[#b36b39] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex items-center space-x-4 text-xs font-semibold">
                  <span className="text-[#b36b39] uppercase tracking-wider">{paper.category}</span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-500">{paper.date}</span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-500">{paper.readTime}</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-neutral-100 group-hover:text-[#b36b39] transition-colors">
                  <Link href={`/research/${paper.slug}`}>
                    {paper.title}
                  </Link>
                </h2>
                
                <p className="text-neutral-400 text-sm leading-relaxed max-w-3xl">
                  {paper.summary}
                </p>
              </div>

              <div className="flex items-center">
                <Link 
                  href={`/research/${paper.slug}`}
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#2a1a12] text-[#b36b39] text-xs font-bold uppercase tracking-wider hover:bg-[#b36b39] hover:text-white transition-all duration-300"
                >
                  Read MDX Paper
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}