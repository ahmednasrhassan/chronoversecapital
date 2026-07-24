import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-start p-6 md:p-12 relative">
      <div className="w-full max-w-5xl space-y-10 z-10">
        
        {/* Admin Header */}
        <div className="border-b border-[#2a1a12] pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-100">
              Admin Portal
            </h1>
            <p className="text-neutral-400 mt-2 text-sm md:text-base">
              ChronoVerse Capital internal management framework.
            </p>
          </div>
          <div className="text-xs font-mono text-[#b36b39] bg-black px-4 py-2 rounded-lg border border-[#2a1a12] flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#b36b39] animate-pulse"></span>
            AUTHORIZED ACCESS ONLY
          </div>
        </div>

        {/* Admin Dashboard Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Module 1: Research */}
          <div className="bg-black p-8 rounded-xl border border-[#2a1a12] shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-neutral-100 mb-3 tracking-wide">Research Engine</h2>
              <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                Deploy new MDX monographs, manage macroeconomic volumes, and update institutional dossiers.
              </p>
            </div>
            <div>
              <button className="w-full md:w-auto px-5 py-2.5 rounded-lg bg-[#2a1a12] text-[#b36b39] text-xs font-bold uppercase tracking-wider hover:bg-[#b36b39] hover:text-white transition-all duration-300">
                Manage Publications
              </button>
            </div>
          </div>

          {/* Module 2: Terminal */}
          <div className="bg-black p-8 rounded-xl border border-[#2a1a12] shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-neutral-100 mb-3 tracking-wide">Terminal Architecture</h2>
              <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                Calibrate live simulation parameters, liquidity indices, and historical stress test models.
              </p>
            </div>
            <div>
              <button className="w-full md:w-auto px-5 py-2.5 rounded-lg bg-[#2a1a12] text-[#b36b39] text-xs font-bold uppercase tracking-wider hover:bg-[#b36b39] hover:text-white transition-all duration-300">
                Configure Engine
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}