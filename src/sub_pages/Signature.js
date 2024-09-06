import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import background from '../imgs/bg-cedoc.jpg';
import H3Round from '../styled-components/H3Round';
import Title from '../styled-components/Title';

function Signature({bgImg = `url(${background})`}) {
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
    <div className="Signature">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main className='Subpages' style={style}>
          <Title>Assinatura Digital</Title>
          <div id='sub-text'>
            <h3 className='advantages'>Benefícios da Assinatura Digital</h3>
            <p>A assinatura digital é uma solução moderna e segura para autenticar documentos eletrônicos, trazendo uma série de vantagens para sua empresa.</p>
            <p>Veja como a assinatura digital pode transformar suas operações:</p>
          </div>
          <div>
            <H3Round>Segurança Avançada</H3Round>
            <p>A assinatura digital utiliza criptografia para garantir que os documentos sejam autênticos e não tenham sido alterados após a assinatura. Isso fornece uma camada robusta de segurança contra fraudes e alterações não autorizadas.</p>
            
            <H3Round>Conformidade Legal</H3Round>
            <p>Assinaturas digitais têm validade jurídica em muitos países e atendem aos requisitos legais para contratos e documentos eletrônicos. Isso facilita a conformidade com normas e regulamentações, assegurando que seus documentos sejam reconhecidos oficialmente.</p>
            
            <H3Round>Eficiência e Agilidade</H3Round>
            <p>Com a assinatura digital, você pode assinar e gerenciar documentos de qualquer lugar, a qualquer hora. Isso elimina a necessidade de impressões e envio físico, acelerando processos e reduzindo o tempo necessário para concluir transações.</p>
            
            <H3Round>Redução de Custos</H3Round>
            <p>A eliminação de papel e os custos associados ao envio físico e armazenamento de documentos resultam em economias significativas. A assinatura digital reduz despesas com impressão, correio e arquivamento.</p>
            
            <H3Round>Facilidade de Uso</H3Round>
            <p>Assinar documentos digitalmente é simples e intuitivo. A maioria das soluções de assinatura digital permite que os usuários assinem documentos com poucos cliques, tornando o processo rápido e acessível.</p>
            
            <H3Round>Acesso Rápido e Prático</H3Round>
            <p>Documentos assinados digitalmente são facilmente acessíveis e compartilháveis por meio de plataformas online. Isso facilita a colaboração e o gerenciamento de documentos, mesmo em equipes distribuídas geograficamente.</p>
            
            <H3Round>Preservação e Armazenamento Eficiente</H3Round>
            <p>Documentos digitais assinados são armazenados de forma segura e eficiente em formatos eletrônicos. Isso garante uma preservação duradoura sem o risco de deterioração física e facilita a recuperação de arquivos quando necessário.</p>
            
            <p>Optar pela terceirização de serviços é uma decisão estratégica que oferece vantagens competitivas, redução de custos e maior eficiência. Para saber mais sobre como nossos serviços de BPO podem beneficiar sua empresa, entre em contato conosco. Estamos prontos para ajudar!</p>
          </div>
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default Signature;
