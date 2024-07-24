import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import Title from '../styled-components/Title';

function RH() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="RH">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main>
          <Title>Sistema RH Digital</Title>
          <p>Nosso sistema de RH digital foi projetado para revolucionar a gestão de recursos humanos da sua empresa. Com tecnologia avançada e uma interface intuitiva, oferecemos uma solução abrangente que simplifica desde a administração de folhas de pagamento até o gerenciamento de desempenho e desenvolvimento de talentos. Capacitando sua equipe de RH a focar no que realmente importa - o crescimento e a satisfação dos colaboradores - nossa plataforma proporciona eficiência, transparência e conformidade em cada etapa do processo.</p>
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default RH;
