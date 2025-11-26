import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActive(id);
    }
  };

  return (
    <nav className="fixed z-50 inset-x-0 top-6 flex justify-center pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rounded-[24px] backdrop-blur-md bg-white/80 border border-border/20 shadow-lg transition-transform duration-300 transform hover:-translate-y-0.5`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActive(null);
              }}
              className="flex items-center gap-2"
            >
              <img src="/logo.png" alt="logo" className="h-8 w-auto object-contain" />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-transform duration-200 transform hover:scale-105 focus:outline-none ${
                  active === link.id ? 'text-accent' : 'text-foreground/90 hover:text-foreground'
                }`}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
                <span
                  className={`absolute left-1/2 -bottom-2 w-6 h-1 rounded-full transition-all duration-200 transform -translate-x-1/2 ${
                    active === link.id ? 'bg-accent opacity-100 scale-x-100' : 'bg-transparent opacity-0 scale-x-0'
                  }`}
                />
              </button>
            ))}

            <Button
              onClick={() => scrollToSection('contact')}
              size="default"
              className="ml-2 bg-accent text-accent-foreground shadow-md shadow-accent/20 transition-transform duration-150 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button (floating, minimal) */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="rounded-full bg-white/70 backdrop-blur-sm border border-border/10 shadow-sm p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile dropdown (floating panel) */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="mt-3 md:hidden">
            <div className="mx-auto max-w-xs bg-white/90 backdrop-blur-md rounded-xl border border-border/10 shadow-lg p-3 space-y-2">
              {LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-foreground hover:bg-background/50 transition"
                >
                  {link.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection('contact')} className="w-full mt-1 bg-accent text-accent-foreground">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
