// src/App.tsx

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      const audio = new Audio(thiagoNetSound);
      audio.play();
    }, 2000); // Altere o tempo conforme necessário

    return () => clearTimeout(timer);
  }, []);

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
