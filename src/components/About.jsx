import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white px-10 py-20">
      
      {/* Name / Intro */}
      <motion.h2
        className="text-4xl font-bold text-blue-500 mb-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Somya Raj
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I'm a MERN Stack Developer passionate about building modern web applications with clean UI, smooth UX, and scalable backend architecture.
      </motion.p>

      {/* Download Resume Button */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a 
          href="Somya Raj Resume_compressed.pdf "  // <-- replace with your PDF
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Resume content displayed on page */}
      <motion.div
        className="max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Education</h3>
          <p>Dr. A. P. J. Abdul Kalam Technical University, Lucknow</p>
          <p>B.Tech, Computer Science and Engineering (2023 – Present)</p>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Languages: C++, JavaScript</li>
            <li>Frontend: HTML, CSS, Tailwind CSS, React.js</li>
            <li>Backend: Node.js, Express.js, RESTful APIs</li>
            <li>Database: MongoDB</li>
            <li>Other Tools: Git, GitHub, VS Code, Postman</li>
            <li>Concepts: API Integration, OAuth Authentication, Session Management, DSA</li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Projects</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>RapAesthetics – Spotify-Integrated Music & Wallpaper Web App</strong><br />
              Built a full-stack MERN app transforming hip-hop albums into aesthetic wallpapers using Spotify API. Implemented OAuth login, REST APIs, and session management.
            </li>
            <li>
              <strong>Hotel Management System (C++)</strong><br />
              Console-based system handling bookings, check-ins, and check-outs. Implemented record management, billing, and room allocation.
            </li>
            <li>
              <strong>Sideffect – Video Camera Agency Website</strong><br />
              Responsive portfolio website using HTML, CSS, JavaScript, and Tailwind CSS focusing on clean UI/UX and mobile responsiveness.
            </li>
          </ul>
        </div>

        {/* Objective */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Objective</h3>
          <p>
            Passionate Computer Science student with strong skills in full-stack web development and problem-solving.
            Seeking an internship to apply hands-on experience with modern web technologies, APIs, and scalable backend systems.
          </p>
        </div>

        {/* Contact / Links */}
        <div className="flex justify-center gap-6 text-lg mt-6">
          <a 
            href="https://www.linkedin.com/in/somya-raj-baa6aa364" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Maxyahahai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
