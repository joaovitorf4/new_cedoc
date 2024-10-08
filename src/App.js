import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import './App.css';
import logo_laptop from './imgs/laptop.png';
import BackToTop from './pages/BackToTop';
import ButtonZap from './components/ButtonZap';
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
                <Link id='demo' to={"/formdemo"}>Solicite uma demonstração</Link>
                <Link id='client' to={"/auth"}>Área do cliente</Link>
              </div>
            </div>
          </div>
          <Services bgImg='none'/>
          <Clients  bgImg='none'/>
          <About  bgImg='none'/>
          <Contact  bgImg='none'/>
        </main>
      </CSSTransition>
      <BackToTop />
      <ButtonZap />
    </div>
  );
}

export default App;
