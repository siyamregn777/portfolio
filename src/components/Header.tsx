'use client';
import { useState } from 'react';
import Image from 'next/image';
import image1 from '../../public/assets/img/circle-linkedin-512.webp';
import image2 from '../../public/assets/img/facebook-logo-facebook-icon-transparent-free-png.webp';
import image3 from '../../public/assets/img/github-6980894_960_720.webp';
import image4 from '../../public/assets/img/634455157d2e665d824a49064524b49a.jpg';
import image5 from '../../public/assets/img/pngtree-thin-line-house-icon-isolated-on-white-background-vector-png-image_40618990.jpg';
import image6 from '../../public/assets/img/portfolio-icon-design-free-vector.jpg';
import image7 from '../../public/assets/img/simple-flat-isolated-people-icon-free-vector.jpg';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSidebarOpen(false); // Close sidebar after clicking a link on small screens
  };

  return (
    <>
      {/* Toggle Button for Small Screens */}
      <button
        className="sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      {/* Header/Sidebar */}
      <header className={`header dark-background ${isSidebarOpen ? 'open' : ''}`}>
        <div className="profile-img">
          <Image
            src="/my-profile-img.jpg" // Correct path to the image in the public directory
            alt="Profile"
            width={150}
            height={150}
            className="img-fluid rounded-circle"
          />
        </div>
        <h1 className="sitename">Siyamregn Yeshidagna</h1>
        <nav className="navmenu">
          {/* Social Media Icons */}
          <ul className="account">
            <li>
              <a href="https://github.com/siyamregn777" target="_blank" rel="noopener noreferrer">
                <Image src={image3} alt="GitHub" width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <Image src={image1} alt="LinkedIn" width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <Image src={image2} alt="Facebook" width={30} height={30} />
              </a>
            </li>
          </ul>

          {/* Navigation Links */}
          <ul>
            <li>
              <a onClick={() => handleScroll('home')}>
                <Image src={image5} alt="Home" width={20} height={20} className="add" /> Home
              </a>
            </li>
            <li>
              <a onClick={() => handleScroll('about')}>
                <Image src={image7} alt="About" width={20} height={20} className="add" /> About
              </a>
            </li>
            <li>
              <a onClick={() => handleScroll('portfolio')}>
                <Image src={image6} alt="Portfolio" width={20} height={20} className="add" /> Portfolio
              </a>
            </li>
            <li>
              <a onClick={() => handleScroll('resume')}>
                <Image src={image4} alt="Resume" width={20} height={20} className="add" /> Resume
              </a>
            </li>
            <li>
              <a onClick={() => handleScroll('contact')}>
                <Image src={image7} alt="Contact" width={20} height={20} className="add" /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}