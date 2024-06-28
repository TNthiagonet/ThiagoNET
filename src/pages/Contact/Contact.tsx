// Contact.tsx

import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h1>Contato</h1>
          <p>Se preferir, entre em contato por email.</p>
        </div>
        <div className="contact-animations">
          {/* Adicione a animação Lottie aqui, se necessário */}
        </div>
        <div className="contact-form">
          <iframe
            id="JotFormIFrame-241787699553073"
            title="Formulário de Contato do Site"
            allowTransparency={true}
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/241787699553073"
            frameBorder={0}
            style={{
              minWidth: '100%',
              maxWidth: '100%',
              height: '1024px',
              border: 'none',
              overflow: 'hidden',
            }}
            scrolling="no"
            onLoad={() => {
              window.parent.scrollTo(0, 0);
              // Adicione outros scripts de manipulação do JotForm aqui, se necessário
            }}
          ></iframe>
          <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
          <script>{`window.jotformEmbedHandler("iframe[id='JotFormIFrame-241787699553073']", "https://form.jotform.com/")`}</script>
        </div>
      </div>
    </section>
  );
};

export default Contact;
