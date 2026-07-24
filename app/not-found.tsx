import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center p-6 md:p-12 text-center relative">
      <div className="max-w-md space-y-6 z-10 bg-black p-8 md:p-12 rounded-xl border border-[#2a1a12] shadow-2xl">
        
        <div className="text-xs font-mono text-[#b36b39] uppercase tracking-widest">
          Error 404 • Void Encountered
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-100">
          Page Not Found
        </h1>

        <p className="text-neutral-400 text-sm leading-relaxed">
          The research dossier, terminal index, or publication requested does not exist within the ChronoVerse Capital framework.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#2a1a12] text-[#b36b39] text-xs font-bold uppercase tracking-wider hover:bg-[#b36b39] hover:text-white transition-all duration-300"
          >
            ← Return to Core Interface
          </Link>
        </div>

      </div>
    </div>
  );
}