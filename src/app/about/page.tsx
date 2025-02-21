export const aboutDescription = (
  <section id="about" className="about section">
    <div className="container">
      <h2>About Me</h2>
      <p>More details about your background, skills, and experience.</p>
    </div>
  </section>
);

export default function About() {
  return (
    <div>
      {aboutDescription}
    </div>
  );
}