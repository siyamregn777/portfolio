import Header from '@/components/Header';

export default function Contact() {
  return (
    <div className="header-container">
      <Header />
      <div className="content-display">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me:</p>
        <ul>
          <li>Email: your.email@example.com</li>
          <li>Phone: +123 456 7890</li>
          <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your Profile</a></li>
        </ul>
      </div>
    </div>
  );
}