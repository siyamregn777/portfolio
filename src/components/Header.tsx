'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/img/images (2).png';
import '../styles/header.css';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsActive(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          <Image src={logo} alt="Siyamregn Yeshidagna" width={40} height={40} />
          <span>Siyamregn</span>
        </Link>

        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-menu ${isActive ? 'active' : ''}`}>
          <ul>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleNavClick('home')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleNavClick('about')}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleNavClick('portfolio')}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleNavClick('resume')}>
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleNavClick('contact')}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}