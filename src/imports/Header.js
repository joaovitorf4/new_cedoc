import './Header.css';
import logo from '../imgs/logo_cedoc.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';

const linkStyle = {
  textDecoration: 'none',
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

  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsVisible(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
    const toggleVisibility = () => {
        if (window.scrollY > 10) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
        window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="Header">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
      <header className={isVisible ? 'show' : ''}>
        <Link to={"/"} onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>
        <nav>
          <div className="menu-toggle" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </div>
          <ul className={`menu ${menuOpen ? 'active' : ''}`}>
            <li><Link style={linkStyle} activestyle={hoverStyle} to={"/"} onClick={closeMenu}>Home</Link></li>
            <li><Link style={linkStyle} activestyle={hoverStyle} to={"/services"} onClick={closeMenu}>Serviços e Soluções</Link></li>
            <li><Link style={linkStyle} activestyle={hoverStyle} to={"/clients"} onClick={closeMenu}>Clientes</Link></li>
            <li><Link style={linkStyle} activestyle={hoverStyle} to={"/about"} onClick={closeMenu}>Sobre nós</Link></li>
            <li><Link style={linkStyle} activestyle={hoverStyle} to={"/contact"} onClick={closeMenu}>Suporte e Contato</Link></li>
            <li><Link style={linkStyle} id="demo" activestyle={hoverStyle} to={"/formdemo"} onClick={closeMenu}>Solicite uma demonstração</Link></li>
            <li><Link style={linkStyle} id="client" activestyle={hoverStyle} to={"/auth"} onClick={closeMenu}>Área do cliente</Link></li>
          </ul>
        </nav>
      </header>
      </CSSTransition>
    </div>
  );
}

export default App;