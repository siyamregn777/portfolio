import Link from "next/link";
import Image from "next/image";
import "./about.css";  // Import the CSS file

export default function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      
      <Image 
        src="/IMG_1242.JPG" 
        alt="My Profile Picture" 
        width={200} 
        height={200} 
        className="profile-img"
      />

      <p>
        I'm a passionate full-stack developer with experience in building web applications using modern technologies like 
        <strong> React, Node.js, and Next.js</strong>. I love solving complex problems and turning ideas into reality!  
        <span>
          Let’s connect and build something amazing together! 🚀
        </span>
      </p>

      <Link href="/">🔙 Back to Home</Link>
    </div>
  );
}
