// components/BubbleAnimation.tsx
import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import './BubbleAnimation.scss';
import bg01 from '../../Animations/background/olho.json';
import bg02 from '../../Animations/background/olho.json'; // Certifique-se de corrigir os nomes dos arquivos
import bg03 from '../../Animations/background/olho.json';
import bg04 from '../../Animations/background/olho.json';
import bg05 from '../../Animations/background/olho.json';
import bg06 from '../../Animations/background/olho.json';
import bg07 from '../../Animations/background/olho.json';
import bg08 from '../../Animations/background/olho.json';
import bg09 from '../../Animations/background/olho.json';
import bg10 from '../../Animations/background/olho.json';
import bg11 from '../../Animations/background/olho.json';
import bg12 from '../../Animations/background/olho.json';
import bg13 from '../../Animations/background/olho.json';
import bg14 from '../../Animations/background/olho.json';
import bg15 from '../../Animations/background/olho.json';

const BubbleAnimation: React.FC = () => {
  useEffect(() => {
    // Lógica de inicialização, se necessário
    return () => {
      // Lógica de limpeza, se necessário
    };
  }, []);

  const animations = [bg01, bg02, bg03, bg04, bg05, bg06, bg07, bg08, bg09, bg10, bg11, bg12, bg13, bg14, bg15];

  return (
    <div className="circles">
      <ul>
        {animations.map((animation, index) => (
          <li key={index}>
            <div className="lottie-container">
              <Lottie 
                animationData={animation} 
                loop={true} 
                autoplay={true} 
                style={{ height: 100, width: 100 }} 
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BubbleAnimation;
