import React, { useState } from 'react';
import Lottie from 'lottie-react';
import whatsappAnimation from '../../../Animations/Whatsapp.json';
import whatsappTnAnimation from '../../../Animations/WhatsappTN.json';

interface AnimationData {
  // Defina a estrutura conforme necessário com base no conteúdo do arquivo JSON
}

const ButtonWhatsapp: React.FC = () => {
  const [animationData, setAnimationData] = useState<AnimationData>(whatsappAnimation);
  const [isSecondAnimation, setIsSecondAnimation] = useState<boolean>(false);

  const handleWhatsappClick = () => {
    setAnimationData(whatsappTnAnimation);
    setIsSecondAnimation(true);

    setTimeout(() => {
      setAnimationData(whatsappAnimation);
      setIsSecondAnimation(false);
    }, 2000);

    setTimeout(() => {
      window.open('https://wa.me/5583981790771', '_blank');
    }, 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: isSecondAnimation ? '50%' : 'auto',
        height: isSecondAnimation ? '50%' : 'auto',
        transform: isSecondAnimation ? 'translate(-50%, -50%)' : 'none',
      }}
      onClick={handleWhatsappClick}
    >
      <Lottie
        animationData={animationData}
        width={isSecondAnimation ? '100%' : '50px'}
        height={isSecondAnimation ? '100%' : '50px'}
        style={{ filter: 'saturate(110%)' }} // Aplica a saturação de 110%
      />
    </div>
  );
};

export default ButtonWhatsapp;
