import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "RapAesthetics",
      desc: "Spotify-Integrated Music & Wallpaper Web App transforming hip-hop albums into aesthetic wallpapers.",
      tech: "MERN Stack, Spotify API, OAuth",
      github: "https://github.com/Maxyahahai/rapaesthetics",
      live: "#",
    },
    {
      name: "Library Management System",
      desc: "Console-based library management system handling book records, issue/return, and member management.",
      tech: "C++",
      github: "https://github.com/Maxyahahai/LibraryManagementSystem",
      live: "#",
    },
    {
      name: "Sideffect – Video Camera Agency Website",
      desc: "Responsive portfolio website focusing on clean UI/UX and mobile responsiveness.",
      tech: "HTML, CSS, JavaScript, Tailwind CSS",
      github: "https://github.com/Maxyahahai/sideeffect-website.git",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white px-10 py-20">
      <motion.h2
        className="text-4xl font-bold text-blue-500 mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.name}</h3>
              <p className="text-gray-300 mb-2">{project.desc}</p>
              <p className="text-gray-400 italic text-sm">Tech: {project.tech}</p>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-sm transition-all"
              >
                GitHub
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold text-sm transition-all"
                >
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
