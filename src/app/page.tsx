'use client';

import { useEffect } from 'react';
import Typed from 'typed.js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { aboutDescription } from './about/page';
import {contactDescription} from './contact/page';
import { portfolioDescription } from './portfolio/page';
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
      <div className="content-display">
        {/* Home Section */}
        <section id="home" className="hero section dark-background">
          <div className="container">
            <h2>siyamregn Yeshidagna</h2>
            <p>I`m a <span className="typed" data-typed-items="Full Stack Developer, Freelancer"></span></p>
          </div>
        </section>

        {aboutDescription}
        
        {portfolioDescription}

        {contactDescription}

        <Footer />
      </div>
    </div>
  );
}