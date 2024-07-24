import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import Title from '../styled-components/Title';

function Scanning() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="Scanning">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main>
          <Title>Digitalização de Documentos</Title>
          <p>A digitalização de documentos contribui para a eficiência dos processos internos de uma organização. A busca por documentos físicos em arquivos ou pastas pode ser demorada e propensa a erros, enquanto a busca em arquivos digitais pode ser feita de forma rápida e precisa, por meio de palavras-chave, metadados ou índices. Isso permite uma recuperação de informações mais eficiente, aceitando o tempo perdido na busca de documentos e facilitando a produtividade dos funcionários.</p>
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default Scanning;
