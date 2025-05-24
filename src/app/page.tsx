"use client"
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import EducationSection from '@/components/sections/education-section';
import {ExperienceSection} from '@/components/sections/experience-section';
import SkillsSection from '@/components/sections/skills-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <EducationSection id="education" />
      <ExperienceSection id="experience" />
      <SkillsSection id="skills" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </>
  );
}
