import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 text-slate-300 p-8 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-5xl font-extrabold text-slate-100">Dwi Wahyu Susilowati</h1>
          <h2 className="text-2xl text-slate-300">Full Stack Developer</h2>
          <p className="text-slate-400">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
          <div className="mt-8 space-y-4">
            <div className="text-white font-medium border-l-2 pl-2 border-white">ABOUT</div>
            <div className="text-slate-500 pl-2">PROJECTS</div>
          </div>
          <div className="flex gap-4 mt-8 text-2xl text-slate-500">
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-codepen"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-goodreads-g"></i>
          </div>
        </div>

        {/* Right section */}
<div className="md:w-1/2 space-y-6 text-slate-300 leading-relaxed">
  <p>
    Perkenalkan, nama saya <strong className="text-white">Dwi Wahyu Susilowati</strong>, seorang mahasiswa yang saat ini sedang menempuh studi di program <strong className="text-white">Manajemen Informatika</strong> di Universitas Nasional Pasim.
  </p>
  <p>
    Saya memiliki ketertarikan di dunia <strong className="text-white">pengembangan web dan aplikasi</strong>, khususnya dalam membangun antarmuka yang nyaman, sederhana, dan mudah digunakan. Saya senang mempelajari hal baru yang berkaitan dengan teknologi dan pengembangan sistem.
  </p>
  <p>
    Selama ini, saya juga telah mengikuti beberapa proyek kecil baik secara <strong className="text-white">mandiri</strong> maupun dalam kegiatan <strong className="text-white">perkuliahan</strong>. Pengalaman tersebut membuat saya terus bersemangat untuk belajar dan mengasah keterampilan di bidang <strong className="text-white">pemrograman</strong> serta pengembangan sistem.
  </p>
 
</div>


      </div>
    </div>
  );
};

export default About;
