import './Footer.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Title2Footer from '../styled-components/Title2';
import Paragraph from '../styled-components/Paragraph';
import { cedocLocationAdm, cedocLocationArm, comercialEmail, geralTel2 } from './Links';

const linkStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  transition: 'transform 0.2s ease-in-out',
};

const hoverStyle = {
  transform: 'scale(1.1)',
};

function App() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="Footer">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
      <footer>
        <div id='footer-content'>
          <section id='first-sec'>
            <Title2Footer>Contato</Title2Footer>
            <ul>
            <li id='email-contact'><a href={comercialEmail} target='_blank' rel='noreferrer'>comercial@cedoc.net.br</a></li>
            <li id='number'><a href={geralTel2} target='_blank' rel='noreferrer'>(31) 99990-0722</a></li>
            </ul>
          </section>
          <section id='first-sec'>
            <Title2Footer>Localização</Title2Footer>
            <ul>
            <li className='location'><p>Unidade de Administrativa</p><a href={cedocLocationAdm} target='_blank' rel='noreferrer'>Avenida Portugal, 399 Jardim Atlântico - Belo Horizonte - MG</a></li>
            <li className='location'><p>Unidade de Armazenamento</p><a href={cedocLocationArm} target='_blank' rel='noreferrer'>Rua Alcobaça, 831 São Francisco - Belo Horizonte - MG</a></li>
            </ul>
          </section>
          <section id='second-sec'>
            <Title2Footer>Páginas</Title2Footer>
            <ul>
              <li><Link style={linkStyle} activestyle={hoverStyle} to={"/services"}>Serviços e Soluções</Link></li>
              <li><Link style={linkStyle} activestyle={hoverStyle} to={"/clients"}>Clientes</Link></li>
              <li><Link style={linkStyle} activestyle={hoverStyle} to={"/about"}>Sobre nós</Link></li>
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
