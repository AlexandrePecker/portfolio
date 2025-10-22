import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiGo,
  SiPython,
  SiDjango,
  SiReact,
  SiTypescript,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiGit,
} from "react-icons/si";

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="technologies" className="py-20 gradient-section relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Tecnologias</span> & Ferramentas
            </h2>
            <p className="text-foreground/70 text-lg">
              Tecnologias e ferramentas que uso no dia a dia 🚀
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.1, y: -10 }}
                className="bg-card rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-card hover:shadow-glow transition-smooth border border-border group cursor-pointer"
              >
                <tech.icon
                  className="w-12 h-12 text-foreground/60 group-hover:text-primary transition-smooth"
                  style={{ color: tech.color }}
                />
                <span className="font-medium text-foreground/80 group-hover:text-primary transition-smooth">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Technologies;
