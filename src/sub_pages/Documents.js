import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import Title from '../styled-components/Title';

function Documents() {
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
        <main>
          <Title>Gestão de Documentos</Title>
          <p>A Cedoc é especializada em guarda de documentos oferece uma infraestrutura completa e segura para armazenamento, incluindo tecnologias de última geração para garantir a integridade e confidencialidade das informações.</p>
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default Documents;
