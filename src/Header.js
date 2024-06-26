import './Header.css';
import logo from './imgs/logo_cedoc.png'

function App() {
  return (
    <div className="Header">
      <header>
        <img src={logo} alt="" />
        <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">Serviços e Soluções</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Clientes</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Sobre nós</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Suporte e Contato</a>
            <button id='demo'>Solicite uma demonstração</button>
            <button id='cliente'>Área do cliente</button>
        </div>
      </header>
    </div>
  );
}

export default App;
