import React from 'react';
import './Home.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/AnimationHome.json'; // Caminho para o arquivo de animação
import ButtonPadrao from '../../components/Button/ButtonPadrao/ButtonPadrao'; // Importando o componente ButtonPadrao

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-title">Olá!</h1>
        <p className="home-description">
          Aqui, nós transformamos ideias em realidade digital.
          Seja para criar um site, uma aplicação web,
          ou uma identidade visual marcante.
          Nós ajudamos você a alcançar seus objetivos.
        </p>
        <ButtonPadrao>Comece Agora</ButtonPadrao> {/* Utilizando o componente ButtonPadrao */}
      </div>
      <div className="animation-container">
        <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: 'auto' }} />
      </div>
    </section>
  );
};

export default Home;
