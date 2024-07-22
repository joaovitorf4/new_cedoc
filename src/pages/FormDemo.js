import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './FormDemo.css';
import BackToTop from './BackToTop';
import Title from '../styled-components/Title';
import Paragraph from '../styled-components/Paragraph';
import LabelTitle from '../styled-components/LabelTitle';
import emailjs from '@emailjs/browser'

function FormDemo() {
  const [inProp, setInProp] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tipoServico: ''
  });

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const fullServiceName = document.getElementById(`${option}-paragraph`).textContent;
    setFormData({ ...formData, tipoServico: fullServiceName });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.nome,
      service: formData.tipoServico,
      company: formData.empresa,
      phone: formData.telefone,
      email: formData.email,
    };

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((response) => {
        console.log("Email enviado", response.status, response.text);
        alert("Formulário Enviado!");
      }, (err) => {
        console.log("ERRO ao enviar o email: ", err);
        alert("Erro ao enviar o email. Tente novamente mais tarde.");
      });

    // console.log('Form Data:', formData);
  };

  return (
    <div className="FormDemo">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main>
          <Title>Solicite uma Demonstração</Title>
          <form onSubmit={handleSubmit}>
            <LabelTitle>Informações do Cliente</LabelTitle>
            <div className='div-text-inputs'>
              <div>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder='Nome'
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder='Telefone'
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  placeholder='Empresa'
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <LabelTitle>Tipo de Serviço</LabelTitle>

            <div className='div-radio-inputs'>
              <div
                className={`radio-inputs ${selectedOption === 'gestao' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('gestao')}
                onFocus={() => handleOptionClick('gestao')}
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                </svg>
                <Paragraph id="gestao-paragraph">Gestão de Documentos</Paragraph>
              </div>
              <div
                className={`radio-inputs ${selectedOption === 'rh' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('rh')}
                onFocus={() => handleOptionClick('rh')}
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="bi bi-people" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                </svg>
                <Paragraph id="rh-paragraph">Sistema RH Digital</Paragraph>
              </div>
              <div
                className={`radio-inputs ${selectedOption === 'bpo' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('bpo')}
                onFocus={() => handleOptionClick('bpo')}
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="bi bi-file-break" viewBox="0 0 16 16">
                  <path d="M0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5M12 0H4a2 2 0 0 0-2 2v7h1V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h1V2a2 2 0 0 0-2-2m2 12h-1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2H2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"/>
                </svg>
                <Paragraph id="bpo-paragraph">BPO - Terceirização de Processos</Paragraph>
              </div>
              <div
                className={`radio-inputs ${selectedOption === 'digitalizacao' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('digitalizacao')}
                onFocus={() => handleOptionClick('digitalizacao')}
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="bi bi-body-text" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5m0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-12 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                </svg>
                <Paragraph id="digitalizacao-paragraph">Digitalização de Documentos</Paragraph>
              </div>
              <div
                className={`radio-inputs ${selectedOption === 'assinatura' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('assinatura')}
                onFocus={() => handleOptionClick('assinatura')}
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="bi bi-pen" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                </svg>
                <Paragraph id="assinatura-paragraph">Assinatura Digital</Paragraph>
              </div>
            </div>
            <input type="submit" value="Enviar"/>
          </form>
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default FormDemo;
