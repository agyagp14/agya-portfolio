import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import profileImg from "../../assets/img/agya-formal.jpeg";

export default function Education() {
  return (
    <section
      id="qualification"
      className="relative py-24 px-5 md:px-10 bg-section-alt overflow-hidden"
    >
      {/* Floating Shapes */}
      <motion.div
        className="absolute w-40 h-40 bg-primary/20 rounded-full blur-3xl top-10 left-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-52 h-52 bg-secondary/20 rounded-full blur-3xl bottom-10 right-20"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-[1300px] mx-auto">
        {/* Heading */}
        <AnimatedSection>
          <div className="text-xs uppercase tracking-[2.5px] text-gold border-l-[3px] border-gold pl-3 mb-3.5">
            Education
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Academic{" "}
            <span className="text-gradient-gold">Qualification</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-[560px] leading-relaxed mb-14">
            Strong computer science foundation from a NAAC A+ accredited
            university.
          </p>
        </AnimatedSection>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Education Card */}
          <AnimatedSection>
            <div className="bg-card border border-gold-subtle rounded-2xl p-10 flex flex-col sm:flex-row gap-10 items-start backdrop-blur-md shadow-xl">
              <div className="w-[70px] h-[70px] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl flex-shrink-0 border border-gold-subtle">
                🎓
              </div>
              <div>
                <div className="font-display text-xl font-bold mb-1.5">
                  Bachelor of Technology — Computer Science & Engineering
                </div>
                <div className="text-gold text-sm mb-2">
                  Lovely Professional University
                </div>
                <div className="text-muted-foreground text-sm flex gap-4 mb-4">
                  <span>📅 Oct 2020 – Jul 2024</span>
                  <span>📍 Punjab, India</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 text-sm text-gold">
                  <span>⭐</span>
                  <span>CGPA: 8.32 / 10</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT: Profile Image */}
          <AnimatedSection direction="left">
            <div className="relative flex items-start">
              <div className="w-full max-w-[420px] aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-gold-subtle shadow-card overflow-hidden flex items-center justify-center">
                <img  src={profileImg} alt="Agya Profile" className="w-full h-full object-cover rounded-2xl"/>
              </div>
              <div className="absolute -bottom-5 -right-5 w-[60%] h-[60%] border-2 border-gold-subtle rounded-2xl -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}