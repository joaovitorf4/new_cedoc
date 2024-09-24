import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import Title from '../styled-components/Title';
import background from '../imgs/bg-cedoc.jpg';
import H3Round from '../styled-components/H3Round';
import ButtonZap from '../components/ButtonZap';

function Documents({bgImg = `url(${background})`}) {
  const style = {
    backgroundImage: bgImg,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
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
          <div id='sub-text'>
            <h2 className='advantages'>Benefícios da Guarda de Documentos</h2>
            <p>A guarda de documentos é essencial para a gestão eficiente e segura das informações da sua empresa.</p>
            <p>Aqui estão os principais benefícios:</p>
          </div>
          <div>
            <H3Round>Segurança</H3Round>
            <p>Ambientes controlados e protegidos garantem a segurança dos seus documentos contra perdas, danos e acessos não autorizados.</p>
            <H3Round>Conformidade Legal</H3Round>
            <p>A guarda profissional ajuda a manter seus documentos conforme as leis e regulamentos, facilitando auditorias e evitando penalidades.</p>
            <H3Round>Economia de Espaço</H3Round>
            <p>Armazenar documentos externamente libera espaço valioso na sua empresa, permitindo uma melhor utilização do ambiente de trabalho.</p>
            <H3Round>Acesso Fácil e Rápido</H3Round>
            <p>Sistemas de catalogação e digitalização permitem localizar e acessar documentos de forma rápida e eficiente, aumentando a produtividade.</p>
            <H3Round>Preservação</H3Round>
            <p>Condições ideais de armazenamento garantem a preservação e longevidade dos seus documentos físicos.</p>
            <H3Round>Redução de Custos</H3Round>
            <p>Reduza os custos operacionais e de infraestrutura ao optar pela guarda externa de documentos.</p>
            <H3Round>Sustentabilidade</H3Round>
            <p>A digitalização de documentos contribui para a sustentabilidade, reduzindo o uso de papel e apoiando práticas ambientais responsáveis.</p>
            <p>Investir na guarda profissional de documentos é uma decisão estratégica que proporciona segurança, eficiência e economia. Para mais informações sobre nossos serviços, entre em contato conosco. Estamos prontos para ajudar!</p>
          </div>
        </main>
      </CSSTransition>
      <ButtonZap />
      <BackToTop />
    </div>
  );
}

export default Documents;
