import Link from 'next/link';
import { notFound } from 'next/navigation';

const papersData: Record<string, { title: string; date: string; category: string; author: string; content: string }> = {
  'munich-margin-call': {
    title: 'The Munich Margin Call: Financing the 1930s',
    date: 'July 2026',
    category: 'Historical Liquidity',
    author: 'ChronoVerse Research Team',
    content: `
# Executive Summary

The interwar European financial architecture was defined by fragile cross-border capital flows, sovereign debt overhangs, and severe liquidity mismatches. This paper deconstructs the structural mechanics behind the 1930s margin calls that triggered systemic contraction across European central banking balance sheets.

### Structural Liquidity Voids

When capital reserves began flowing out of central European institutions, market makers experienced unprecedented collateral haircut expansions.

* **Central Bank Gold Reserves:** Depleted by over 45% within two quarters.
* **Interbank Contagion:** High velocity transmission via syndicate lending networks.
* **Deflationary Spirals:** Forced asset sales to satisfy emergency margin mandates.

> "The loss of short-term liquidity proved far more catastrophic than long-term insolvency risks during the initial contagion phase."

### Implication for Modern Markets

Analyzing these 1930s clearing mechanisms provides critical data for evaluating current cross-border derivatives exposures and liquidity buffers in sovereign debt markets.
    `
  },
  'tulip-derivatives-crisis': {
    title: 'The Tulip Derivatives Crisis Intel Dossier',
    date: 'June 2026',
    category: 'Market Mechanics',
    author: 'ChronoVerse Research Team',
    content: `
# Abstract

A granular examination of option-like forward contracts during the 17th-century Dutch market dislocation, focusing on collateral requirements and credit network failures.
    `
  },
  'hormuz-shock-liquidity-void': {
    title: 'Hormuz Shock: The Next Global Liquidity Void',
    date: 'May 2026',
    category: 'Macro Shock Dynamics',
    author: 'ChronoVerse Research Team',
    content: `
# Macroeconomic Framework

Evaluating supply-side commodity shocks and their immediate transmission to repo market haircuts and clearing house margin spikes.
    `
  }
};

export default async function PaperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = papersData[slug];

  if (!paper) {
    notFound();
  }

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-start p-6 md:p-12 relative">
      <article className="w-full max-w-4xl space-y-10 z-10">
        
        <div>
          <Link 
            href="/research"
            className="inline-flex items-center text-[#b36b39] text-xs font-bold uppercase tracking-wider hover:text-[#d48c5b] transition-colors"
          >
            ← Back to All Research
          </Link>
        </div>

        <header className="border-b border-[#2a1a12] pb-8 space-y-4">
          <div className="flex items-center space-x-4 text-xs font-semibold">
            <span className="text-[#b36b39] uppercase tracking-wider">{paper.category}</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-500">{paper.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-100 leading-tight">
            {paper.title}
          </h1>

          <div className="text-sm text-neutral-400 pt-2">
            By <span className="text-neutral-200 font-semibold">{paper.author}</span>
          </div>
        </header>

        <div className="bg-black p-8 md:p-12 rounded-xl border border-[#2a1a12] shadow-2xl text-neutral-300 leading-relaxed space-y-6">
          <div className="prose prose-invert max-w-none space-y-4 whitespace-pre-line font-sans">
            {paper.content}
          </div>
        </div>

      </article>
    </div>
  );
}