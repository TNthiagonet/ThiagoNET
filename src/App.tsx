import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import ButtonWhatsapp from './components/Button/ButtonWhatsapp/ButtonWhatsapp';

// Declaração global para o TypeScript reconhecer dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MZ7KLNFCWY';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Inicializa o dataLayer se ainda não estiver definido
      window.dataLayer = window.dataLayer || [];
      // Define a função gtag para enviar dados ao Google Analytics
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      // Configura a data de início do Google Analytics
      window.gtag('js', new Date());
      // Configura o ID de rastreamento do Google Analytics
      window.gtag('config', 'G-MZ7KLNFCWY');
    };
  }, []);

  return (
    <div>
      <Header />
      <SideMenu position="left" />
      <SideMenu position="right" />
      <MainContent />
      <ButtonWhatsapp />
      <Footer />
    </div>
  );
};

export default App;