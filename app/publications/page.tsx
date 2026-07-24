import Link from 'next/link';
import { getAllPublications } from '@/lib/mdx';

export default async function PublicationsPage() {
  const publications = await getAllPublications();

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-start p-6 md:p-12 relative">
      <div className="w-full max-w-5xl space-y-12 z-10">
        
        <div className="border-b border-[#2a1a12] pb-8 space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-[#b36b39]">
            Architectural Books & Volumes
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-100">
            Institutional Publications
          </h1>
          <p className="text-neutral-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Long-form economic volumes, monographs, and research treatises authored for institutional frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((item) => (
            <div 
              key={item.slug}
              className="group bg-black p-8 rounded-xl border border-[#2a1a12] shadow-2xl hover:border-[#b36b39] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#b36b39] uppercase tracking-wider">{item.category}</span>
                  <span className="text-neutral-500">{item.pages} Pages • {item.date}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-neutral-100 group-hover:text-[#b36b39] transition-colors">
                  {item.title}
                </h2>
                
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-8">
                <Link 
                  href="#"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#2a1a12] text-[#b36b39] text-xs font-bold uppercase tracking-wider hover:bg-[#b36b39] hover:text-white transition-all duration-300"
                >
                  Inspect Monograph
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}