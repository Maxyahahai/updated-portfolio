import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-start px-10 md:px-20">
      
      {/* Name with glow */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 text-blue-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ textShadow: "0px 0px 8px #3b82f6" }}
      >
        Hi, I'm Somya Raj
      </motion.h1>

      {/* Role with slide-up */}
      <motion.h2
        className="text-2xl md:text-3xl text-gray-300 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        MERN Stack Developer
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-400 max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I build scalable, fast, and modern web applications with clean UI and efficient backend architecture.
      </motion.p>

      {/* Animated View Resume button with smooth scroll */}
      <motion.a
        href="#about"
        className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        View Resume
      </motion.a>

    </section>
  );
}
