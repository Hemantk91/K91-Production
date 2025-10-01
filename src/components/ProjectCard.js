import React from 'react';
import ProjectCard from './ProjectCard';
import '../components/ProjectCard.css';

const Projects = () => {
  // Projects array
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my work and skills.",
      image: "/images/portfolio.jpg",
      technologies: ["React", "CSS", "JavaScript"],
      liveLink: "https://yourportfolio.com",
      githubLink: "https://github.com/username/portfolio"
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "An online store with shopping cart, product listing, and payment integration.",
      image: "/images/ecommerce.jpg",
      technologies: ["React", "Redux", "Firebase"],
      liveLink: "https://mystore.com",
      githubLink: "https://github.com/username/ecommerce"
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "A full-stack blog platform where users can create, edit, and comment on posts.",
      image: "/images/blog.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://myblog.com",
      githubLink: "https://github.com/username/blog-platform"
    }
    // Add more projects if needed
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
