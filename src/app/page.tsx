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
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="header-container">
      <Header />
      <div className="content-display main-content"> {/* Add main-content class */}
        {/* Home Section */}
        <section id="home" className="hero section dark-background">
          <div className="container">
            <h2>Siyamregn Yeshidagna</h2>
            <p>I`m a <span className="typed"></span></p> {/* Removed data-typed-items */}
          </div>
        </section>

        <About/>
        <Portfolio/>
        <Resume/>
        <Contact/>
        <Footer />
      </div>
    </div>
  );
}
