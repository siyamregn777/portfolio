import Link from 'next/link';
import './page.css';  // Import the CSS file

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Hi, I'm Siyamregn Yeshidagna</h1>
      <p className="description">Full Stack Developer | Building scalable and modern web applications</p>
      <div className="links">
        <Link href="/about">About Me</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
