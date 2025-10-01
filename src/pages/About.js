import React, { useState, useEffect } from "react";
import "./About.css";
import AboutMyImg from "../assets/images/AboutMyImg.jpg";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "Video Production", level: 95 },
    { name: "Cinematography", level: 90 },
    { name: "Video Editing", level: 92 },
    { name: "Color Grading", level: 88 },
    { name: "Sound Design", level: 85 },
    { name: "Visual Effects", level: 80 }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className={`about-page ${isVisible ? 'visible' : ''}`}>
      <div className="about-container">
        
        {/* Header Section */}
        <div className="about-header">
          <h1 className="about-title">About K91 PRODUCTION</h1>
          <p className="about-subtitle">
            Crafting Visual Stories That Captivate and Inspire
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          
          {/* Image Section */}
          <div className="about-image-section">
            <div className="image-container">
              <img 
                src={AboutMyImg} 
                alt="K91 Production Team" 
                className="about-image"
              />
              <div className="image-overlay"></div>
              <div className="experience-badge">
                <span className="years">5+</span>
                <span className="text">Years Experience</span>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="about-text-section">
            <div className="text-content">
              
              <h2 className="section-title">Our Story</h2>
              <p className="description">
                Welcome to <strong>K91 PRODUCTION</strong>, where creativity meets technology 
                to bring your vision to life. Founded with a passion for storytelling 
                and a commitment to excellence, we specialize in creating cinematic 
                experiences that leave lasting impressions.
              </p>

              <p className="description">
                Our journey began 5 years ago with a simple camera and big dreams. 
                Today, we've evolved into a full-service production house, delivering 
                high-quality video content for brands, artists, and individuals who 
                want to make an impact.
              </p>

              <div className="mission-vision">
                <div className="mission">
                  <h3>🎯 Our Mission</h3>
                  <p>
                    To transform ideas into compelling visual narratives that connect 
                    with audiences and drive results through innovative storytelling 
                    and technical excellence.
                  </p>
                </div>
                
                <div className="vision">
                  <h3>🚀 Our Vision</h3>
                  <p>
                    To be the most trusted production partner for businesses and 
                    creators, known for our creative vision, technical expertise, 
                    and unwavering commitment to quality.
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="skills-section">
                <h3 className="skills-title">Our Expertise</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="features-section">
                <h3>✨ Why Choose K91 PRODUCTION?</h3>
                <div className="features-grid">
                  <div className="feature">
                    <h4>🎬 Creative Excellence</h4>
                    <p>Unique storytelling approaches that make your content stand out</p>
                  </div>
                  <div className="feature">
                    <h4>⚡ Quick Turnaround</h4>
                    <p>Efficient workflows without compromising on quality</p>
                  </div>
                  <div className="feature">
                    <h4>💎 Premium Quality</h4>
                    <p>State-of-the-art equipment and professional-grade output</p>
                  </div>
                  <div className="feature">
                    <h4>🤝 Client-Centric</h4>
                    <p>Your vision is our priority - we listen, we understand, we deliver</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <h2>Ready to Bring Your Vision to Life?</h2>
          <p>Let's collaborate and create something extraordinary together</p>
          <button className="cta-button">Start Your Project</button>
        </div>

      </div>
    </div>
  );
}

export default About;