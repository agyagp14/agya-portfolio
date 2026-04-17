import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import mca from '../../assets/img/mca.png';
import nic from '../../assets/img/NIC.png';
import negd from '../../assets/img/negd.png';
import nhai from '../../assets/img/nhai.png';
import mohua from '../../assets/img/mohua.png';
import moa from '../../assets/img/moa.png';
import dic from '../../assets/img/dic.png';
import niti from '../../assets/img/niti.jpg';

const clients = [
  { logo: mca, name: 'MCA', desc: 'Ministry of Corporate Affairs' },
  { logo: nic, name: 'NIC', desc: 'National Informatics Centre — Core digital infrastructure partner' },
  { logo: negd, name: 'NeGD', desc: 'National e-Governance Division — Digital India transformation' },
  { logo: nhai, name: 'NHAI', desc: 'National Highways Authority of India — Infrastructure digital systems' },
  { logo: mohua, name: 'MoHUA', desc: 'Ministry of Housing & Urban Affairs — Smart city digital governance' },
  { logo: moa , name: 'Ministry of Agriculture', desc: 'Agricultural digital ecosystem and farmer-centric platforms' },
  { logo: dic, name: 'DIC', desc: 'Department for Internal Trade & Commerce — Digital solutions' },
  { logo: niti, name: 'Niti Aayog', desc: 'Premier policy think tank of the Government of India' },
];



export default function Clients() {
  return (
    <section id="clients" className="py-24 px-5 md:px-10 bg-section-alt">
      <div className="max-w-[1300px] mx-auto">
        <AnimatedSection>
          <div className="text-xs uppercase tracking-[2.5px] text-gold border-l-[3px] border-gold pl-3 mb-3.5">Client Interactions</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Government Ministries &<br /><span className="text-gradient-gold">Organizations Served</span></h2>
          <p className="text-muted-foreground text-base max-w-[560px] leading-relaxed mb-14">Delivering technical architecture and solution presentations directly to India's central government bodies.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-card border border-gold-subtle rounded-2xl p-7 text-center transition-all hover:border-gold hover:shadow-card cursor-default"
            >
              <img src={c.logo} alt={c.name} className="h-12 mx-auto mb-4 object-contain transition duration-300" />
              <div className="font-semibold text-sm mb-1.5">{c.name}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
