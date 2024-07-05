import './Clients.css';
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
import BackToTop from './BackToTop';

function Clients() {
  return (
    <div className="Clients">
      <main>
        <div id='page2'>
          <h1>Alguns dos nossos clientes</h1>
          <div className='logos-carousel'>
            <div className='logo-item'>
              <a href="http://www.acosalianca.com.br/" target='_blank' rel='noreferrer' className='logo-link'>
                <img src={logo_acos_alianca} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="https://prefeitura.pbh.gov.br/belotur" target='_blank' rel='noreferrer' className='logo-link'>
                <img src={logo_belotur} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="https://www.bancobmg.com.br/" target='_blank' rel='noreferrer' className='logo-link'>
                <img src={logo_bmg} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="http://www.cohab.mg.gov.br/" target='_blank' rel='noreferrer' className='logo-link'>
                <img src={logo_cohab} alt="" />
              </a>
            </div>

            <div className='logo-item'>
                <a href="https://www.cramg.org.br/" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_cra} alt="" />
                </a>
            </div>
            <div className='logo-item'>
              <a href="https://transito.mg.gov.br/" target='_blank' rel='noreferrer' className='logo-link'>
                <img src={logo_detran_mg} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="https://portal.fiocruz.br/" target='_blank' rel='noreferrer' className='logo-link'>
                <img src={logo_fiocruz} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="https://www.rhimagnesita.com/pt/" target='_blank' rel='noreferrer' className='logo-link'>
                <img src={logo_magnesita} alt="" />
              </a>
            </div>

            <div className='logo-item'>
              <a href="https://prefeitura.pbh.gov.br/index.php/hospital-metropolitano-odilon-behrens" target='_blank' rel='noreferrer' className='logo-link'>
                <img src={logo_odilon} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="https://www.paulwurth.com/" target='_blank' rel='noreferrer' className='logo-link'>
                <img src={logo_paul_wurth} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/fazenda/spda/" target='_blank' rel='noreferrer' className='logo-link'>
                <img src={logo_spda} alt="" />
              </a>
            </div>
            <div className='logo-item'>
              <a href="https://www.unimed.coop.br/site/" target='_blank' rel='noreferrer' className='logo-link'>
                <img src={logo_unimed} alt="" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}

export default Clients;
