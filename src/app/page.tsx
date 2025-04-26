'use client';

import { useEffect } from 'react';
import Typed from 'typed.js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from './about/page';
import Contact from './contact/page';
import Portfolio from './portfolio/page';
import './globals.css';
// import './page.css'; // New CSS file

export default function Home() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ['Full Stack Developer', 'Freelancer', 'UI/UX Enthusiast', 'Open Source Contributor'],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="main-container">
      <Header />
      <div className="content">
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Siyamregn Yeshidagna</h1>
            <p className="hero-subtitle">
              I`m a <span className="typed"></span> based in Ethiopia.
            </p>
            <div className="hero-buttons">
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