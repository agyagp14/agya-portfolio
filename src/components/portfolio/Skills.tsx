import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface SkillCat {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  fillClass: string;
  skills: { name: string; pct: number }[];
}

const categories: SkillCat[] = [
  {
    icon: '⚛️', iconBg: 'bg-accent/15', iconColor: 'text-teal', title: 'Frontend Development', fillClass: 'skill-fill-teal',
    skills: [{ name: 'React.js + Redux', pct: 90 }, { name: 'HTML5 / CSS3', pct: 92 }, { name: 'JavaScript (ES6+)', pct: 88 }, { name: 'Responsive / UI Design', pct: 85 }],
  },
  {
    icon: '⚙️', iconBg: 'bg-secondary/15', iconColor: 'text-accent-purple', title: 'Backend Development', fillClass: 'skill-fill-purple',
    skills: [{ name: 'Java + Spring Boot', pct: 87 }, { name: 'Node.js + Express', pct: 85 }, { name: 'REST APIs + JWT', pct: 90 }, { name: 'Microservices', pct: 78 }],
  },
  {
    icon: '🗄️', iconBg: 'bg-primary/15', iconColor: 'text-gold', title: 'Databases', fillClass: 'skill-fill-gold',
    skills: [{ name: 'MySQL', pct: 88 }, { name: 'MongoDB', pct: 82 }, { name: 'Firebase', pct: 75 }, { name: 'Data Modelling', pct: 84 }],
  },
  {
    icon: '🏗️', iconBg: 'bg-primary/15', iconColor: 'text-gold', title: 'Solution Architecture', fillClass: 'skill-fill-gold',
    skills: [{ name: 'HLD / LLD Design', pct: 88 }, { name: 'Technical Proposals / RFP', pct: 90 }, { name: 'Wireframes + Prototypes', pct: 85 }, { name: 'Client Presentations', pct: 92 }],
  },
  {
    icon: '☁️', iconBg: 'bg-accent/15', iconColor: 'text-teal', title: 'Cloud & DevOps', fillClass: 'skill-fill-teal',
    skills: [{ name: 'AWS (EC2, S3, RDS, Lambda)', pct: 72 }, { name: 'Docker', pct: 70 }, { name: 'CI/CD (GitHub Actions)', pct: 74 }, { name: 'Jenkins', pct: 65 }],
  },
  {
    icon: '💻', iconBg: 'bg-secondary/15', iconColor: 'text-accent-purple', title: 'Programming & Tools', fillClass: 'skill-fill-purple',
    skills: [{ name: 'Java', pct: 88 }, { name: 'C++', pct: 75 }, { name: 'Git + GitHub', pct: 90 }, { name: 'Postman, Maven, Webpack', pct: 82 }],
  },
];

const extraSkills = [
   'Prototyping', 'Client Communication', 'Technical Presentations',
  'Agile / Scrum', 'Technical Writing', 'Stakeholder Management', 'Technical Consulting',
];

function SkillBar({ name, pct, fillClass }: { name: string; pct: number; fillClass: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setWidth(pct); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5 text-sm">
        <span>{name}</span>
        <span className="text-gold font-mono text-xs">{pct}%</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-[1500ms] ease-in-out ${fillClass}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 md:px-10 relative overflow-hidden">
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="max-w-[1300px] mx-auto relative">
        <AnimatedSection>
          <div className="text-xs uppercase tracking-[2.5px] text-gold border-l-[3px] border-gold pl-3 mb-3.5">Skills</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Technical <span className="text-gradient-gold">Expertise</span></h2>
          <p className="text-muted-foreground text-base max-w-[560px] leading-relaxed mb-14">Full-stack proficiency combined with architectural thinking and strong client communication.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-card border border-gold-subtle rounded-2xl p-7 transition-all hover:border-secondary"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg ${cat.iconBg}`}>
                  {cat.icon}
                </div>
                <div className="font-bold text-sm">{cat.title}</div>
              </div>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} pct={s.pct} fillClass={cat.fillClass} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="flex flex-wrap gap-3 mt-10">
          {extraSkills.map((s) => (
            <span
              key={s}
              className="bg-muted/30 border border-gold-subtle rounded-full px-4 py-2 text-sm text-muted-foreground hover:border-gold hover:text-gold hover:bg-primary/10 transition-all cursor-default"
            >
              {s}
            </span>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
