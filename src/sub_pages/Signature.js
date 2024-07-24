import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import Title from '../styled-components/Title';

function Signature() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="Signature">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main>
          <Title>Assinatura Digital</Title>
          <p>Nossa solução de assinatura digital foi desenvolvida para simplificar e agilizar o processo de validação de documentos, permitindo que sua equipe se concentre nas iniciativas estratégicas que impulsionam o crescimento do seu negócio. Com uma plataforma robusta e segura, oferecemos uma integração perfeita aos seus sistemas existentes, garantindo eficiência e conformidade em cada assinatura realizada.</p>
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default Signature;
