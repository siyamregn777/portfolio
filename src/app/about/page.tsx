'use client';

import { FaCode, FaServer, FaRobot, FaTools } from 'react-icons/fa';
import './about.css';
import { useTheme } from '@/context/ThemeContext'; // Import the useTheme hook

export default function About() {
  const { theme } = useTheme(); // Access the theme state

  return (
    <section id="about" className={`about section ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="container">
        <h2 className="about-heading">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I’m a passionate <strong>Full-Stack Developer</strong> with expertise in modern web technologies, 
              backend development, and AI-driven solutions. With a strong foundation in 
              JavaScript, TypeScript, React, Next.js, and Node.js, I build high-performance, 
              scalable, and user-friendly applications.
            </p>
            <p>
              Beyond coding, I have experience in virtual assistance, ensuring efficiency 
              and organization for clients. I am detail-oriented, always eager to learn, 
              and committed to delivering top-notch solutions. Let’s collaborate and bring 
              your ideas to life!
            </p>
          </div>
          <div className="about-skills">
            <div className="skill-card">
              <FaCode className="skill-icon" />
              <h3>Frontend</h3>
              <p>React, Next.js, HTML, CSS,   Vue.js,   JavaScript, TypeScript</p>
            </div>
            <div className="skill-card">
              <FaServer className="skill-icon" />
              <h3>Backend</h3>
              <p>Node.js, Express, Next.js, MongoDB, Postgres, REST APIs</p>
            </div>
            <div className="skill-card">
              <FaRobot className="skill-icon" />
              <h3>AI & Automation</h3>
              <p>AI-driven solutions</p>
            </div>
            <div className="skill-card">
              <FaTools className="skill-icon" />
              <h3>Tools</h3>
              <p>Git, Docker, VS Code, Postman ,Apidog</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}