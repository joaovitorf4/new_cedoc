import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import './App.css';
import logo_laptop from './imgs/laptop.png';
import BackToTop from './pages/BackToTop';
import Title from './styled-components/Title';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Clients from './pages/Clients';

function App() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="App">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main>
          <div id='main-app'>
            <img src={logo_laptop} alt="" />
            <div id='title-actions'>
              <div id='titles'>
                <Title>Inove a gestão da informação da sua empresa</Title>
                <h2>Armazenamento de Documentos Físicos, Desenvolvimento de Softwares, Digitalização, consultoria em processos</h2>
              </div>
              <div id='button-actions'>
                <button id='demo'><Link to={"/formdemo"}>Solicite uma demonstração</Link></button>
                <button id='cliente'><Link to={"/auth"}>Área do cliente</Link></button>
              </div>
            </div>
          </div>
          <Services />
          <Clients />
          <About />
          <Contact />
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default App;
