'use client';

import React from 'react';
import './portfolio.css';
import Image from 'next/image';
import image1 from '../../../public/assets/img/Screenshot 2025-03-05 170721.png';
import image2 from '../../../public/assets/img/photo_2025-04-01_16-45-07.jpg';
import image3 from '../../../public/assets/img/Screenshot 2025-03-20 191000.png';
import image4 from '../../../public/assets/img/photo_2025-04-01_16-49-59.jpg';
import { useTheme } from '@/context/ThemeContext'; 

export default function Portfolio() {
  const { theme } = useTheme(); 
  const projects = [
    {
      id: 1,
      title: "Tourism Africa",
      description: "A web application for managing daily tasks efficiently.\nFull Stack",
      image: image1,
      link: "https://africa-tourism.vercel.app/"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "An online store and shop with a user-friendly interface.\nFull Stack",
      image: image2,
      link: "https://e-commerce-store-lac-rho.vercel.app/"
    },
    {
      id: 3,
      title: "Task Management",
      description: "A personal task management to arrange and track the task.\nFront End",
      image: image3,
      link: "https://taskmanage-ecru.vercel.app/"
    },
    {
      id: 4, // Changed id to 4
      title: "Shopify Ecommerce",
      description: "Shopify website using Liquid.\nFront End",
      image: image4,
      link: "https://qn0mv69od1wmys76-74521411821.shopifypreview.com"
    },
  ];

  return (
    <section id="portfolio" className={`portfolio section ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="container">
        <h2>Portfolio</h2>
        <p>Here are some of my projects:</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image src={project.image} alt={project.title} width={300} height={200} />
                <h3>{project.title}</h3>
                {/* Split the description by '\n' and render each part in a separate <p> */}
                {project.description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
