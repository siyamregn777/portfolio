'use client'
import React from 'react';
import './resume.css';

export default function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container">
        <h2>Resume</h2>
        <div className="pdf-container">
          <iframe
            src="/SiyamregnYeshidagna.pdf"
            width="100%"
            height="600px"
            title="Siyamregn Yeshidagna Resume"
          >
            This browser does not support PDFs. Please download the PDF to view it: 
            <a href="/SiyamregnYeshidagna.pdf">Download PDF</a>
          </iframe>
        </div>
      </div>
    </section>
  );
}