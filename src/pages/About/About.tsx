import React from 'react';
import './About.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/AnimationAbout.json';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-animation-container">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ maxWidth: '80%', height: 'auto' }}
        />
      </div>
      <div className="about-content">
        <h1 className="about-title">Sobre</h1>
        <p className="about-description">
          Desenvolvemos websites lindos e otimizados <br />
          para mecanismos de busca, garantindo que sua <br />
          presença online seja impactante e eficiente. 
        </p>
        <p className="about-description2">
          Nossa missão é entender as necessidades únicas de cada <br />
          cliente e desenvolver estratégias personalizadas para <br />
          melhorar a visibilidade online de seus negócios. <br />
          Combinamos criatividade e tecnologia para construir <br />
          soluções digitais que realmente fazem a diferença.
        </p>
      </div>
    </section>
  );
};

export default About;
