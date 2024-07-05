import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import ButtonWhatsapp from './components/Button/ButtonWhatsapp/ButtonWhatsapp';
import Loading from './components/Loading/Loading';
import thiagoNetSound from './Sounds/ThiagoNET.mp3';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [soundPlayed, setSoundPlayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (!soundPlayed) {
        const audio = new Audio(thiagoNetSound);
        audio.play();
        setSoundPlayed(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Dependência vazia para executar apenas uma vez

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <SideMenu position="left" />
          <SideMenu position="right" />
          <MainContent />
          <ButtonWhatsapp />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
