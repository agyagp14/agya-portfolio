import { motion } from 'framer-motion';
import { Rocket, FileDown } from 'lucide-react';
import Particles from './Particles';
import CountUp from './CountUp';
import heroImg from '../../assets/img/agya-profile.jpg';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-[100px] pb-[60px] px-5 md:px-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--gold) / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold) / 0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <Particles />

      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-20 items-center w-full relative z-10">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 text-xs text-gold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" />
            Open to Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-none mb-5"
          >
            Agya<br />
            <span className="text-gradient-gold">Gupta</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-6 font-light"
          >
            Solution Architect &nbsp;·&nbsp; <strong className="text-teal">Full Stack Developer</strong> &nbsp;·&nbsp; Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base leading-relaxed text-muted-foreground max-w-[560px] mb-10 mx-auto lg:mx-0"
          >
            Designing scalable digital systems for India's most critical government platforms. 1.8+ years bridging business vision with technical execution — from architecture blueprints to production-ready code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 flex-wrap justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-full font-bold no-underline flex items-center gap-2 text-sm hover:-translate-y-1 transition-transform shadow-gold"
            >
              <Rocket size={16} /> View My Work
            </a>
            <a
              href="/Agya_Gupta_Updated_Resume.docx"
              className="border border-gold-subtle text-foreground px-8 py-3.5 rounded-full font-medium no-underline flex items-center gap-2 text-sm hover:border-gold hover:text-gold hover:-translate-y-1 transition-all"
            >
              <FileDown size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-10 mt-12 justify-center lg:justify-start"
          >
            <CountUp target={1.8} label="Years Exp." decimal />
            <CountUp target={4} label="Gov. Projects Won" />
            <CountUp target={18} label="Certifications" />
            <CountUp target={7} label="Ministries Served" />
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto lg:mx-0 hidden md:block"
        >
          <div className="absolute -inset-5 rounded-full border-2 border-transparent animate-spin-slow" style={{
            background: 'linear-gradient(hsl(var(--dark2)), hsl(var(--dark2))) padding-box, var(--gradient-hero) border-box',
          }} />
          <div className="absolute -inset-9 rounded-full border border-dashed border-gold-subtle animate-spin-reverse opacity-50" />
          <div className="w-[300px] h-[300px] lg:w-[340px] lg:h-[340px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 relative z-[2] flex items-center justify-center overflow-hidden shadow-card">
            <img
  src={heroImg} alt="Agya Profile" className="w-full h-full object-cover rounded-2xl"/>
          </div>
          <div className="absolute bottom-5 -right-5 bg-card border border-gold-subtle rounded-2xl px-4 py-2.5 z-[3] animate-badge-float">
            <div className="text-[0.7rem] text-muted-foreground uppercase tracking-widest">Current Role</div>
            <div className="text-sm font-semibold text-gold">Solution Architect</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
