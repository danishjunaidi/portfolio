import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { contactInfo } from '../utils/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker py-8 border-t border-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="hover:text-accent transition">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition">About</a></li>
              <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <h3 className="text-xl font-bold mb-4">Follow</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition">Twitter</a>
              <a href="#" className="hover:text-accent transition">LinkedIn</a>
              <a href="#" className="hover:text-accent transition">GitHub</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@example.com</p>
            <p className="text-gray-400">Location: Your City</p>
          </motion.div>
        </div>

        <div className="border-t border-secondary/30 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Mohammad Danish Junaidi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
