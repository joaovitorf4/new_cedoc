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
// import fundo_cedoc from '../imgs/IMG_8541.webp';
import BackToTop from './BackToTop';
import ButtonZap from '../components/ButtonZap';
import Title from '../styled-components/Title';
import { acosAliancaSite, beloturSite, bmgSite, cohabSite, craSite, detraSite, fiocruzSite, odilonSite, paulwurthSite, rhMagnesiteSite, spdaSite, unimedSite } from '../imports/Links';

function Clients({bgImg = 'url("https://static.vecteezy.com/ti/vetor-gratis/p1/19938741-premio-fundo-projeto-com-onda-padronizar-dentro-cinzento-cor-vetor.jpg")'}) {
  const style = {
    backgroundImage: bgImg,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  };
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
        <main style={style}>
          <div id='main-clients'>
            <Title>Alguns dos nossos clientes</Title>
            <div className='logos-carousel'>
              <div className='logo-item'>
                <a aria-label='Aços Aliança' href={acosAliancaSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_acos_alianca} alt="Aços Aliança" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='Belotur' href={beloturSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_belotur} alt="Belotur" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='BMG' href={bmgSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_bmg} alt="BMG" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='COHAB' href={cohabSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_cohab} alt="COHAB" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='CRA' href={craSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_cra} alt="CRA" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='DETRAN MG' href={detraSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_detran_mg} alt="DETRAN MG" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='Fiocruz' href={fiocruzSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_fiocruz} alt="Fiocruz" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='Magnesita' href={rhMagnesiteSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_magnesita} alt="Magnesita" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='Hospital Odilon' href={odilonSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_odilon} alt="Hospital Odilon" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='Paul Wurth' href={paulwurthSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_paul_wurth} alt="Paul Wurth" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='SPDA' href={spdaSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_spda} alt="SPDA" />
                </a>
              </div>
              <div className='logo-item'>
                <a aria-label='UNIMED' href={unimedSite} target='_blank' rel='noreferrer' className='logo-link'>
                  <img src={logo_unimed} alt="UNIMED" />
                </a>
              </div>
            </div>
          </div>
          <div className="div-imgs">
            {/* <img rel='preload' src={fundo_cedoc} alt="" /> */}
          </div>
        </main>
      </CSSTransition>
      <BackToTop />
      <ButtonZap />
    </div>
  );
}

export default Clients;
