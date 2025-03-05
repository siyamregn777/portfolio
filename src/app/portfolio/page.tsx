'use client'
import React from 'react';
import './portfolio.css';
import Image from 'next/image';
import image1 from '../../../public/assets/img/Screenshot 2025-03-05 170721.png';
import image2 from '../../../public/assets/img/Screenshot 2025-03-05 170450.png'
import image3 from '../../../public/assets/img/Screenshot 2025-03-05 183027.png'
import image4 from '../../../public/assets/img/Screenshot 2025-03-05 183703.png'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Tourism Africa",
      description: "A web application for managing daily tasks efficiently.",
      image: image1,
      link: "https://africa-tourism.vercel.app/"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "An online store with a user-friendly interface.",
      image: image2,
      link: "https://ecommerceshop-alpha.vercel.app/"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio to showcase projects and skills.",
      image: image3,
      link: "https://portfoliomine-seven.vercel.app/"
    },
    {
      id: 4,
      title: "Ecommerce Chatboat",
      description: "Find recipes based on ingredients you have at home.",
      image: image4,
      link: "https://ecommercechatbot.vercel.app/"
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
              {/* Use regular anchor tags to link to external websites */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image src={project.image} alt={project.title} width={300} height={200} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
