import React, { useState } from 'react';
import './Header.css';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <div className="header-content">
        <nav className="top-nav">
          <div className="left">
            {/* Remova o elemento <img> */}
            <div className="logo-text">ThiagoNET</div> {/* Texto centralizado */}
          </div>
          <div className="center">
          </div>
          <div className="right">
            <ul className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
            <div className="hamburger-menu" onClick={toggleMenu}>
              {mobileMenuOpen ? '✕' : '☰'}
            </div>
          </div>
        </nav>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} />
    </header>
  );
};

export default Header;
