import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import Title from '../styled-components/Title';

function BPO() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="BPO">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main>
          <Title>BPO - Terceirização de Processos</Title>
          <p>Nosso serviço de BPO (Business Process Outsourcing) é projetado para aliviar sua equipe das complexidades da gestão documental, permitindo que você se concentre no crescimento estratégico de seu negócio. Com uma combinação de tecnologia avançada e expertise em processos, oferecemos soluções personalizadas que se integram perfeitamente aos seus fluxos de trabalho existentes.</p>
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default BPO;
