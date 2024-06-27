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
          <p>Se preferir, entre em contato por email.</p>
        </div>
        <div className="contact-animations">
          <div className="animation-item">
            <Lottie animationData={animationEmail} loop autoplay />
            <p>contato@thiagonet.com</p>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
