import './App.css';
import logo_acos_alianca from './imgs/logo_acos_alianca.png'
import logo_belotur from './imgs/logo_belotur.png'
import logo_bmg from './imgs/logo_bmg.png'
import logo_cohab from './imgs/logo_cohab.png'
import logo_cra from './imgs/logo_cra.png'
import logo_detran_mg from './imgs/logo_detran_mg.png'
import logo_fiocruz from './imgs/logo_fiocruz.png'
import logo_magnesita from './imgs/logo_magnesita.png'
import logo_odilon from './imgs/logo_odilon.png'
import logo_paul_wurth from './imgs/logo_paul_wurth.png'
import logo_spda from './imgs/logo_spda.png'
import logo_unimed from './imgs/logo_unimed.png'

function App() {
  return (
    <div className="App">
      <main>
        <div id='page1'>
          <img src="https://cedoc.com/uploads/2024/02/macbookapp.png" alt="" />
          <div id='title-actions'>
            <div id='titles'>
              <h1>Inove a gestão da informação da sua empresa</h1>
              <p>Armazenamento de Documentos Físicos, Desenvolvimento de Softwares, Digitalização, consultoria em processos</p>
            </div>
            <div id='button-actions'>
              <button id='demo'>Solicite uma demonstração</button>
              <button id='cliente'>Área do cliente</button>
            </div>
          </div>
        </div>
        <div id='page2'>
          <h1>Clientes de referência</h1>
          <div className='logos-carousel'>
            <div className='logo-item'>
              <a href="#" className='logo-link'>
                <img src={logo_acos_alianca} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="#" className='logo-link'>
                <img src={logo_belotur} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="#" className='logo-link'>
                <img src={logo_bmg} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="#" className='logo-link'>
                <img src={logo_cohab} alt="" />
              </a>
            </div>
          </div>

          <div className='logos-carousel'>
            <div className='logo-item'>
                <a href="#" className='logo-link'>
                  <img src={logo_cra} alt="" />
                </a>
            </div>
            <div className='logo-item'>
              <a href="#" className='logo-link'>
                <img src={logo_detran_mg} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="#" className='logo-link'>
                <img src={logo_fiocruz} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="#" className='logo-link'>
                <img src={logo_magnesita} alt="" />
              </a>
            </div>
          </div>

          <div className='logos-carousel'>
            <div className='logo-item'>
              <a href="#" className='logo-link'>
                <img src={logo_odilon} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="#" className='logo-link'>
                <img src={logo_paul_wurth} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="#" className='logo-link'>
                <img src={logo_spda} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="#" className='logo-link'>
                <img src={logo_unimed} alt="" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
