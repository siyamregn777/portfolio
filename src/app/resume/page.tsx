import Header from "@/components/Header";

export const resumeDescription=(
    <section id="resume" className="resume section">
    <div className="container">
      <h2>Resume</h2>
      <p>Here are some of my projects:</p>
      <ul>
        <li>Project 1: A web app for task management.</li>
        <li>Project 2: An e-commerce platform.</li>
        <li>Project 3: A portfolio website.</li>
      </ul>
    </div>
  </section>
);
export default function Resume() {
    return(
        <div>
        <Header/>
        {resumeDescription}
        </div>
    )
}