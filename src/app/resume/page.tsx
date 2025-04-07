'use client';

import { FaDownload } from 'react-icons/fa';
import './resume.css';

export default function Resume() {
  const downloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/SiyamrregnYeshidagnaResume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'SiyamregnYeshidagna-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="resume section">
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        <div className="resume-content">
          <div className="resume-download">
            <button onClick={downloadResume} className="btn btn-primary">
              <FaDownload /> Download Resume
            </button>
          </div>
          <div className="resume-preview">
            <iframe
              src="/SiyamrregnYeshidagnaResume.pdf"
              width="100%"
              height="600px"
              title="Siyamregn Yeshidagna Resume"
            >
              Your browser does not support PDFs. Please download the PDF to view it.
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}