'use client';
import Image from 'next/image';

export default function Header() {
  const handleScroll = (id: string) => {
    console.log(`Scrolling to ${id}`); // Debugging
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID ${id} not found`); // Debugging
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
            <a onClick={() => handleScroll('contact')}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}