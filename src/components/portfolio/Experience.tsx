import AnimatedSection from './AnimatedSection';

const experiences = [
  {
    date: 'Jan 2025 – Present',
    title: 'Associate Solution Architect',
    company: 'CMS Computers Pvt. Ltd. | New Delhi',
    points: [
      'Architect and design technical solutions for large-scale digital platforms, engaging directly with clients DIC, NIC, NHAI, MoF, MoHUA, and MCA.',
      'Design high-level functional and technical architectures, build interactive prototypes and wireframe designs for central government projects.',
      'Lead technical discovery workshops and solution presentations to C-level stakeholders.',
      'Won multiple prestigious government projects: iPIE (MCA), IEPFA (MCA), UPMS (Niti Aayog), and NHAI (DIC).',
      'Draft comprehensive solution proposals and contribute to RFPs.',
      'Collaborate with product and engineering teams to define technical roadmaps, API contracts, and data models.',
    ],
  },
  {
    date: 'Aug 2024 – Dec 2024',
    title: 'Trainee Software Engineer',
    company: 'CMS Computers Pvt. Ltd. | New Delhi',
    points: [
      'Developed full-stack features for enterprise applications using React.js, Redux, and Spring Boot.',
      'Built and integrated secure RESTful APIs with frontend interfaces.',
      'Implemented JWT-based authentication and role-based access control (RBAC).',
      'Contributed to ERP modules including task management, training management, user management, attendance, and workflow approval systems.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-5 md:px-10">
      <div className="max-w-[1300px] mx-auto">
        <AnimatedSection>
          <div className="text-xs uppercase tracking-[2.5px] text-gold border-l-[3px] border-gold pl-3 mb-3.5">Experience</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Professional <span className="text-gradient-gold">Journey</span></h2>
          <p className="text-muted-foreground text-base max-w-[560px] leading-relaxed mb-14">Building systems that serve millions — from first code commit to government boardroom presentations.</p>
        </AnimatedSection>

        <div className="relative pl-10">
          <div className="absolute left-[10px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.15} className="relative mb-12">
              <div className="absolute -left-[36px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-gold shadow-gold" />
              <div className="bg-card border border-gold-subtle rounded-2xl p-7 hover:border-gold hover:translate-x-2 transition-all duration-300 group">
                <div className="font-mono text-xs text-gold tracking-widest mb-2">{exp.date}</div>
                <div className="text-lg font-bold mb-1">{exp.title}</div>
                <div className="text-sm text-accent-purple flex items-center gap-2 mb-4">
                  <span className="w-5 h-px bg-current" />
                  {exp.company}
                </div>
                <ul className="space-y-2.5">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed pl-5 relative">
                      <span className="absolute left-0 text-gold">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
