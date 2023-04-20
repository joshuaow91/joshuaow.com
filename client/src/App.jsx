import React, { useState } from 'react';
import Navigation from './navbar';
import './index.css';
import Hero from './Hero';
import Skillsets from './Skillsets';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { InView } from 'react-intersection-observer';
import ClientWork from './ClientWork';

function App() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [skillsetsVisible, setSkillsetsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [clientsVisible, setClientsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  return (
    <div className="bg-white flex dark:bg-blackest flex-col">
      <div className="" id="home">
        <Navigation />
      </div>
      <InView
        threshold={0.1}
        as="div"
        onChange={(inView) => {
          setHeroVisible(inView);
        }}
        className={`flex md:flex-row justify-evenly items-start mt-14 sm:mt-0 mb-12 sm:mb-0 sm:items-center sm:min-h-screen fade ${
          heroVisible ? 'fade-in' : ''
        }`}
      >
        <Hero />
      </InView>
      <InView
        as="div"
        threshold={0.1}
        onChange={(inView) => {
          setSkillsetsVisible(inView);
        }}
        className={`mb-10 fade ${skillsetsVisible ? 'fade-in' : ''}`}
      >
        <Skillsets />
      </InView>
      <InView
        as="div"
        threshold={0.1}
        onChange={(inView) => {
          setProjectsVisible(inView);
        }}
        className={`md:p-14 fade ${projectsVisible ? 'fade-in' : ''}`}
        id="projects-section"
      >
        <Projects />
      </InView>
      <InView
        as="div"
        threshold={0.1}
        onChange={(inView) => {
          setClientsVisible(inView);
        }}
        className={`md:p-14  fade ${clientsVisible ? 'fade-in' : ''}`}
      >
        <ClientWork />
      </InView>
      <InView
        as="div"
        threshold={0.1}
        onChange={(inView) => {
          setContactVisible(inView);
        }}
        className={`md:mt-20 fade ${contactVisible ? 'fade-in' : ''}`}
      >
        <Contact />
      </InView>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
