import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
