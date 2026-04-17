import { useTheme } from '@/hooks/useTheme';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Clients from '@/components/portfolio/Clients';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Certificates from '@/components/portfolio/Certificates';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

export default function Index() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <Hero />
      <About />
      <Experience />
      <Clients />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
