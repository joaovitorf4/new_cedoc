import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import Title from '../styled-components/Title';

function Documents({bgColor = 'white'}) {
  const style = {
    backgroundColor: bgColor,
  };
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="Documents">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main className='Subpages' style={style}>
          <Title>Gestão de Documentos</Title>
          <h3 className='advantages'>Benefícios da Guarda de Documentos</h3>
          <p>A guarda de documentos é essencial para a gestão eficiente e segura das informações da sua empresa.</p>
          <p>Aqui estão os principais benefícios:</p>
          <div>
            <h3>Segurança</h3>
            <p>Ambientes controlados e protegidos garantem a segurança dos seus documentos contra perdas, danos e acessos não autorizados.</p>
            <h3>Conformidade Legal</h3>
            <p>A guarda profissional ajuda a manter seus documentos conforme as leis e regulamentos, facilitando auditorias e evitando penalidades.</p>
            <h3>Economia de Espaço</h3>
            <p>Armazenar documentos externamente libera espaço valioso na sua empresa, permitindo uma melhor utilização do ambiente de trabalho.</p>
            <h3>Acesso Fácil e Rápido</h3>
            <p>Sistemas de catalogação e digitalização permitem localizar e acessar documentos de forma rápida e eficiente, aumentando a produtividade.</p>
            <h3>Preservação</h3>
            <p>Condições ideais de armazenamento garantem a preservação e longevidade dos seus documentos físicos.</p>
            <h3>Redução de Custos</h3>
            <p>Reduza os custos operacionais e de infraestrutura ao optar pela guarda externa de documentos.</p>
            <h3>Sustentabilidade</h3>
            <p>A digitalização de documentos contribui para a sustentabilidade, reduzindo o uso de papel e apoiando práticas ambientais responsáveis.</p>
            <p>Investir na guarda profissional de documentos é uma decisão estratégica que proporciona segurança, eficiência e economia. Para mais informações sobre nossos serviços, entre em contato conosco. Estamos prontos para ajudar!</p>
          </div>
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default Documents;
