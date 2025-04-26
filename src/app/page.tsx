'use client';

import { useEffect } from 'react';
import Typed from 'typed.js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from './about/page';
import Contact from './contact/page';
import Portfolio from './portfolio/page';
import './globals.css';

export default function Home() {
  // Initialize Typed.js
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ['Full Stack Developer', 'Freelancer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="main-container">
      <Header />
      <div className="content">
        {/* Hero Section */}
        <section id="home" className="hero section">
          <div className="container">
            <h1>Siyamregn Yeshidagna</h1>
            <p className="hero-subtitle">
              I`m a <span className="typed"></span> Based in Ethiopia
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}