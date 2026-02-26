import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="text-accent text-lg font-semibold">Welcome to my portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 bg-gradient-to-r from-light via-accent to-secondary bg-clip-text text-transparent">
              Hi, I'm Mohammad Danish Junaidi
            </h1>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl text-secondary font-semibold">
            Full Stack Web Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed"
          >
            I build responsive, scalable web applications using modern technologies like Node.js, Express.js, and MongoDB.
            Passionate about creating user-friendly solutions and continuous learning.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap pt-4">
            <motion.a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-gradient-to-r from-accent to-secondary text-dark font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📥 Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-dark transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💬 Contact Me
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 pt-4">
            <motion.a
              href="https://github.com/danishjunaidi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-accent transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/danishjunaidi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-accent transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:danishjunaidi564@gmail.com"
              className="text-3xl text-gray-400 hover:text-accent transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent rounded-2xl p-1"
              animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 20, repeat: Infinity, linear: true }}
            >
              <div className="bg-dark rounded-2xl inset-0"></div>
            </motion.div>

            <div className="relative w-96 h-96 rounded-2xl overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-secondary px-6 py-3 rounded-full shadow-lg glass"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="font-semibold">🚀 Available for Work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-center">
          <p className="text-gray-400 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-2 bg-accent rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
