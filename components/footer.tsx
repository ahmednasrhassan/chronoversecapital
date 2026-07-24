import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0c] border-t border-neutral-800 text-neutral-400 py-12 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Side: Name, Description, and Disclaimer */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-wider text-amber-500 uppercase">
              ChronoVerse Capital
            </span>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Navigating global liquidity, institutional structures, and structural market shifts through rigorous economic research and data-driven frameworks.
          </p>
          <div className="pt-2 text-xs text-neutral-500 border-t border-neutral-800/60 leading-relaxed">
            <p className="font-semibold text-neutral-400 mb-1">Legal Disclaimer:</p>
            The information and analysis provided on this platform are for educational and research purposes only and do not constitute investment or financial advice, nor a recommendation to initiate any financial transactions.
          </div>
        </div>

        {/* Column 1: Blog Categories */}
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/category/intel-dossiers" className="hover:text-amber-400 transition-colors">
                Intel-Dossiers
              </Link>
            </li>
            <li>
              <Link href="/category/market-signals" className="hover:text-amber-400 transition-colors">
                Market-Signals
              </Link>
            </li>
            <li>
              <Link href="/category/tech-arsenal" className="hover:text-amber-400 transition-colors">
                Tech-Arsenal
              </Link>
            </li>
            <li>
              <Link href="/category/the-vault" className="hover:text-amber-400 transition-colors">
                The-Vault
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: About Pages */}
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">
            About
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.chronoversecapital.com/p/about-us.html" className="hover:text-amber-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="https://www.chronoversecapital.com/p/the-chrono-verse-capital-manifesto.html" className="hover:text-amber-400 transition-colors">
                The Manifesto
              </a>
            </li>
            <li>
              <a href="https://www.chronoversecapital.com/p/the-terminal.html" className="hover:text-amber-400 transition-colors">
                The Terminal
              </a>
            </li>
            <li>
              <a href="https://www.chronoversecapital.com/p/the-arsenal.html" className="hover:text-amber-400 transition-colors">
                The Arsenal
              </a>
            </li>
            <li>
              <a href="https://www.chronoversecapital.com/p/intelligence-index.html" className="hover:text-amber-400 transition-colors">
                Intelligence Index
              </a>
            </li>
            <li>
              <a href="https://www.chronoversecapital.com/p/editorial-policy.html" className="hover:text-amber-400 transition-colors">
                Editorial Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Contact Pages */}
        <div className="md:col-span-3 space-y-3">
          <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">
            Terms & Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.chronoversecapital.com/p/contact-us.html" className="hover:text-amber-400 transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="https://www.chronoversecapital.com/p/faq.html" className="hover:text-amber-400 transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="https://www.chronoversecapital.com/p/terms-of-service.html" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="https://www.chronoversecapital.com/p/privacy-policy.html" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.chronoversecapital.com/p/disclaimer.html" className="hover:text-amber-400 transition-colors">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="https://www.chronoversecapital.com/p/dmca.html" className="hover:text-amber-400 transition-colors">
                DMCA
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-neutral-800/80 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} ChronoVerse Capital. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Executive Financial & Economic Intelligence</p>
      </div>
    </footer>
  );
}