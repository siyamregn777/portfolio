import Link from 'next/link';
import './contact.css';  // Import the CSS file

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
      
      <Link href="/">🔙 Back to Home</Link>
    </div>
  );
}
