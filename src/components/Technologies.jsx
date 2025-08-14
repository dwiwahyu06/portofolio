import React from "react";
import {
  FaJava,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiPostgresql,
  SiC,
  SiTailwindcss,
  SiSpringboot
} from "react-icons/si";
import "../index.css";

const Technologies = () => {
  const techs = [
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "GitHub", icon: <FaGithub color="#181717" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "SQL", icon: <FaDatabase color="#4479A1" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "C", icon: <SiC color="#A8B9CC" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
  ];

  return (
    <div className="tech-container" id="technologies">
      <h2 className="tech-title">Technologies</h2>
      <p className="tech-description">
        Berikut adalah teknologi yang saya kuasai dan sering gunakan dalam pengembangan aplikasi,
        mulai dari bahasa pemrograman, framework, hingga tools pendukung.
      </p>

      <div className="tech-list">
        {techs.map((tech, index) => (
          <div key={index} className="tech-item">
            <span className="tech-icon">{tech.icon}</span>
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
