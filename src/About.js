import React from 'react';
import './About.css';
import BackToTop from './BackToTop';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import Title from './styled-components/Title';

function About() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    // Set inProp to true after a short delay to trigger the transition
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="About">
      <CSSTransition
        in={inProp}
        timeout={500} // Duration of the transition in milliseconds
        classNames="fade"
        unmountOnExit
      >
      <main>
        <Title>Sobre Nós</Title>
        <div id="main-about">
        <p>A Cedoc é uma empresa destacada no mercado de gestão de documentos, prestando um excelente serviço e mantendo um alto índice de satisfação de todos os clientes atendidos. </p>
        <p>Este resultado se dá há mais de 10 anos de experiência no mercado e a busca inconstante de evolução e tecnologia para atender as novas demandas.</p>
          <strong>10 anos de experiência no mercado de gestão de documentos</strong>
          <ul>
            <li>Mais de 400.000.000 de imagens de documentos digitalizados e indexados.</li>
            <li>Mais de 25.000.000 de documentos físicos arquivados e indexados.</li>
            <li>Mais de 1500 clientes atendidos nos estados de Minas Gerais, São Paulo e Rio de Janeiro.</li>
          </ul>
        </div>
      </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default About;