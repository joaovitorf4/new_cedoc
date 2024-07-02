import './Footer.css';
// import logo from './imgs/logo_cedoc.png'
// import React, { useState } from 'react';

function App() {
  return (
    <div className="Footer">
      <footer>
        <div id='footer-content'>
          <section id='first-sec'>
            <h2>Contato</h2>
            <ul>
              <li id='location'>Avenida Portugal, 399 Jardim Atlântico - Belo Horizonte - MG</li>
              <li id='email'>atendimento@cedoc.net.br</li>
              <li id='number'>(31) 3439-2600</li>
            </ul>
          </section>
          <section id='second-sec'>
            <h2>Páginas</h2>
            <ul>
              <li className='li-animation'><a href="http://" target="_blank" rel="noopener noreferrer">Serviços e Soluções</a></li>
              <li className='li-animation'><a href="http://" target="_blank" rel="noopener noreferrer">Clientes</a></li>
              <li className='li-animation'><a href="http://" target="_blank" rel="noopener noreferrer">Sobre nós</a></li>
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
