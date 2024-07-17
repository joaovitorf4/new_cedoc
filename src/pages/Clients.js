import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Clients.css';
import logo_acos_alianca from '../imgs/logo_acos_alianca.png';
import logo_belotur from '../imgs/logo_belotur.png';
import logo_bmg from '../imgs/logo_bmg.png';
import logo_cohab from '../imgs/logo_cohab.png';
import logo_cra from '../imgs/logo_cra.png';
import logo_detran_mg from '../imgs/logo_detran_mg.png';
import logo_fiocruz from '../imgs/logo_fiocruz.png';
import logo_magnesita from '../imgs/logo_magnesita.png';
import logo_odilon from '../imgs/logo_odilon.png';
import logo_paul_wurth from '../imgs/logo_paul_wurth.png';
import logo_spda from '../imgs/logo_spda.png';
import logo_unimed from '../imgs/logo_unimed.png';
import fundo_cedoc from '../imgs/IMG_8541.webp';
import BackToTop from './BackToTop';
import Title from '../styled-components/Title';

function Clients() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="Clients">
      <CSSTransition
        key="clients"
        in={inProp}
        timeout={500}
        classNames="fade"
        appear
        unmountOnExit
      >
        <main>
          <div id='main-clients'>
            <Title>Alguns dos nossos clientes</Title>
            <div className='logos-carousel'>
              <div className='logo-item'>
                <a aria-label='Aços Aliança' href="http://www.acosalianca.com.br/" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_acos_alianca} alt="Aços Aliança" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='Belotur' href="https://prefeitura.pbh.gov.br/belotur" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_belotur} alt="Belotur" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='BMG' href="https://www.bancobmg.com.br/" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_bmg} alt="BMG" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='COHAB' href="http://www.cohab.mg.gov.br/" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_cohab} alt="COHAB" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='CRA' href="https://www.cramg.org.br/" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_cra} alt="CRA" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='DETRAN MG' href="https://transito.mg.gov.br/" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_detran_mg} alt="DETRAN MG" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='Fiocruz' href="https://portal.fiocruz.br/" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_fiocruz} alt="Fiocruz" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='Magnesita' href="https://www.rhimagnesita.com/pt/" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_magnesita} alt="Magnesita" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='Hospital Odilon' href="https://prefeitura.pbh.gov.br/index.php/hospital-metropolitano-odilon-behrens" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_odilon} alt="Hospital Odilon" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='Paul Wurth' href="https://www.paulwurth.com/" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_paul_wurth} alt="Paul Wurth" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='SPDA' href="https://www.prefeitura.sp.gov.br/cidade/secretarias/fazenda/spda/" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_spda} alt="SPDA" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='UNIMED' href="https://www.unimed.coop.br/site/" target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_unimed} alt="UNIMED" />
                </a>
              </div>
            </div>
          </div>
          <div className="div-imgs">
            <img rel='preload' src={fundo_cedoc} alt="" />
          </div>
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default Clients;
