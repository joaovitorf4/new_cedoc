import './Header.css';
import logo from './imgs/logo_cedoc.png'
import React, { useState } from 'react';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <div className="Header">
      <header>
        <img src={logo} alt="Logo" />
        <nav>
          <div className="menu-toggle" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </div>
          <ul className={`menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Serviços e Soluções</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Clientes</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Sobre nós</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Suporte e Contato</a></li>
            <li><button id="demo">Solicite uma demonstração</button></li>
            <li><button id="cliente">Área do cliente</button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
