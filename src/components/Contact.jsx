import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-10 py-20 flex flex-col justify-center items-center"
    >
      <motion.h2
        className="text-4xl font-bold text-blue-500 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="mb-4 text-gray-300">
          Hi, I'm Somya Raj. You can reach me via email or connect on GitHub/LinkedIn.
        </p>

        <p className="mb-2 text-gray-400">
          📧 Email: <a href="mailto:choudharymax94@gmail.com" className="text-blue-500 hover:underline">choudharymax94@gmail.com</a>
        </p>

        <p className="mb-6 text-gray-400">
          💻 GitHub: <a href="https://github.com/Maxyahahai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Maxyahahai</a>
          <br />
          🔗 LinkedIn: <a href="https://www.linkedin.com/in/somya-raj-baa6aa364" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">somya-raj-baa6aa364</a>
        </p>

        <a
          href="mailto:choudharymax94@gmail.com"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all"
        >
          Send Email
        </a>
      </motion.div>
    </section>
  );
}
