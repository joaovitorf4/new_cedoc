import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';
// import logo_acos_alianca from './imgs/logo_acos_alianca.png';
// import logo_belotur from './imgs/logo_belotur.png';
// import logo_bmg from './imgs/logo_bmg.png';
// import logo_cohab from './imgs/logo_cohab.png';
// import logo_cra from './imgs/logo_cra.png';
// import logo_detran_mg from './imgs/logo_detran_mg.png';
// import logo_fiocruz from './imgs/logo_fiocruz.png';
// import logo_magnesita from './imgs/logo_magnesita.png';
// import logo_odilon from './imgs/logo_odilon.png';
// import logo_paul_wurth from './imgs/logo_paul_wurth.png';
// import logo_spda from './imgs/logo_spda.png';
// import logo_unimed from './imgs/logo_unimed.png';
import logo_laptop from './imgs/laptop.png';
import BackToTop from './BackToTop';
import Title from './styled-components/Title';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Clients from './Clients';

function App() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    // Set inProp to true after a short delay to trigger the transition
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="App">
      <CSSTransition
        in={inProp}
        timeout={500} // Duration of the transition in milliseconds
        classNames="fade"
        unmountOnExit
      >
        <main>
          <div id='page1'>
            <img src={logo_laptop} alt="" />
            <div id='title-actions'>
              <div id='titles'>
                <Title>Inove a gestão da informação da sua empresa</Title>
                <h3>Armazenamento de Documentos Físicos, Desenvolvimento de Softwares, Digitalização, consultoria em processos</h3>
              </div>
              <div id='button-actions'>
                <button id='demo'>Solicite uma demonstração</button>
                <button id='cliente'><a href="https://wa.me/553195704986" target='_blank' rel='noreferrer'>Área do cliente</a></button>
              </div>
            </div>
          </div>
          <Clients />
          <Services />
          <About />
          <Contact />
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default App;
