import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import FeaturedProjects from './components/sections/FeaturedProjects';
import Skills from './components/sections/Skills';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-dark text-light min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
