import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import bdg1 from '../../assets/cert/2amjkEDkFUy0NTAPU2k73QkLY5g.png';
import bdg2 from '../../assets/cert/2amjkEDkFUy0NTAPU2k73QkLY5g1.png';
import bdg3 from '../../assets/cert/2amjkEDkFUy0NTAPU2k73QkLY5g2.png';
import cert1 from '../../assets/cert/Screenshot (74).png';
import cert2 from '../../assets/cert/Screenshot (75).png';
import cert3 from '../../assets/cert/Screenshot (76).png';
import cert4 from '../../assets/cert/Screenshot (77).png';
import cert5 from '../../assets/cert/Screenshot (78).png';
import cert6 from '../../assets/cert/Screenshot (79).png';
import cert10 from '../../assets/cert/Screenshot (83).png';
import cert11 from '../../assets/cert/Screenshot (84).png';
import cert12 from '../../assets/cert/Screenshot (86).png';
import cert13 from '../../assets/cert/Screenshot (87).png';
import cert15 from '../../assets/cert/Screenshot (90).png';
import cert16 from '../../assets/cert/Screenshot (92).png';
import cert17 from '../../assets/cert/Screenshot (93).png';
import cert18 from '../../assets/cert/Screenshot (94).png';
import cert19 from '../../assets/cert/Screenshot (95).png';

const certificates = [
  { name: 'AWS Cloud Essentials', image: bdg1 },
  { name: 'AWS Architecting', image: bdg2 },
  { name: 'AWS Serverless', image: bdg3 },
  { name: 'Core C++', image: cert1 },
  { name: 'Data Structures & Algorithms', image: cert2 },
  { name: 'Web applications in PHP', image: cert3 },
  { name: 'Django Web Framework', image: cert4 },
  { name: 'React Js Tutorial', image: cert5 },
  { name: 'Core React Js', image: cert6 },
  { name: 'Serverside Javascript with Node.js', image: cert10 },
  { name: 'C++ with Data Structures', image: cert11 },
  { name: 'AWS Backup Primer', image: cert12 },
  { name: 'AWS S3', image: cert13 },
  { name: 'Database Migration', image: cert15 },
  { name: 'Architecting Serverless Applications', image: cert16 },
  { name: 'AWS Lambda Foundations', image: cert17 },
  { name: 'Amazon RDS Primer', image: cert18 },
  { name: 'Amazon EBS Primer', image: cert19 }
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<{ name: string; image: string } | null>(null);
  return (
    <section id="certificates" className="py-24 px-5 md:px-10">
      <div className="max-w-[1300px] mx-auto">
        <AnimatedSection>
          <div className="text-xs uppercase tracking-[2.5px] text-gold border-l-[3px] border-gold pl-3 mb-3.5">Certifications</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Certifications &<br /><span className="text-gradient-gold">Credentials</span></h2>
          <p className="text-muted-foreground text-base max-w-[560px] leading-relaxed mb-14">Industry-recognized certifications across cloud, development, and architecture.</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
  {certificates.map((cert, i) => (
    <motion.div
      key={cert.name}
      onClick={() => setActiveCert(cert)}   // ✅ click opens modal
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.03 }}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer bg-card border border-gold-subtle rounded-2xl overflow-hidden group"
    >
      {/* IMAGE */}
      <img
        src={cert.image}
        alt={cert.name}
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
        <span className="text-xs text-white">{cert.name}</span>
      </div>
    </motion.div>
  ))}
</div>
<AnimatePresence>
  {activeCert && (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setActiveCert(null)}
    >
      <motion.div
        className="max-w-4xl w-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={activeCert.image}
          alt={activeCert.name}
          className="w-full h-auto rounded-xl shadow-2xl"
        />

        <p className="text-center text-white mt-4 text-sm">
          {activeCert.name}
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </section>
  );
}
