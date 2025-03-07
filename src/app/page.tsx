'use client';

import { useEffect } from 'react';
import Typed from 'typed.js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from './about/page';
import Contact from './contact/page';
import Portfolio from './portfolio/page';
import Resume from './resume/page';
import './globals.css';
import { useTheme } from '@/context/ThemeContext'; // Import the useTheme hook

export default function Home() {
  const { theme, toggleTheme } = useTheme(); // Use the theme state and toggle function

  // Initialize Typed.js
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ['Full Stack Developer', 'Freelancer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="header-container">
      <Header />
      <div className="content-display main-content">
        {/* Light/Dark theme toggle button */}
        <button onClick={toggleTheme} className="theme-toggle">
          Toggle Theme
        </button>

        {/* Home Section */}
        <section id="home" className="hero section dark-background">
          <div className="container">
            <h2 style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>Siyamregn Yeshidagna</h2>
            <p style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
              I`m a <span className="typed"></span>
            </p>
          </div>
        </section>

        {/* Render child components without passing the `theme` prop */}
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}