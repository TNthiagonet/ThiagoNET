// Arquivo: src/components/Footer/Footer.tsx

import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsVisible(isBottom);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <p>&copy; 2024 - Seu Nome. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
