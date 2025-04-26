import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope} from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/footer.css';

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/siyamregn777",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn"
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/yourprofile",
      label: "Twitter"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:siyamregnyeshidagna777@gmail.com",
      label: "Email"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={link.url} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="tooltip">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="footer-meta">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Siyamregn Yeshidagna. All rights reserved.
            </p>
            
          </div>
        </motion.div>
      </div>
    </footer>
  );
}