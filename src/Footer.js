import './Footer.css';
// import logo from './imgs/logo_cedoc.png'
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  transition: 'transform 0.2s ease-in-out',
};

const hoverStyle = {
  transform: 'scale(1.1)', // Corrected usage
};

function App() {
  return (
    <div className="Footer">
      <footer>
        <div id='footer-content'>
          <section id='first-sec'>
          <Link style={linkStyle} activeStyle={hoverStyle} to={"/contact"}><h2>Contato</h2></Link>
            <ul>
              <li id='location'><a href="https://maps.app.goo.gl/GARdsWj9x7AW2UZt6" target='_blank' rel='noreferrer'>Avenida Portugal, 399 Jardim Atlântico - Belo Horizonte - MG</a></li>
              <li id='email'><a href="mailto:atendimento@cedoc.net.br" target='_blank' rel='noreferrer'>atendimento@cedoc.net.br</a></li>
              <li id='number'><a href="tel:553136562040" target='_blank' rel='noreferrer'>(31) 3656-2040</a></li>
            </ul>
          </section>
          <section id='second-sec'>
            <h2>Páginas</h2>
            <ul>
            <li><Link style={linkStyle} activeStyle={hoverStyle} to={"/services"}>Serviços e Soluções</Link></li>
            <li><Link style={linkStyle} activeStyle={hoverStyle} to={"/clients"}>Clientes</Link></li>
            <li><Link style={linkStyle} activeStyle={hoverStyle} to={"/about"}>Sobre nós</Link></li>
            </ul>
          </section>
        </div>
        <div id='copyright'>
          <p>© cedoc.net.br. Todos os diretios reservados.</p>
          <p>Direção Roosevelt Mello Passos</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
