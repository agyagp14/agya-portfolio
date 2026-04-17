import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import dcl from '../../assets/vdo/swars.mp4';
import swars from '../../assets/vdo/dcl.mp4';
import wam from '../../assets/vdo/wam.mp4';
import iepfa from '../../assets/vdo/screen-capture (3).mp4';
import upms from '../../assets/vdo/screen-capture (2).mp4';
import ipie from '../../assets/vdo/screen-capture (1).mp4';
import ifsca from '../../assets/vdo/ifsca.mp4';
import hrms from '../../assets/vdo/hrms.mp4';
import form from '../../assets/vdo/Form.mp4';
import certi from '../../assets/vdo/Certi.mp4';
import mca from '../../assets/img/mca.png';
import mof from '../../assets/img/mof.jpg';
import niti from '../../assets/img/niti.jpg';

interface Project {
  tag: string;
  tagClass: string;
  name: string;
  desc: string;
  tech: string[];
  category: 'professional' | 'personal' | 'academic';
  video?: string; // Optional video URL for the project card placeholder
  thumbnail?: string; // Optional thumbnail image for the project card (if not using video)
}

const projects: Project[] = [
  // Professional - Solution Architecture (top)
{
    tag: 'Government · Niti Aayog',
    tagClass: 'tag-gov',
    name: 'UPMS — Unified Project Management System',
    desc: 'End-to-end digitized R&D project lifecycle management system for Niti Aayog. Covers proposal management, peer review, multi-level approvals, PFMS fund disbursement, and policy analytics dashboards.',
    tech: ['Architecture Design', 'Workflow Engine', 'Prototyping', 'Analytics', 'AI/ML'],
    category: 'professional',
        video: upms,
        thumbnail: niti,
  },
  {
    tag: 'Government · MCA',
    tagClass: 'tag-gov',
    name: 'IEPFA — Investor Education & Protection Fund Authority',
    desc: 'Centralized digital platform under Ministry of Corporate Affairs to streamline the entire lifecycle of unclaimed investor asset recovery — from citizen claim submission to PFMS disbursement.',
    tech: ['Solution Consulting', 'HLD Design', 'Regulatory Workflow', 'Wireframing', 'Client requirements'],
    category: 'professional',
        video: iepfa,
        thumbnail: mca,
  },
  
    {
    tag: 'Government · MCA',
    tagClass: 'tag-gov',
    name: 'iPIE — Integrated Platform for Insolvency Ecosystem',
    desc: "National-level digital backbone for India's entire insolvency & bankruptcy ecosystem under IBC 2016. Designed to serve NCLT, IBBI, Insolvency Professionals, creditors, and regulators on a unified platform.",
    tech: ['Solution Architecture', 'HLD Design', 'Workflow Design', 'Technical Proposal', 'MCA / IBC'],
    category: 'professional',
       video: ipie,
        thumbnail: mca,
  },
  {
    tag: 'Government · MoF',
    tagClass: 'tag-gov',
    name: 'IFSCA — International Financial Services',
    desc: 'Developed the end-to-end solution architecture, technical proposal, and enterprise ERP blueprint for IFSCA, enabling digital governance, regulatory workflows, and financial ecosystem integration.',
    tech: ['Solution Architecture', 'Technical Presentation', 'Client Demo', 'Government Digital'],
    category: 'professional',
        video: ifsca,
        thumbnail: mof,
  },
  // Professional - Corporate Development
  {
    tag: 'Personal · Full Stack',
    tagClass: 'tag-personal',
    name: 'Enterprise ERP System',
    desc: 'Full-stack corporate ERP with modular architecture: Task Management, Training Management, User Management, Attendance Tracking, Reimbursement Workflows, and multi-level Approval Engines.',
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'RBAC','Spring Security', 'JWT', 'Redux'],
    category: 'personal',
        video: hrms,
  },
  // Personal
  {
    tag: 'Personal · MERN',
    tagClass: 'tag-personal',
    name: 'Certificate Generation System',
    desc: 'MERN stack application for automated certificate generation featuring RBAC, multi-level workflow approval, customizable drag-and-drop form builder engine, PDF generation, and email notifications.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RBAC', 'PDF Gen'],
    category: 'personal',
        video: certi,
  },
    // Personal
  {
    tag: 'Personal · MERN',
    tagClass: 'tag-personal',
    name: 'Custom Form Builder',
    desc: 'MERN stack application for automated customizable form generation featuring customizable drag-and-drop form builder engine and PDF/Word docx generation.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RBAC', 'PDF Gen'],
    category: 'personal',
        video: form,
  },
  // Academic

  {
    tag: 'Academic · React',
    tagClass: 'tag-academic',
    name: 'Disney+ Hotstar Clone',
    desc: 'Streaming platform UI clone with dynamic content loading, category-based browsing, trailer playback, and responsive streaming-like experience.',
    tech: ['React.js', 'Firebase', 'CSS3', 'Redux'],
    category: 'academic',
    video: dcl,
  },
  {
    tag: 'Academic · JavaScript',
    tagClass: 'tag-academic',
    name: 'Whack a Mole',
    desc: 'Collection of browser-based JavaScript games demonstrating strong fundamentals in DOM manipulation, event handling, and game logic design.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
    category: 'academic',
        video: wam,
  },
];

type Tab = 'professional' | 'personal' | 'academic';

const tabs: { key: Tab; label: string }[] = [
  { key: 'professional', label: 'Professional' },
  { key: 'personal', label: 'Personal' },
  { key: 'academic', label: 'Academic' },
];


function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}) {
  return (
    <motion.div
      onClick={() => onClick(project)}   // ✅ whole card clickable
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="cursor-pointer bg-card border border-gold-subtle rounded-2xl overflow-hidden transition-all hover:border-gold hover:shadow-card group"
    >
      {/* Thumbnail instead of video autoplay */}
      <div className="h-[0px] relative overflow-hidden">
  {project.thumbnail ? (
    <img
      src={project.thumbnail}
      alt={project.name}
      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
    />
  ) : (
    <div className="w-full h-full bg-gradient-to-br from-card to-muted" />
  )}

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <Play size={28} className="text-white opacity-90 group-hover:scale-110 transition" />
  </div>
</div>

      <div className="p-6">
        <span className={`inline-block text-[0.7rem] uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${project.tagClass}`}>
          {project.tag}
        </span>

        <div className="font-display text-lg font-bold mb-2.5">
          {project.name}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[0.72rem] bg-muted/30 border border-gold-subtle rounded-full px-2.5 py-1 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 mb-3 mt-5 italic">
        Click for details and demo video
        </p>
      </div>
    </motion.div>
  );
}

function SolutionArchCarousel({
  projects: items,
  onProjectClick,
}: {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 460, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-xl font-bold">
          Solution Architecture <span className="text-gradient-gold">Projects</span>
        </h3>
        <div className="flex gap-3">
          <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-full border border-gold-subtle bg-card flex items-center justify-center text-foreground hover:border-gold hover:text-gold transition-all">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scroll(1)} className="w-10 h-10 rounded-full border border-gold-subtle bg-card flex items-center justify-center text-foreground hover:border-gold hover:text-gold transition-all">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-7 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {items.map((p, i) => (
          <div key={p.name} className="min-w-[420px] max-w-[420px] snap-start flex-shrink-0">
          <ProjectCard
  key={p.name}
  project={p}
  index={i}
  onClick={onProjectClick}
/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('professional');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const solutionArchProjects = projects.filter(
    (p) => p.category === 'professional' && p.tagClass === 'tag-gov'
  );
  const devProjects = projects.filter(
    (p) => p.category === 'professional' && p.tagClass !== 'tag-gov'
  );
  const personalProjects = projects.filter((p) => p.category === 'personal');
  const academicProjects = projects.filter((p) => p.category === 'academic');

  return (
    <section id="projects" className="py-24 px-5 md:px-10 bg-section-alt">
      <div className="max-w-[1300px] mx-auto">

        {/* Header */}
        <AnimatedSection>
          <div className="text-xs uppercase tracking-[2.5px] text-gold border-l-[3px] border-gold pl-3 mb-3.5">
            Projects
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-[560px] leading-relaxed mb-10">
            From winning government bids to full-stack apps — each project is a story of problem-solving and execution.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection className="mb-10">
          <div className="flex gap-2 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-gradient-gold text-primary-foreground shadow-gold'
                    : 'bg-card border border-gold-subtle text-muted-foreground hover:border-gold hover:text-gold'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'professional' && (
              <>
                <SolutionArchCarousel
                  projects={solutionArchProjects}
                  onProjectClick={setActiveProject}   // ✅ FIXED
                />

              

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {devProjects.map((p, i) => (
                    <ProjectCard
                      key={p.name}
                      project={p}
                      index={i}
                      onClick={setActiveProject}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === 'personal' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {personalProjects.map((p, i) => (
                  <ProjectCard
                    key={p.name}
                    project={p}
                    index={i}
                    onClick={setActiveProject}
                  />
                ))}
              </div>
            )}

            {activeTab === 'academic' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {academicProjects.map((p, i) => (
                  <ProjectCard
                    key={p.name}
                    project={p}
                    index={i}
                    onClick={setActiveProject}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ✅ VIDEO MODAL (SEPARATE) */}
        <AnimatePresence>
  {activeProject && (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setActiveProject(null)}
    >
      <motion.div
        className="bg-card max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 🎥 VIDEO */}
        {activeProject.video && (
          <video
            src={activeProject.video}
            controls
            autoPlay
            className="w-full h-[300px] object-cover"
          />
        )}

        {/* 📄 DETAILS */}
        <div className="p-6">
          <span className={`inline-block text-xs px-3 py-1 rounded-full mb-3 ${activeProject.tagClass}`}>
            {activeProject.tag}
          </span>

          <h3 className="font-display text-2xl font-bold mb-3">
            {activeProject.name}
          </h3>

          <p className="text-muted-foreground mb-5 leading-relaxed">
            {activeProject.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {activeProject.tech.map((t) => (
              <span key={t} className="text-xs bg-muted/30 border border-gold-subtle rounded-full px-3 py-1">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </section>
  );
}
