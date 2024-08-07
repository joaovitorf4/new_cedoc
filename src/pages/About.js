import React from 'react';
import './About.css';
import BackToTop from './BackToTop';
import ButtonZap from '../components/ButtonZap';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import Title from '../styled-components/Title';
import CountUp from '../components/CountUp';

function About({bgImg = 'url("https://static.vecteezy.com/ti/vetor-gratis/p1/19938741-premio-fundo-projeto-com-onda-padronizar-dentro-cinzento-cor-vetor.jpg")'}) {
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
    <div className="About">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
      <main style={style}>
        <Title>Sobre Nós</Title>
        <div id="main-about">
          
          <ul>
            <li key="item1">
              <CountUp endNumber={400} duration={2000} /> Milhões de imagens de documentos digitalizados e indexados.
            </li>
            <li key="item2">
              <CountUp endNumber={25} duration={2000} /> Milhões de documentos físicos arquivados e indexados.
            </li>
            <li key="item3">
              <CountUp endNumber={1500} duration={2000} /> Clientes atendidos nos Estados de Minas Gerais, São Paulo e Rio de Janeiro.
            </li>
          </ul>
          <div>
            <p>A Cedoc é uma empresa destacada no mercado de gestão de documentos, prestando um excelente serviço e mantendo um alto índice de satisfação de todos os clientes atendidos. </p>
            <p>Este resultado se dá há mais de 10 anos de experiência no mercado e a busca inconstante de evolução e tecnologia para atender as novas demandas.</p>
            <strong>10 anos de experiência no mercado de gestão de documentos</strong>
          </div>
        </div>
        <div className="div-imgs">
          {/* <img rel='preload' src={img1} alt="" />
          <img src={img2} alt="" /> */}
        </div>
      </main>
      </CSSTransition>
      <BackToTop />
      <ButtonZap />
    </div>
  );
}

export default About;
