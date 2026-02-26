import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '../../hooks/useScroll';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const techStack = [
    { name: 'JavaScript', icon: '✨' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'Express.js', icon: '⚡' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Bootstrap', icon: '🎨' },
    { name: 'Git/GitHub', icon: '🐙' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center space-y-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            >
              About <span className="text-accent">Me</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer currently pursuing B.Tech in Computer Science & Engineering at Lovely Professional University. 
                With hands-on experience in building responsive web applications and scalable backend systems, I focus on creating seamless user experiences.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                🎯 <strong>My Goal:</strong> To build robust, user-centric web applications that solve real-world problems while continuously expanding my technical expertise.
              </p>

              <div className="space-y-3">
                <p className="font-semibold text-accent">💡 I'm passionate about:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Full-stack web application development</li>
                  <li>✓ Building responsive and intuitive UIs</li>
                  <li>✓ Designing scalable backend systems</li>
                  <li>✓ Writing clean, maintainable code</li>
                  <li>✓ Cross-functional collaboration and growth</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="glass p-6 rounded-lg text-center hover:border-accent/50 transition-all group"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <p className="font-semibold group-hover:text-accent transition-colors">{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { label: 'Projects Completed', value: '5+' },
              { label: 'Technologies', value: '12+' },
              { label: 'Code Commits', value: '500+' },
              { label: 'Years Learning', value: '3+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass p-6 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
