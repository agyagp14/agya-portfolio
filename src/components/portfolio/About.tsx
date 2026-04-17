import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import profileImg from '../../assets/img/agya-about.jpeg';

const highlights = [
  { icon: '🏛️', title: 'Government Domain', text: 'Deep expertise in central govt. digital ecosystems & compliance' },
  { icon: '⚙️', title: 'System Design', text: 'HLD/LLD, scalable microservices, API contracts' },
  { icon: '💻', title: 'Full Stack Dev', text: 'MERN + Java Spring Boot, from DB to UI' },
  { icon: '🎯', title: 'Presales', text: 'RFP responses, solution proposals, C-level presentations' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-5 md:px-10 bg-section-alt">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image - aligned to center vertically */}
          <AnimatedSection direction="left">
            <div className="relative flex items-start">
              <div className="w-full max-w-[420px] aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-gold-subtle shadow-card overflow-hidden flex items-center justify-center">
                <img  src={profileImg} alt="Agya Profile" className="w-full h-full object-cover rounded-2xl"/>
              </div>
              <div className="absolute -bottom-5 -right-5 w-[60%] h-[60%] border-2 border-gold-subtle rounded-2xl -z-10" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <div className="text-xs uppercase tracking-[2.5px] text-gold border-l-[3px] border-gold pl-3 mb-3.5">
              About Me
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-3">
              Architect by day,<br />
              <span className="text-gradient-gold">Coder by passion</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-5">
              I'm Agya Gupta — a Solution Architect and Full Stack Developer at CMS Computers Pvt. Ltd., New Delhi. I design high-level functional and technical architectures, build prototypes and wireframes, and deliver technical presentations exclusively to central government clients including NeGD, DIC, NIC, NHAI, and multiple Ministries.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-5">
              I've led solution consulting engagements that resulted in winning large-scale government digital transformation projects worth crores — iPIE under MCA, IEPFA under MCA, the Unified Project Management System for Niti Aayog, and NHAI's digital initiative.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              Beyond architecture, I'm a full-stack engineer at heart — proficient in MERN and Java Spring Boot stacks, having built corporate ERP systems, academic projects, and personal apps from scratch.
            </p>
          </AnimatedSection>
        </div>

        {/* Highlight cards - single row below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: 'hsl(var(--gold))' }}
              className="bg-card border border-gold-subtle rounded-2xl p-5 transition-all cursor-default group"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{h.icon}</div>
              <div className="text-sm font-semibold text-gold mb-1">{h.title}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{h.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
