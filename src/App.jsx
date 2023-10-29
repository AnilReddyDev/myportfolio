import './App.css'
import React from 'react';
import { Link, Element, scroller } from 'react-scroll';
import About from './components/About';
import Skill from './components/Skill';
import Education from './components/Education';
import Work from './components/Work';
import Home from './components/Home';
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

const App = () => {


  return (
    <div >
      {/* <CustomCursor/> */}
      <div className='home-container w-full h-screen'>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <Header />
        <Element name="home-section" className="element">
        <div className="home-section w-full h-screen ">
          <Home/>
        </div>
      </Element>
      </div>


      <Element name="about-section" className="element">
        <div className="about-section">
          <About />
        </div>
      </Element>

      <Element name="skills-section" className="element">
        <div className="skills-section">
          <Skill />
        </div>
      </Element>

      <Element name="education-section" className="element">
        <div className="education-section">
          <Education />
        </div>
      </Element>

      <Element name="work-section" className="element">
        <div className="work-section">
          <Work />
        </div>
      </Element>

      <Footer/>
    </div>
  );
};

export default App;
