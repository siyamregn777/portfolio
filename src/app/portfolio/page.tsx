import Header from '@/components/Header';

export default function Portfolio() {
  return (
    <div className="header-container">
      <Header />
      <div className="content-display">
        <h2>Portfolio</h2>
        <p>Here are some of my projects:</p>
        <ul>
          <li>Project 1: A web app for task management.</li>
          <li>Project 2: An e-commerce platform.</li>
          <li>Project 3: A portfolio website.</li>
        </ul>
      </div>
    </div>
  );
}