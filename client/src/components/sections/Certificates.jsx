import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '../../hooks/useScroll';
import { certificatesData } from '../../utils/data';

export default function Certificates() {
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

  const certVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
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
              Certificates & <span className="text-accent">Training</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional certifications and training programs completed
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {certificatesData.map((cert, index) => (
              <motion.div
                key={index}
                variants={certVariants}
                className="glass p-6 rounded-lg border-l-4 border-accent hover:border-secondary transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="flex gap-4">
                  <div className="text-3xl">🏆</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-accent mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-400 text-xs">
                      📅 {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Training Programs */}
          <motion.div
            className="mt-16"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Training & Development</h3>
            <div className="space-y-4">
              <motion.div
                className="glass p-6 rounded-lg border-l-4 border-secondary"
                whileHover={{ x: 5 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-secondary">Core & Advanced Java</h4>
                    <p className="text-gray-400">Board Infinity</p>
                  </div>
                  <span className="text-sm text-accent">August 2024</span>
                </div>
                <p className="text-gray-300 text-sm">
                  40+ hours covering OOP, exception handling, collections, multithreading, and JDBC with 100% assignment completion.
                </p>
              </motion.div>

              <motion.div
                className="glass p-6 rounded-lg border-l-4 border-secondary"
                whileHover={{ x: 5 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-secondary">MSBTE Industrial Training</h4>
                    <p className="text-gray-400">ProAzure</p>
                  </div>
                  <span className="text-sm text-accent">Aug 2021 - Sept 2021</span>
                </div>
                <p className="text-gray-300 text-sm">
                  40+ hours of hands-on training covering WordPress, RPA, HTML, CSS, Python, and PHP with 80% performance rating.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
