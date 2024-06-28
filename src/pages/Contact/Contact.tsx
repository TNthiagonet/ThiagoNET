// Contact.tsx

import React from 'react';
import './Contact.css';
import Lottie from 'lottie-react';
import animationEmail from '../../Animations/AnimationMail.json';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h1>Contato</h1>
        </div>
        <div className="contact-animations">
          <div className="animation-item">
            <Lottie animationData={animationEmail} loop autoplay />
          </div>
        </div>
        <div className="contact-form">
          <iframe
            title="JotForm"
            id="JotFormIFrame"
            allowFullScreen
            src="https://form.jotform.com/241787699553073"
            style={{
              width: '100%',
              height: '100%', // Ajuste conforme necessário
              minHeight: '900px', // Altura mínima para evitar barras de rolagem
              border: 'none',
            }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
