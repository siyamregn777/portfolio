'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [activePage, setActivePage] = useState('');

  return (
    <div className="header-container">
      <header className="header dark-background">
        <div className="profile-img">
          <Image
            src="/assets/img/my-profile-img.jpg"
            alt="Profile"
            width={150}
            height={150}
            className="img-fluid rounded-circle"
          />
        </div>
        <h1 className="sitename">Your Name</h1>
        <nav className="navmenu">
          <ul>
            <li>
              <Link
                href="/"
                onClick={() => setActivePage('home')}
                className={activePage === 'home' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setActivePage('about')}
                className={activePage === 'about' ? 'active' : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                onClick={() => setActivePage('portfolio')}
                className={activePage === 'portfolio' ? 'active' : ''}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setActivePage('contact')}
                className={activePage === 'contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

     
    </div>
  );
}