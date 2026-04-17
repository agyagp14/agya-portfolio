import { Linkedin, Github, Mail, Phone, Download } from 'lucide-react';

const navLinks = ['About Me', 'Experience', 'Client Interactions', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'];
const projectLinks = ['iPIE (MCA)', 'IEPFA (MCA)', 'UPMS (Niti Aayog)', 'IFSCA', 'NHAI Digital', 'Enterprise ERP', 'Certificate System'];

const socials = [
  { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/agya-gupta-8b20521bb/' },
  { icon: <Mail size={16} />, href: 'mailto:agyagp14@gmail.com' },
  { icon: <Phone size={16} />, href: 'tel:+91 7253003242' },
];

export default function Footer() {
  return (
    <footer className="bg-section-alt border-t border-gold-subtle py-12 px-5 md:px-10">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
          <div>
            <div className="font-display text-2xl text-gold mb-2">Agya Gupta</div>
            <div className="text-muted-foreground text-sm max-w-[280px] leading-relaxed">
              Solution Architect · Full Stack Developer · Software Engineer. Building India's digital future, one system at a time.
            </div>
            <div className="flex gap-3 mt-6">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-gold-subtle flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold hover:bg-primary/10 transition-all no-underline"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Navigation</h4>
            <ul className="space-y-2.5 list-none">
              {navLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/\s+/g, '')}`} className="text-muted-foreground text-sm hover:text-gold transition-all no-underline">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Key Projects</h4>
            <ul className="space-y-2.5 list-none">
              {projectLinks.map((l) => (
                <li key={l}>
                  <a href="#projects" className="text-muted-foreground text-sm hover:text-gold transition-all no-underline">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a href="#" className="bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm inline-flex items-center gap-2 no-underline hover:-translate-y-1 transition-transform shadow-gold">
              <Download size={14} /> Download Resume
            </a>
          </div>
        </div>
        <div className="border-t border-gold-subtle pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground">© 2026 Agya Gupta. All rights reserved.</div>
          <div className="text-xs text-muted-foreground">Crafted with passion for technology</div>
        </div>
      </div>
    </footer>
  );
}
