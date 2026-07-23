import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function DynamicCategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.category;
  const contentDir = path.join(process.cwd(), 'content', categorySlug);

  let posts: any[] = [];

  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir);
    posts = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => {
        const filePath = path.join(contentDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        return {
          slug: file.replace('.mdx', ''),
          ...data,
        };
      });
  }

  const categoryTitles: Record<string, string> = {
    'intel-dossiers': 'Intel-Dossiers Coverage',
    'market-signals': 'Market-Signals Intelligence',
    'tech-arsenal': 'Tech-Arsenal Quantitative Codebases',
    'the-vault': 'The Vault Sovereign Research',
  };

  const title = categoryTitles[categorySlug] || `${categorySlug.toUpperCase()} Coverage`;

  return (
    <div className="w-full bg-[#0A0A0C] text-zinc-100 font-sans min-h-screen">
      
      {/* Category Header */}
      <section className="w-full border-b border-white/5 bg-[#121216]/50 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C58A38]/10 border border-[#C58A38]/25 text-[#C58A38] text-xs font-mono tracking-wider uppercase">
            <span>RESEARCH DIVISION</span>
            <span>•</span>
            <span>{posts.length} DOSSIERS PUBLISHED</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-zinc-100 tracking-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
            Institutional macroeconomic modeling, systemic risk metrics, and strategic intelligence designed for high-conviction decision-makers.
          </p>
        </div>
      </section>

      {/* Dossiers MDX Feed Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {posts.length === 0 ? (
          <div className="bg-[#121216] border border-white/5 rounded-xl p-12 text-center text-zinc-500 font-mono text-sm">
            No dossiers currently available in this intelligence division.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article 
                key={post.slug}
                className="bg-[#121216] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#C58A38]/30 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-zinc-400">
                    <span className="px-2.5 py-1 rounded bg-[#C58A38]/10 text-[#C58A38] border border-[#C58A38]/20 text-[11px]">
                      {post.category || 'DOSSIER'}
                    </span>
                    {post.readTime && (
                      <>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                    {post.date && (
                      <>
                        <span>•</span>
                        <span>{post.date}</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-zinc-100 hover:text-[#C58A38] transition-colors leading-snug">
                    <Link href={`/category/${categorySlug}/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <span className={`w-2 h-2 rounded-full ${post.statusColor || 'bg-[#C58A38]'}`}></span>
                    <span>Outlook: {post.signal || 'Monitored'}</span>
                  </div>

                  <Link
                    href={`/category/${categorySlug}/${post.slug}`}
                    className="text-xs font-mono uppercase tracking-widest text-[#C58A38] hover:text-[#d89a44] flex items-center gap-1 transition-colors self-start sm:self-auto"
                  >
                    <span>Read Dossier</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}

