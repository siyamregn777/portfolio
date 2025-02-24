'use client'
import React from 'react';
import './portfolio.css';
import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../../public/assets/img/634455157d2e665d824a49064524b49a.jpg';
import image2 from '../../../public/assets/img/circle-linkedin-512.webp'
import image3 from '../../../public/assets/img/images.png'
import image4 from '../../../public/assets/img/pngtree-thin-line-house-icon-isolated-on-white-background-vector-png-image_40618990.jpg'
import image5 from '../../../public/assets/img/github-6980894_960_720.webp'
import image6 from '../../../public/assets/img/simple-flat-isolated-people-icon-free-vector.jpg'
export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Task Management App",
      description: "A web application for managing daily tasks efficiently.",
      image: image1,
      link: "https://example.com/task-management"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "An online store with a user-friendly interface.",
      image: image2,
      link: "https://example.com/e-commerce"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio to showcase projects and skills.",
      image: image3,
      link: "https://example.com/portfolio"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A platform for writing and sharing blog posts.",
      image: image4,
      link: "https://example.com/blog"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "An app to track fitness activities and progress.",
      image: image5,
      link: "https://example.com/fitness-tracker"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Find recipes based on ingredients you have at home.",
      image: image6,
      link: "https://example.com/recipe-finder"
    }
  ];

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2>Portfolio</h2>
        <p>Here are some of my projects:</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <Link href={`/project/${project.id}`} legacyBehavior>
                <a>
                  <Image src={project.image} alt={project.title} width={300} height={200} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}