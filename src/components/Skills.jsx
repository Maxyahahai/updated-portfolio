import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "C++", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML & CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Git & GitHub", level: 90 },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-900 text-white px-10 py-20">
      <motion.h2
        className="text-4xl font-bold text-blue-500 mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-gray-300 font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
