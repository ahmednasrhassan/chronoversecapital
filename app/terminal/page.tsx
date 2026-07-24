import Link from 'next/link';

export default function TerminalPage() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-start p-6 md:p-12 relative">
      <div className="w-full max-w-5xl space-y-10 z-10">
        
        {/* Terminal Header */}
        <div className="border-b border-[#2a1a12] pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="h-2 w-2 rounded-full bg-[#b36b39] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b36b39]">
                Real-Time Market Engine
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-100">
              The Terminal
            </h1>
          </div>
          <div className="text-xs font-mono text-neutral-500 bg-black px-4 py-2 rounded-lg border border-[#2a1a12]">
            STATUS: <span className="text-[#b36b39]">SIMULATION RUNNING</span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Liquidity Indicator */}
          <div className="bg-black p-6 rounded-xl border border-[#2a1a12] shadow-2xl space-y-4">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Global Liquidity Index
            </div>
            <div className="text-3xl font-extrabold text-neutral-100 font-mono">
              1,420.85 <span className="text-xs text-[#b36b39] font-normal">+0.42%</span>
            </div>
            <div className="w-full bg-[#160d08] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#b36b39] h-full w-[68%]"></div>
            </div>
          </div>

          {/* Card 2: Collateral Haircuts */}
          <div className="bg-black p-6 rounded-xl border border-[#2a1a12] shadow-2xl space-y-4">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Sovereign Haircut Expansion
            </div>
            <div className="text-3xl font-extrabold text-neutral-100 font-mono">
              2.14% <span className="text-xs text-neutral-500 font-normal">STABLE</span>
            </div>
            <div className="w-full bg-[#160d08] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#b36b39] h-full w-[35%]"></div>
            </div>
          </div>

          {/* Card 3: Systemic Stress */}
          <div className="bg-black p-6 rounded-xl border border-[#2a1a12] shadow-2xl space-y-4">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Interbank Risk Vector
            </div>
            <div className="text-3xl font-extrabold text-neutral-100 font-mono">
              0.18 <span className="text-xs text-[#b36b39] font-normal">LOW STRESS</span>
            </div>
            <div className="w-full bg-[#160d08] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#b36b39] h-full w-[18%]"></div>
            </div>
          </div>

        </div>

        {/* Interactive Simulation Window */}
        <div className="bg-black p-8 rounded-xl border border-[#2a1a12] shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#160d08] pb-4">
            <h2 className="text-xl font-bold text-neutral-100 tracking-wide">
              Historical Scenario Simulation
            </h2>
            <span className="text-xs font-mono text-[#b36b39]">ARCHIVAL MODEL V4</span>
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Select an architectural shock framework to simulate liquidity transmission across interbank clearing networks and evaluate systemic haircuts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#160d08] rounded-lg border border-[#2a1a12] hover:border-[#b36b39] transition-colors cursor-pointer space-y-2">
              <div className="text-sm font-bold text-neutral-200">1930s European Margin Crisis</div>
              <div className="text-xs text-neutral-500">Cross-border capital flight & central bank gold depletion.</div>
            </div>

            <div className="p-4 bg-[#160d08] rounded-lg border border-[#2a1a12] hover:border-[#b36b39] transition-colors cursor-pointer space-y-2">
              <div className="text-sm font-bold text-neutral-200">Modern Commodity Shock Framework</div>
              <div className="text-xs text-neutral-500">Energy-driven clearing house margin expansion model.</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}