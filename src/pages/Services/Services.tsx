import React from 'react';
import './Services.css';
import CardDefault from '../../components/Card/Card';
// Importe a imagem corretamente
import ReactImg1 from '../../components/Card/img/react-img1.png';


const Services: React.FC = () => {
  return (
    <section id="about">
      <h1>Services</h1>
      <p>Esta é a página de serviços.</p>

      <div className="card-container">
        <CardDefault
          imageUrl={ReactImg1}
          title="Título do Card 1"
          description="Descrição do Card 1"
          buttonLabel="Ver Mais"
          buttonUrl="#"
        />

        <CardDefault
          imageUrl={ReactImg1}
          title="Título do Card 2"
          description="Descrição do Card 2"
          buttonLabel="Ver Mais"
          buttonUrl="#"
        />

        <CardDefault
          imageUrl={ReactImg1}
          title="Título do Card 3"
          description="Descrição do Card 3"
          buttonLabel="Ver Mais"
          buttonUrl="#"
        />

        <CardDefault
          imageUrl={ReactImg1}
          title="Título do Card 4"
          description="Descrição do Card 4"
          buttonLabel="Ver Mais"
          buttonUrl="#"
        />
      </div>
    </section>
  );
};

export default Services;
