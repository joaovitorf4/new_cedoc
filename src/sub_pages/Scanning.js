import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import background from '../imgs/bg-cedoc.jpg';
import H3Round from '../styled-components/H3Round';
import Title from '../styled-components/Title';

function Scanning({bgImg = `url(${background})`}) {
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
    <div className="Scanning">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main className='Subpages' style={style}>
          <Title>Digitalização de Documentos</Title>
          <div id='sub-text'>
            <h3 className='advantages'>Benefícios da Digitalização de Documentos</h3>
            <p>A digitalização de documentos é uma solução moderna e eficiente para a gestão e proteção das informações da sua empresa.</p>
            <p> Confira os principais benefícios:</p>
          </div>
          <div>
            <H3Round>Segurança Avançada</H3Round>
            <p>A digitalização permite que documentos físicos sejam transformados em arquivos digitais, que podem ser protegidos por sistemas avançados de criptografia e backups automáticos. Isso reduz o risco de perda e acesso não autorizado.</p>
            <H3Round>Facilidade de Cumprimento Regulatória</H3Round>
            <p>Transformar documentos em formatos digitais facilita a adesão a normas e regulamentações. Documentos digitais são mais fáceis de arquivar e acessar conforme exigido por auditorias e exigências legais.</p>
            <H3Round>Economia de Espaço de Armazenamento</H3Round>
            <p>A digitalização elimina a necessidade de espaço físico para armazenar documentos. Com arquivos digitais, você pode otimizar o uso do espaço no escritório, liberando áreas que antes eram dedicadas a arquivos físicos.</p>
            <H3Round>Acesso Imediato e Eficiente</H3Round>
            <p>Documentos digitalizados podem ser pesquisados e acessados rapidamente através de sistemas de gerenciamento eletrônico. Isso permite que sua equipe encontre e utilize informações de forma mais ágil e eficiente.</p>
            <H3Round>Conservação de Documentos</H3Round>
            <p>Documentos físicos estão sujeitos ao desgaste com o tempo. A digitalização preserva o conteúdo dos documentos e evita danos físicos, garantindo que suas informações sejam mantidas em boas condições por muito mais tempo.</p>
            <H3Round>Redução de Custos Operacionais</H3Round>
            <p>A digitalização reduz despesas com impressão, papel e manutenção de arquivos físicos. Isso diminui os custos gerais de operação e melhora a eficiência dos recursos financeiros da empresa.</p>
            <H3Round>Apoio à Sustentabilidade</H3Round>
            <p>Adotar a digitalização ajuda a reduzir o uso de papel e contribui para práticas ambientais sustentáveis. Ao digitalizar seus documentos, sua empresa apoia iniciativas ecológicas e reduz seu impacto ambiental.</p>
            <p>Investir na digitalização de documentos é uma escolha estratégica que oferece segurança, eficiência e economia para sua empresa. Para mais informações sobre como podemos ajudar com a digitalização, entre em contato conosco. Estamos à disposição para oferecer suporte!</p>
          </div>
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default Scanning;
