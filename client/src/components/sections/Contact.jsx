import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from '../../hooks/useScroll';
import { contact } from '../../utils/api';
import { contactInfo } from '../../utils/data';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // For now, just log to console since backend is optional
      console.log('Form submitted:', formData);
      setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitMessage('');
      }, 3000);
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
              Get In <span className="text-accent">Touch</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a question or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>

              {[
                { icon: FaEnvelope, label: 'Email', value: contactInfo.email, link: `mailto:${contactInfo.email}` },
                { icon: FaLinkedin, label: 'LinkedIn', value: 'Mohammad Danish Junaidi', link: contactInfo.linkedin },
                { icon: FaGithub, label: 'GitHub', value: '@danishjunaidi', link: contactInfo.github },
                { icon: FaMapMarkerAlt, label: 'Location', value: contactInfo.location, link: null },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.link || '#'}
                  target={item.link ? '_blank' : undefined}
                  rel={item.link ? 'noopener noreferrer' : undefined}
                  className={`glass p-6 rounded-lg flex gap-4 items-start hover:border-accent/50 transition-all ${item.link ? 'cursor-pointer' : ''}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={item.link ? { x: 5 } : {}}
                >
                  <div className="text-3xl text-accent">
                    <item.icon />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-semibold text-light hover:text-accent transition">{item.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-gray-400">Follow me on social media</p>
                <div className="flex gap-4">
                  {[
                    { icon: FaGithub, label: 'GitHub', url: contactInfo.github },
                    { icon: FaLinkedin, label: 'LinkedIn', url: contactInfo.linkedin },
                    { icon: FaEnvelope, label: 'Email', url: `mailto:${contactInfo.email}` },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-xl hover:border-accent/50 hover:text-accent transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="glass p-8 rounded-xl space-y-6"
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-secondary/30 text-light placeholder-gray-500 focus:outline-none focus:border-accent transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-secondary/30 text-light placeholder-gray-500 focus:outline-none focus:border-accent transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-secondary/30 text-light placeholder-gray-500 focus:outline-none focus:border-accent transition"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-secondary/30 text-light placeholder-gray-500 focus:outline-none focus:border-accent transition resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {submitMessage && (
                <motion.div
                  className={`p-4 rounded-lg text-center font-semibold ${
                    submitMessage.includes('successfully')
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'bg-red-500/20 text-red-400 border border-red-500/50'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitMessage}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-accent to-secondary text-dark font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? '⏳ Sending...' : '✉️ Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
