import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export default function Home() {
  return (
    <div className="header-container">
      <Header />
      <div className="content-display">
        <section id="hero" className="hero section dark-background">
          <div className="container">
            <h2>Your Name</h2>
            <p>I`m a <span className="typed" data-typed-items="Designer, Developer, Freelancer"></span></p>
          </div>
        </section>
        <Footer />
      </div>
      
    </div>
  );
}