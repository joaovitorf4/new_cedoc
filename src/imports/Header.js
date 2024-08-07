import './Header.css';
import logo from '../imgs/logo_cedoc.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const linkStyle = {
  textDecoration: 'none',
  transition: 'transform 0.2s ease-in-out',
};

const hoverStyle = {
  transform: 'scale(1.1)',
};

function App() {
  const [inProp, setInProp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        // Keep header visible when menu is open
        setIsVisible(true);
      } else {
        // Set visibility based on scroll position when menu is closed
        setIsVisible(window.scrollY > 10);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Update visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => {
      const newMenuOpen = !prevMenuOpen;
      // Set visibility to true when the menu is opened
      if (newMenuOpen) {
        setIsVisible(true);
      }
      return newMenuOpen;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
