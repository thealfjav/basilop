import Link from 'next/link';
import { BookOpenCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <BookOpenCheck className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold font-headline text-foreground">ExamenConia</span>
          </div>
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} ExamenConia (examenconia.com). All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/terms" className="text-sm text-foreground/60 hover:text-foreground/80">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-foreground/60 hover:text-foreground/80">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
