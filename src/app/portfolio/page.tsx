'use client';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './portfolio.css';

const projects = [
  {
    id: 1,
    title: "Ecommerce Store",
    description: "Custom Shopify ecommerce website built with Liquid templating, featuring product customization and seamless checkout experience.",
    technologies: ["Tailwind", "Next-js", "HTML/CSS", "JavaScript"],
    image: "/assets/img/photo_2025-04-27_03-14-04.jpg",
    live: "https://glowing-storess.vercel.app/",
    
  },
  {
    id: 2,
    title: "Tourism Africa",
    description: "A comprehensive platform showcasing African tourism destinations with booking functionality and interactive maps.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Mapbox"],
    image: "/assets/img/photo_2025-04-07_12-18-31.jpg",
    live: "https://africa-tourism.vercel.app/",
   
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-featured online store with product management, cart system, secure checkout, and admin dashboard.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "/assets/img/photo_2025-04-07_12-19-10.jpg",
    live: "https://e-commerce-store-lac-rho.vercel.app/",
   
  },
  {
    id: 4,
    title: "Task Management",
    description: "Productivity app with drag-and-drop interface, team collaboration features, and progress tracking.",
    technologies: ["Vue.js", "Tailwind CSS", "Firebase", "Vuex"],
    image: "/assets/img/photo_2025-04-07_12-19-02.jpg",
    live: "https://taskmanage-ecru.vercel.app/",
   
  }
];

export default function Portfolio() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="section-title">My <span className="highlight">Work</span></h2>
          <p className="section-subtitle">A showcase of my best projects and work</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {projects.map((project ) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={400}
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    {/* {project.code && (
                      <a 
                        href={project.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub /> View Code
                      </a>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}