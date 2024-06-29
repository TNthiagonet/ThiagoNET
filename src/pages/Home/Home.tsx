// Home.tsx

import React from 'react';
import './Home.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/AnimationHome.json'; // Ajuste o caminho conforme necessário
import ButtonPadrao from '../../components/Button/ButtonPadrao/ButtonPadrao'; // Importando o componente ButtonPadrao
import menuOpenSound from '../../Sounds/menu-open.mp3'; // Importando o som

const Home: React.FC = () => {
  const handleNavigateToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-title">Olá!</h1>
        <p className="home-description">
          Bem-vindo à JC Goleiros! Aqui, desenvolvemos talentos e paixões, transformando jovens aspirantes em goleiros excepcionais. Com treinamentos personalizados, foco na técnica e uma equipe dedicada, estamos aqui para preparar você para os desafios do campo e além.
        </p>
        <ButtonPadrao onClick={handleNavigateToAbout} soundSrc={menuOpenSound}>Saiba mais</ButtonPadrao> {/* Passando o som para o botão */}
      </div>
      <div className="animation-container">
        <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: 'auto' }} />
      </div>
    </section>
  );
};

export default Home;
