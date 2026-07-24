import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#b36b39] opacity-[0.03] blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-5xl space-y-16 z-10">
        
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-100 drop-shadow-sm">
            Macroeconomic Intelligence
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Navigating global liquidity, institutional structures, and structural market shifts through rigorous economic research and data-driven frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-black p-10 rounded-xl border border-[#2a1a12] shadow-2xl hover:border-[#b36b39] transition-all duration-500 ease-in-out">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-neutral-100 mb-3 tracking-wide">Intel Dossier</h3>
              <div className="h-1 w-12 bg-[#b36b39] rounded-full transition-all duration-300 group-hover:w-24"></div>
            </div>
            <p className="text-neutral-400 mb-8 leading-relaxed text-sm md:text-base">
              Explore our extensive pipeline of macroeconomic publications detailing structural shifts, historical margins, and the next global liquidity void.
            </p>
            <Link href="#" className="inline-flex items-center text-[#b36b39] font-bold uppercase tracking-wider text-sm hover:text-[#d48c5b] transition-colors">
              Read Publication
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="group bg-black p-10 rounded-xl border border-[#2a1a12] shadow-2xl hover:border-[#b36b39] transition-all duration-500 ease-in-out">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-neutral-100 mb-3 tracking-wide">The Terminal</h3>
              <div className="h-1 w-12 bg-[#b36b39] rounded-full transition-all duration-300 group-hover:w-24"></div>
            </div>
            <p className="text-neutral-400 mb-8 leading-relaxed text-sm md:text-base">
              Access real-time architectural frameworks, historical market simulations, and structural data engineered for institutional economists.
            </p>
            <Link href="#" className="inline-flex items-center text-[#b36b39] font-bold uppercase tracking-wider text-sm hover:text-[#d48c5b] transition-colors">
              Access Simulation
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}