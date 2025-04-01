'use client';

import React from 'react';
import './resume.css';
import { useTheme } from '@/context/ThemeContext'; // Import the useTheme hook

export default function Resume() {
  const { theme } = useTheme(); // Access the theme state

  return (
    
    <section id="resume" className={`resume section ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="container">
        <h2>Resume</h2>
        <div className="pdf-container">
          <iframe
            src="/Siyamrregn_Yeshidagna_Resume.pdf"
            width="100%"
            height="600px"
            title="Siyamregn Yeshidagna Resume"
          >
            This browser does not support PDFs. Please download the PDF to view it: 
            <a href="/Siyamrregn_Yeshidagna_Resume.pdf">Download PDF</a>
          </iframe>
        </div>
      </div>
    </section>
  );
}