import Link from 'next/link';
import { SubdomainForm } from './subdomain-form';
import { rootDomain } from '@/lib/utils';

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground p-4 relative">
      {/* Top Navigation / Admin Link */}
      <div className="absolute top-6 right-6">
        <Link
          href="/admin"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          Admin Portal
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {rootDomain}
          </h1>
          <p className="text-base text-muted-foreground">
            Create your custom subdomain with branding emoji
          </p>
        </div>

        {/* Card Container for Form */}
        <div className="bg-card border border-border shadow-2xl rounded-xl p-6 md:p-8 backdrop-blur-sm">
          <SubdomainForm />
        </div>
      </div>
    </div>
  );
}
