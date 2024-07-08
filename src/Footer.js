import './Footer.css';
// import logo from './imgs/logo_cedoc.png'
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Title2Footer from './styled-components/Title2Footer';
import Paragraph from './styled-components/Paragraph';

const linkStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  transition: 'transform 0.2s ease-in-out',
};

const hoverStyle = {
  transform: 'scale(1.1)', // Corrected usage
};

function App() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    // Set inProp to true after a short delay to trigger the transition
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="Footer">
      <CSSTransition
        in={inProp}
        timeout={500} // Duration of the transition in milliseconds
        classNames="fade"
        unmountOnExit
      >
      <footer>
        <div id='footer-content'>
          <section id='first-sec'>
          <Link style={linkStyle} activeStyle={hoverStyle} to={"/contact"}><Title2Footer>Contato</Title2Footer></Link>
            <ul>
              <li id='location'><a href="https://maps.app.goo.gl/GARdsWj9x7AW2UZt6" target='_blank' rel='noreferrer'>Avenida Portugal, 399 Jardim Atlântico - Belo Horizonte - MG</a></li>
              <li id='email'><a href="mailto:comercial@cedoc.net.br" target='_blank' rel='noreferrer'>comercial@cedoc.net.br</a></li>
              <li id='number'><a href="tel:55319999000722" target='_blank' rel='noreferrer'>(31) 99990-00722</a></li>
            </ul>
          </section>
          <section id='second-sec'>
            <Title2Footer>Páginas</Title2Footer>
            <ul>
            <li><Link style={linkStyle} activeStyle={hoverStyle} to={"/services"}>Serviços e Soluções</Link></li>
            <li><Link style={linkStyle} activeStyle={hoverStyle} to={"/clients"}>Clientes</Link></li>
            <li><Link style={linkStyle} activeStyle={hoverStyle} to={"/about"}>Sobre nós</Link></li>
            </ul>
          </section>
        </div>
        <div id='copyright'>
          <Paragraph>© cedoc.net.br. Todos os diretios reservados.</Paragraph>
          <Paragraph>Direção Roosevelt Mello Passos</Paragraph>
        </div>
      </footer>
      </CSSTransition>
    </div>
  );
}

export default App;
