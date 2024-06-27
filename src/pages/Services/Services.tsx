import React from 'react';
import './Services.css';
import Lottie from 'lottie-react';
import CardDefault from '../../components/Card/Card';
import Registro from '../../components/Card/img/dominio.png';
import Criacao from '../../components/Card/img/webdeveloper.png';
import Hospedagem from '../../components/Card/img/hosting.png';
import Manutencao from '../../components/Card/img/security.png';
import animationData from '../../Animations/AnimationServicos.json';

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="services-header">
        <h1>Serviços</h1>
      </div>
      <div className="services-animation-container">
        <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="services-header-p">
        <p>Nossos serviços mais procurados</p>
      </div>
      <div className="services-card-container">
        <CardDefault
          imageUrl={Registro}
          title="Registro"
          description="www.SeuNomeOuMarca.com.br"
          buttonLabel="Ver Mais"
          buttonUrl="https://wa.me/5583981790771"
        />

        <CardDefault
          imageUrl={Criacao}
          title="Criação"
          description="Desenvolvemos seu App Web"
          buttonLabel="Ver Mais"
          buttonUrl="https://wa.me/5583981790771"
        />

        <CardDefault
          imageUrl={Hospedagem}
          title="Hospedagem"
          description="Mantemos seu serviço seguro."
          buttonLabel="Ver Mais"
          buttonUrl="https://wa.me/5583981790771"
        />

        <CardDefault
          imageUrl={Manutencao}
          title="Manutenção"
          description="Garantimos a qualidade."
          buttonLabel="Ver Mais"
          buttonUrl="https://wa.me/5583981790771"
        />
      </div>
    </section>
  );
};

export default Services;
