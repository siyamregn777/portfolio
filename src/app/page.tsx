'use client'; // Mark this as a Client Component

import { useEffect } from 'react';
import Typed from 'typed.js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export default function Home() {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed('.typed', {
      strings: ['Full Stack Developer', 'Freelancer'], // Add your strings here
      typeSpeed: 100, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed in milliseconds
      loop: true, // Loop the animation
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="header-container">
      <Header />
      <div className="content-display">
        <section id="hero" className="hero section dark-background">
          <div className="container">
            <h2>siyamregn Yeshidagna</h2>
            <p>I`m a <span className="typed" data-typed-items="Full Stack Developer, Freelancer"></span></p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}