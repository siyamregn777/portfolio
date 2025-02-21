'use client';
import Image from 'next/image';
import image1 from '../../public/assets/img/circle-linkedin-512.webp';
import image2 from '../../public/assets/img/facebook-logo-facebook-icon-transparent-free-png.webp';
import image3 from '../../public/assets/img/github-6980894_960_720.webp';

export default function Header() {
  const handleScroll = (id: string) => {
    console.log(`Scrolling to ${id}`);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID ${id} not found`);
    }
  };

  return (
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
            <a onClick={() => handleScroll('home')}>Home</a>
          </li>
          <li>
            <a onClick={() => handleScroll('about')}>About</a>
          </li>
          <li>
            <a onClick={() => handleScroll('portfolio')}>Portfolio</a>
          </li>
          <li>
            <a onClick={() => handleScroll('resume')}>Resume</a>
          </li>
          <li>
            <a onClick={() => handleScroll('contact')}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
