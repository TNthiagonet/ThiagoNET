import React from 'react';
import './Services.css';
import Lottie from 'lottie-react';
import CardDefault from '../../components/Card/Card';
import ReactImg1 from '../../components/Card/img/react-img1.png';
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
          imageUrl={ReactImg1}
          title="Registro"
          description="www.SeuNomeOuMarca.com.br"
          buttonLabel="Ver Mais"
          buttonUrl="https://wa.me/5583981790771"
        />

        <CardDefault
          imageUrl={ReactImg1}
          title="Criação"
          description="Desenvolvemos seu App Web"
          buttonLabel="Ver Mais"
          buttonUrl="https://wa.me/5583981790771"
        />

        <CardDefault
          imageUrl={ReactImg1}
          title="Hospedagem"
          description="Mantemos seu serviço seguro."
          buttonLabel="Ver Mais"
          buttonUrl="https://wa.me/5583981790771"
        />

        <CardDefault
          imageUrl={ReactImg1}
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
