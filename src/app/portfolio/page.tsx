'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './portfolio.css';
import Image from 'next/image';
const projects = [
  {
    id: 4,
    title: "Shopify Store",
    description: "Custom Shopify ecommerce website built with Liquid templating.",
    technologies: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
    image: "/assets/img/shopify.jpg",
    live: "https://yz6sdp-vb.myshopify.com/"
  },
  {
    id: 1,
    title: "Tourism Africa",
    description: "A web application for showcasing African tourism destinations with booking functionality.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    image: "/assets/img/africa.png",
    github: "https://github.com/siyamregn777/tourism-africa",
    live: "https://africa-tourism.vercel.app/"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured online store with product management, cart, and checkout.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    image: "/assets/img/ecomeerce.jpg",
    live: "https://e-commerce-store-lac-rho.vercel.app/"
  },
  {
    id: 3,
    title: "Task Management",
    description: "A productivity app for organizing and tracking personal and team tasks.",
    technologies: ["Vue.js", "Css"],
    image: "/assets/img/task.png",
    live: "https://taskmanage-ecru.vercel.app/"
  }
  
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-subtitle">Here are some of my recent projects</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <Image src={project.image} alt={project.title} width={400} height={400} />
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                  )}
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}