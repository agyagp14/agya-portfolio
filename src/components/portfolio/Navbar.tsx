import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#clients', label: 'Clients' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certs' },
  { href: '#qualification', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 nav-bg backdrop-blur-xl border-b border-gold-subtle transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{ padding: '0 40px' }}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between h-[68px]">
        <a href="#hero" className="font-display text-2xl text-gold no-underline tracking-wide">
          AG<span className="text-foreground">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-gold hover:bg-primary/10 text-[0.85rem] font-medium tracking-wide px-3.5 py-2 rounded-md transition-all uppercase no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={onToggleTheme}
              className="mx-2 p-2 rounded-full border border-gold-subtle hover:border-gold text-gold transition-all hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
          <li>
            <a
              href="/Agya_Gupta_Updated_Resume.docx"
              className="bg-gradient-gold text-primary-foreground px-5 py-2 rounded-full font-semibold text-sm inline-flex items-center gap-2 no-underline hover:-translate-y-0.5 transition-transform shadow-gold"
            >
              <Download size={14} /> Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-gold-subtle text-gold"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gold"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-card border-b border-gold-subtle p-5"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-muted-foreground hover:text-gold text-sm uppercase tracking-wide no-underline"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
