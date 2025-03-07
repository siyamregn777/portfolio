'use client';

import { useState, useEffect } from 'react';
import Typed from 'typed.js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from './about/page';
import Contact from './contact/page';
import Portfolio from './portfolio/page';
import Resume from './resume/page';
import './globals.css';

export default function Home() {
  const [theme, setTheme] = useState<string>('light');

  // Initialize Typed.js
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ['Full Stack Developer', 'Freelancer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    // Set theme based on the current state
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, [theme]); // Run when theme changes

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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

        {/* Pass the `theme` prop to child components */}
        <About theme={theme} />
        <Portfolio theme={theme} />
        <Resume />
        <Contact theme={theme} />
        <Footer />
      </div>
    </div>
  );
}