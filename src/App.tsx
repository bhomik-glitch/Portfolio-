import React, { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import MouseTrail from './components/MouseTrail';
import AboutSection from './components/AboutSection';

import backgroundVideo from './assets/background/background.mp4'; // Import your video
import pfpImage from './assets/pfp/pfp.png';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  
  // Refs for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  // Ref for the scrollable main content area
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to update active section on scroll
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: mainContentRef.current, // Use the specific scrollable area as the root
        rootMargin: '0px',
        threshold: 0.2, // 20% of the section must be visible
      }
    );

    const sections = [
      aboutRef.current,
      servicesRef.current,
      skillsRef.current,
      experienceRef.current,
      projectsRef.current,
      educationRef.current,
    ];

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === 'about') {
      if (mainContentRef.current) {
        mainContentRef.current.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
      return;
    }
    
    const refs = {
      about: aboutRef,
      services: servicesRef,
      skills: skillsRef,
      experience: experienceRef,
      projects: projectsRef,
      education: educationRef,
    };

    const targetRef = refs[sectionId as keyof typeof refs];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen relative p-4">
      <MouseTrail />
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Container - 85% of viewport */}
      <div className="relative z-10 h-[calc(100vh-2rem)] max-w-[95vw] mx-auto bg-black/65 rounded-3xl border border-white/10 overflow-hidden">
        {/* macOS-style Window Frame */}
        <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 px-6 h-16 flex items-center">
          <div className="flex-1 text-center">
            <span className="text-white/70 text-sm font-medium">Portfolio - Bhomik Pilkhwal</span>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
            <img
              src={pfpImage}
              alt="Bhomik Pilkhwal"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Content Area with Sidebar and Main Content */}
        <div className="flex h-[calc(100%-4rem)]">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar activeSection={activeSection} onSectionClick={scrollToSection} />
          </div>

          {/* Main Scrollable Content Area */}
          <div ref={mainContentRef} className="flex-1 overflow-y-auto scrollbar-hide scroll-smooth relative pb-32">
            <div className="p-6 lg:p-8 space-y-12">
              {/* About Section */}
              <section ref={aboutRef} id="about" className="scroll-mt-8">
                <HeroSection />
                <AboutSection />
              </section>

              {/* Services Section */}
              <section ref={servicesRef} id="services" className="scroll-mt-8">
                <ServicesSection />
              </section>

              {/* Skills Section */}
              <section ref={skillsRef} id="skills" className="scroll-mt-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Skills & Technologies</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#6A94F5] to-[#A353F2] rounded-full"></div>
                </div>
                <SkillsSection />
              </section>

              {/* Experience Section */}
              <section ref={experienceRef} id="experience" className="scroll-mt-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Work Experience</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#6A94F5] to-[#A353F2] rounded-full"></div>
                </div>
                <ExperienceSection />
              </section>

              {/* Projects Section */}
              <section ref={projectsRef} id="projects" className="scroll-mt-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#6A94F5] to-[#A353F2] rounded-full"></div>
                </div>
                <ProjectsSection />
              </section>

              {/* Education Section */}
              <section ref={educationRef} id="education" className="scroll-mt-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Education & Certifications</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#6A94F5] to-[#A353F2] rounded-full"></div>
                </div>
                <EducationSection />
              </section>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-[#1F1E52]/30 backdrop-blur-xl border-t border-white/10 p-4">
          <div className="flex overflow-x-auto gap-2 scrollbar-hide">
            {[
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'education', label: 'Education' },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-[#A353F2]/20 text-[#D773FA]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;