import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
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
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default RH;
