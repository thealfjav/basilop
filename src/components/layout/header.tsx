import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BookOpenCheck } from 'lucide-react';

const navItems = [
  { label: 'Características', href: '#features' },
  { label: 'Precios', href: '#pricing' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
];

export function Header() {
  return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpenCheck className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold font-headline text-foreground">ExamenConia</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item.label}
                </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="default" className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              Comenzar
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Alternar Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                      <Link
                          key={item.label}
                          href={item.href}
                          className="text-lg font-medium transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                  ))}
                  <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Comenzar
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
  );
}
