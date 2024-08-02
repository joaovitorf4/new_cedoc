import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import Title from '../styled-components/Title';

function Scanning({bgColor = 'white'}) {
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
    <div className="Scanning">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main className='Subpages' style={style}>
          <Title>Digitalização de Documentos</Title>
          <h3 className='advantages'>Benefícios da Digitalização de Documentos</h3>
          <p>A digitalização de documentos é uma solução moderna e eficiente para a gestão e proteção das informações da sua empresa.</p>
          <p> Confira os principais benefícios:</p>
          <div>
            <h3>Segurança Avançada</h3>
            <p>A digitalização permite que documentos físicos sejam transformados em arquivos digitais, que podem ser protegidos por sistemas avançados de criptografia e backups automáticos. Isso reduz o risco de perda e acesso não autorizado.</p>
            <h3>Facilidade de Cumprimento Regulatória</h3>
            <p>Transformar documentos em formatos digitais facilita a adesão a normas e regulamentações. Documentos digitais são mais fáceis de arquivar e acessar conforme exigido por auditorias e exigências legais.</p>
            <h3>Economia de Espaço de Armazenamento</h3>
            <p>A digitalização elimina a necessidade de espaço físico para armazenar documentos. Com arquivos digitais, você pode otimizar o uso do espaço no escritório, liberando áreas que antes eram dedicadas a arquivos físicos.</p>
            <h3>Acesso Imediato e Eficiente</h3>
            <p>Documentos digitalizados podem ser pesquisados e acessados rapidamente através de sistemas de gerenciamento eletrônico. Isso permite que sua equipe encontre e utilize informações de forma mais ágil e eficiente.</p>
            <h3>Conservação de Documentos</h3>
            <p>Documentos físicos estão sujeitos ao desgaste com o tempo. A digitalização preserva o conteúdo dos documentos e evita danos físicos, garantindo que suas informações sejam mantidas em boas condições por muito mais tempo.</p>
            <h3>Redução de Custos Operacionais</h3>
            <p>A digitalização reduz despesas com impressão, papel e manutenção de arquivos físicos. Isso diminui os custos gerais de operação e melhora a eficiência dos recursos financeiros da empresa.</p>
            <h3>Apoio à Sustentabilidade</h3>
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
