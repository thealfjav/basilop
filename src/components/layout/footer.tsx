import Link from 'next/link';
import { BookOpenCheck } from 'lucide-react';

export function Footer() {
  return (
      <footer className="border-t border-border/40 bg-background">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <BookOpenCheck className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold font-headline text-foreground">ExamenConia</span>
            </div>
            <p className="text-sm text-foreground/60">
              &copy; {new Date().getFullYear()} ExamenConia (examenconia.com). Todos los derechos reservados.
            </p>
            <nav className="flex gap-4">
              <Link href="/terms" className="text-sm text-foreground/60 hover:text-foreground/80">
                Términos de Servicio
              </Link>
              <Link href="/privacy" className="text-sm text-foreground/60 hover:text-foreground/80">
                Política de Privacidad
              </Link>
            </nav>
          </div>
        </div>
      </footer>
  );
}
