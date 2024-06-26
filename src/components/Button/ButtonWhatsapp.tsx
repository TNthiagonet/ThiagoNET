// Arquivo: src/components/Button/ButtonWhatsapp.tsx

import React, { useState } from 'react';
import Lottie from 'lottie-react'; // Importa o componente Lottie para renderizar animações
import whatsappAnimation from '../../Animations/Whatsapp.json'; // Importa a animação original do WhatsApp
import whatsappTnAnimation from '../../Animations/WhatsappTN.json'; // Importa a nova animação do WhatsApp

// Define a interface para o tipo de dados da animação
interface AnimationData {
  // Defina a estrutura conforme necessário com base no conteúdo do arquivo JSON
}

const ButtonWhatsapp: React.FC = () => {
  // Define os estados para controlar a animação e a mudança entre animações
  const [animationData, setAnimationData] = useState<AnimationData>(whatsappAnimation); // Estado para a animação atual
  const [isSecondAnimation, setIsSecondAnimation] = useState<boolean>(false); // Estado para controlar a segunda animação

  // Função chamada quando o botão de WhatsApp é clicado
  const handleWhatsappClick = () => {
    setAnimationData(whatsappTnAnimation); // Muda para a segunda animação do WhatsApp
    setIsSecondAnimation(true); // Ativa a flag para indicar que a segunda animação está ativa

    // Define um timeout para restaurar a animação original após 2 segundos
    setTimeout(() => {
      setAnimationData(whatsappAnimation); // Restaura a animação original
      setIsSecondAnimation(false); // Desativa a flag da segunda animação
    }, 2000);

    // Abre o link do WhatsApp após 2 segundos
    setTimeout(() => {
      window.open('https://wa.me/5583981790771', '_blank'); // Abre o WhatsApp no navegador
    }, 2000);
  };

  return (
    <div
      style={{
        position: 'fixed', // Posição fixa na tela
        bottom: '20px', // A 20px do fundo da tela
        right: '20px', // A 20px da direita da tela
        zIndex: 9999, // Z-index alto para garantir que fique acima de outros elementos
        cursor: 'pointer', // Cursor muda para indicar que é clicável
        display: 'flex', // Usa flexbox para centralizar conteúdo
        justifyContent: 'center', // Centraliza horizontalmente
        alignItems: 'center', // Centraliza verticalmente
        width: isSecondAnimation ? '50%' : 'auto', // Define a largura como 50% se estiver na segunda animação, senão, tamanho automático
        height: isSecondAnimation ? '50%' : 'auto', // Define a altura como 50% se estiver na segunda animação, senão, tamanho automático
        transform: isSecondAnimation ? 'translate(-50%, -50%)' : 'none', // Centraliza a div se estiver na segunda animação
      }}
      onClick={handleWhatsappClick} // Evento de clique para lidar com a animação e abrir o link
    >
      <Lottie animationData={animationData} width={isSecondAnimation ? '100%' : '50px'} height={isSecondAnimation ? '100%' : '50px'} />
      {/* Renderiza a animação do Lottie, com largura e altura variáveis dependendo da animação atual */}
    </div>
  );
};

export default ButtonWhatsapp;
