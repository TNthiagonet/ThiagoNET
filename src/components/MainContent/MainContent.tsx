import React from 'react';
import './MainContent.css';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Services from '../../pages/Services/Services';
import Contact from '../../pages/Contact/Contact';
import CircleBG from '../../components/CircleBG/CircleBG';

const MainContent: React.FC = () => {
  return (
    <div className="main-container">
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
      <CircleBG />
    </div>
  );
};

export default MainContent;
