'use client';

import { FaCode, FaServer, FaTools,  FaMobile } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './about.css';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skillCards = [
    {
      icon: <FaCode className="skill-icon" />,
      title: "Frontend",
      skills: "React, Next.js, HTML5, CSS3, JavaScript, TypeScript, Vue.js"
    },
    {
      icon: <FaServer className="skill-icon" />,
      title: "Backend",
      skills: "Node.js, Express, Next.js API, MongoDB, PostgreSQL, REST APIs"
    },
    {
      icon: <FaMobile className="skill-icon" />,
      title: "Mobile",
      skills: "React Native, Progressive Web Apps, Responsive Design"
    },
    {
      icon: <FaTools className="skill-icon" />,
      title: "Tools",
      skills: "Git, Docker, VS Code, Postman, Apidog, CI/CD"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          About <span className="highlight">Me</span>
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="intro-text">
              I`m a passionate <strong>Full-Stack Developer</strong> and <strong>AI Enthusiast</strong> with expertise in modern web technologies, backend development, and AI-driven solutions.
            </p>
            <p>
              With extensive experience in JavaScript, TypeScript, React, Next.js, and Node.js, I specialize in building high-performance, scalable applications that deliver exceptional user experiences.
            </p>
            <p>
              My background includes virtual assistance and project management, giving me unique insights into workflow optimization and client communication. I`m detail-oriented, constantly learning, and committed to delivering innovative solutions.
            </p>
            <p className="closing-text">
              Let`s collaborate to transform your ideas into reality with cutting-edge technology!
            </p>
          </motion.div>

          <div className="about-skills">
            {skillCards.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  ...fadeIn,
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      duration: 0.6,
                      delay: index * 0.1 
                    } 
                  }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="skill-icon-container">
                  {skill.icon}
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.skills}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}