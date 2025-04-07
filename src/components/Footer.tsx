import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="social-links">
          <Link href="https://github.com/siyamregn777" className="social-link" target="_blank">
            <FaGithub size={20} />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" className="social-link" target="_blank">
            <FaLinkedin size={20} />
          </Link>
          <Link href="https://twitter.com/yourprofile" className="social-link" target="_blank">
            <FaTwitter size={20} />
          </Link>
          <Link href="mailto:siyamregnyeshidagna777@gmail.com" className="social-link">
            <FaEnvelope size={20} />
          </Link>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Siyamregn Yeshidagna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}