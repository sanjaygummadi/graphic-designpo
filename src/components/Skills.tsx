
import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Photoshop', level: 80, iconUrl: './logos/photoshop.png' },
    { name: 'Canva', level: 90, iconUrl: './logos/canva.png' },
    { name: 'Figma', level: 90, iconUrl: './logos/figma.png' },
    { name: 'Lightroom', level: 90, iconUrl: './logos/Lightroom (2).png' },
    { name: 'Premiere Pro', level: 60, iconUrl: './logos/premiere.png' },
    { name: 'After Effects', level: 50, iconUrl: './logos/after-effects.png' },
    { name: 'Sketch', level: 60, iconUrl: './logos/sketch.png' },
    { name: 'Illustrator', level: 50, iconUrl: './logos/illustrator.png' },
    
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">My Tools & Skills</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies and tools I use to bring creative visions to life
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <img
                  src={skill.iconUrl}
                  alt={`${skill.name} icon`}
                  className="skill-icon-img"
                />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Additional Expertise</h3>
          <div className="skills-tags">
            <span className="skill-tag">Brand Identity</span>
            <span className="skill-tag">Web Design</span>
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">Print Design</span>
            <span className="skill-tag">Logo Design</span>
            <span className="skill-tag">Typography</span>
            <span className="skill-tag">Color Theory</span>
            <span className="skill-tag">User Research</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
