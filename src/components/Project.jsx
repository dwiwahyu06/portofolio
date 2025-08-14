import React from 'react';
import '../index.css';
import BahasaC from '../assets/bahasa c.jpg';
import SalonImg from '../assets/ReactLanjutan.png';

const Project = () => {
  return (
    <div id="projects" className="section">
      <h2>Project</h2>

      {/* Project 1: Web Resep - MasakApaHariIni */}
      <section className="section">
        <h3>Project Web Resep Masak - MasakApaHariIni</h3>
        <iframe
          src="https://masakapa-hari-ini.vercel.app"
          width="100%"
          height="600"
          style={{ border: "2px solid white", borderRadius: "10px", marginTop: "20px" }}
          loading="lazy"
          title="MasakApaHariIni"
        />
        <div style={{ marginTop: 16 }}>
          <a
            href="https://github.com/dwiwahyu06/MasakapaHari.ini.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
            aria-label="Buka repository GitHub MasakApaHariIni"
          >
            Lihat di GitHub
          </a>
        </div>
        {/* Teknologi yang dipakai */}
        <div className="tech-box">
          <strong>Teknologi:</strong>
          <ul className="tech-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </section>

      {/* Project 2: Bahasa C - IndoRunners Boyolali */}
      <section className="section" style={{ marginTop: 32 }}>
        <h3>Project Bahasa C - IndoRunners Boyolali</h3>
        <img
          src={BahasaC}
          alt="Tampilan Project Bahasa C - IndoRunners Boyolali"
          style={{ width: "100%", border: "2px solid white", borderRadius: "10px", marginTop: 20 }}
          loading="lazy"
        />
        <div style={{ marginTop: 16 }}>
          <a
            href="https://github.com/dwiwahyu06/DWI-WAHYU-SUSILOWATI_C.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
            aria-label="Buka repository GitHub Project Bahasa C - IndoRunners Boyolali"
          >
            Lihat di GitHub
          </a>
        </div>
        {/* Teknologi yang dipakai */}
        <div className="tech-box">
          <strong>Teknologi:</strong>
          <ul className="tech-list">
            <li>C</li>
            <li>Notepad</li>
          </ul>
        </div>
      </section>

      {/* Project 3: MaisonBelle Salon */}
      <section className="section" style={{ marginTop: 32 }}>
        <h3>MaisonBelle Salon</h3>
        <img
          src={SalonImg}
          alt="Tampilan Project MaisonBelle Salon"
          style={{ width: "100%", border: "2px solid white", borderRadius: "10px", marginTop: 20 }}
          loading="lazy"
        />
        <div style={{ marginTop: 16 }}>
          <a
            href="https://github.com/dwiwahyu06/MASION_BELLE_SALON.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
            aria-label="Buka repository GitHub MaisonBelle Salon"
          >
            Lihat di GitHub
          </a>
        </div>
        {/* Teknologi yang dipakai */}
        <div className="tech-box"  id="technologies">
          <strong>Teknologi:</strong>
          <ul className="tech-list">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Bahasa C</li>
            
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Project;
