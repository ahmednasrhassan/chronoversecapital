export interface Publication {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  pages: number;
}

const publicationsData: Publication[] = [
  {
    slug: 'macroeconomic-volumes-vol-1',
    title: 'Macroeconomic Dynamics & Liquidity Traps Vol. I',
    date: '2026',
    category: 'Institutional Volume',
    summary: 'A comprehensive foundational monograph examining central bank balance sheets, repo market haircut expansions, and modern liquidity void mechanisms.',
    pages: 420,
  },
  {
    slug: 'sovereign-debt-crisis-handbook',
    title: 'Sovereign Debt Contagion Handbook',
    date: '2025',
    category: 'Research Monograph',
    summary: 'Analytical frameworks for measuring cross-border credit transmission channels and debt overhang vulnerabilities during global tightening cycles.',
    pages: 310,
  }
];

export async function getAllPublications(): Promise<Publication[]> {
  return publicationsData;
}