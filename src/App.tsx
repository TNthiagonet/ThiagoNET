// src/App.tsx

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import ButtonWhatsapp from './components/Button/ButtonWhatsapp/ButtonWhatsapp';

// Inicializa o Google Analytics
ReactGA.initialize('G-MZ7KLNFCWY');

const App: React.FC = () => {
  const location = useLocation();

  // Registra a visualização da página sempre que a rota muda
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
        <ButtonWhatsapp />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
