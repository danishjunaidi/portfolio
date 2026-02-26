import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '../../hooks/useScroll';
import { projectsData } from '../../utils/data';

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div ref={ref}>
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ y: 20 }}
              animate={isInView ? { y: 0 } : { y: 20 }}
            >
              Featured <span className="text-secondary">Projects</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full-stack web applications showcasing responsive design, scalable backend systems, and modern technologies
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="glass rounded-xl overflow-hidden hover:border-accent/50 transition-all group"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    💻
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-accent group-hover:text-secondary transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 py-4 border-t border-secondary/20">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                        <p className="text-sm font-semibold text-accent">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-gray-400">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-secondary/30 text-accent border border-secondary/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-secondary/30 hover:bg-secondary/50 rounded-lg text-center text-sm font-semibold transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      💻 GitHub
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-accent/30 hover:bg-accent/50 rounded-lg text-center text-sm font-semibold transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🚀 Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
