// ButtonPadrao.tsx

import React from 'react';
import './ButtonPadrao.css';

interface ButtonPadraoProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const ButtonPadrao: React.FC<ButtonPadraoProps> = ({ onClick, children }) => {
  return (
    <button className="button-padrao" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPadrao;
