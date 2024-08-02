import React from 'react';
import './Contact.css';
import BackToTop from './BackToTop';
import ButtonZap from '../components/ButtonZap';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import Title from '../styled-components/Title';
import Title2 from '../styled-components/Title2';
import { administrativoEmail, administrativoZap, atendimentoEmail, atendimentoZap, comercialEmail, comercialZap, financeiroEmail, financeiroZap, geralTel, cedocLocation } from '../imports/Links'

function Contact({bgColor = 'none'}) {
  const style = {
    backgroundColor: bgColor,
  };
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="Contact">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
      <main style={style}>
        <Title>Suporte e Contato</Title>
        <div id="main-div-contacts">
          <div className="div-contacts">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
              <Title2>Localização</Title2>
            </div>       
            <p><a target='_blank' rel='noreferrer' href={cedocLocation}>Avenida Portugal, 399 Jardim Atlântico</a></p>
            <p><a target='_blank' rel='noreferrer' href={cedocLocation}>Belo Horizonte - MG</a></p>
            <p><a target='_blank' rel='noreferrer' href={cedocLocation}>CEP 31550-000</a></p>
          </div>
          <div className="div-contacts">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
              </svg>
              <Title2>Atendimento</Title2>
            </div>
            <p><a target='_blank' rel='noreferrer' href={atendimentoEmail}>atendimento@cedoc.net.br</a></p>
            <p><a target='_blank' rel='noreferrer' href={atendimentoZap}>(31) 97171-6237</a></p>
          </div>
          <div className="div-contacts">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              </svg>
              <Title2>Geral</Title2>
            </div>
            <p><a target='_blank' rel='noreferrer' href={geralTel}>(31) 93656-2040</a></p>
          </div>
          <div className="div-contacts">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
              <Title2>Administrativo</Title2>
            </div>
            <p><a target='_blank' rel='noreferrer' href={administrativoEmail}>administrativo@cedoc.net.br</a></p>
            <p><a target='_blank' rel='noreferrer' href={administrativoZap}>(31) 99570-4986</a></p>
          </div>
          <div className="div-contacts">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
              <Title2>Financeiro</Title2>
            </div>
            <p><a target='_blank' rel='noreferrer' href={financeiroEmail}>financeiro@cedoc.net.br</a></p>
            <p><a target='_blank' rel='noreferrer' href={financeiroZap}>(31) 97208-9557</a></p>
          </div>
          <div className="div-contacts">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
              <Title2>Comercial</Title2>
            </div>
            <p><a target='_blank' rel='noreferrer' href={comercialEmail}>comercial@cedoc.net.br</a></p>
            <p><a target='_blank' rel='noreferrer' href={comercialZap}>(31) 97171-4838</a></p>
          </div>
        </div>
      </main>
      </CSSTransition>
      <BackToTop />
      <ButtonZap />
    </div>
  );
}

export default Contact;
