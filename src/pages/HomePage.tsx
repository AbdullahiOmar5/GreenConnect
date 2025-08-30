import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import OurWork from '../components/OurWork';
import Impact from '../components/Impact';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <OurWork />
      <Impact />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;