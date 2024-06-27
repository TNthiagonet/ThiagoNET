import React from 'react';
import './About.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/AnimationAbout.json'; // ajustando o caminho conforme necessário

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-animation-container">
        <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="about-content">
        <h1 className="about-title">Sobre</h1>
        <p className="about-description">
        Nossa missão é entender as necessidades únicas de cada cliente e desenvolver estratégias personalizadas para melhorar a visibilidade online de seus negócios. Combinamos criatividade e tecnologia para construir soluções digitais que realmente fazem a diferença.
        </p>
        <p className="about-description2">
          Desenvolvemos websites responsivos e otimizados para mecanismos de busca, garantindo que sua presença online seja impactante e eficiente. Desde o design até a implementação, oferecemos soluções de alta qualidade que refletem a identidade e os valores do seu negócio.
        </p>
        <p className="about-description2">
          Estamos comprometidos em oferecer serviços excepcionais que superem as expectativas. Com uma abordagem detalhista e focada na inovação, trabalhamos para que cada projeto seja uma contribuição significativa para o sucesso online dos nossos clientes.
        </p>
      </div>
    </section>
  );
};

export default About;
