import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '../../hooks/useScroll';
import { skillsData } from '../../utils/data';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const SkillBar = ({ skill }) => (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-light">{skill.name}</span>
        <span className="text-accent font-bold">{skill.level}%</span>
      </div>
      <div className="w-full h-3 bg-secondary/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        ></motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div ref={ref}>
          {/* Section Title */}
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
              Technical <span className="text-accent">Skills</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Frontend */}
            <motion.div
              className="glass p-8 rounded-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-accent mb-6">Frontend</h3>
              <div className="space-y-6">
                {skillsData.frontend.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="glass p-8 rounded-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-secondary mb-6">Backend</h3>
              <div className="space-y-6">
                {skillsData.backend.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              className="glass p-8 rounded-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-secondary mb-6">Languages</h3>
              <div className="space-y-6">
                {skillsData.languages.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Learning Section */}
          <motion.div
            className="mt-16 glass p-8 rounded-xl text-center"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-300 mb-6">
              🎓 <strong>Currently Learning & Exploring:</strong> React, Advanced MongoDB, Cloud Technologies, Generative AI, LLMs & API Integration
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              {['React', 'Docker', 'AWS', 'GraphQL', 'TypeScript', 'Next.js'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-secondary/30 rounded-full text-accent border border-secondary/50">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
