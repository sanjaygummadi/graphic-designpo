
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
            
            <p className="about-description">
             I’m a passionate graphic designer with over 2 years of freelance experience,
            dedicated to crafting visually compelling designs that not only captivate but also communicate your message with clarity and impact.
            From web design and branding to UI/UX and print media,
            I deliver creative solutions that leave a lasting impression and elevate your brand.
            </p>
            
            <p className="about-description">
              I believe that great design is not just about making things look beautiful, 
              but about solving problems and creating meaningful connections between brands 
              and their audiences. Every project I work on is an opportunity to tell a unique story.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img 
                src="./logos/about image.jpg" 
                alt="About Me" 
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
