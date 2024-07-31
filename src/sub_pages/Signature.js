import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import Title from '../styled-components/Title';

function Signature() {
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
        <main className='Subpages'>
          <Title>Assinatura Digital</Title>
          <h3 className='advantages'>Benefícios da Assinatura Digital</h3>
          <p>A assinatura digital é uma solução moderna e segura para autenticar documentos eletrônicos, trazendo uma série de vantagens para sua empresa.</p>
          <p>Veja como a assinatura digital pode transformar suas operações:</p>
          <div>
            <h3>Segurança Avançada</h3>
            <p>A assinatura digital utiliza criptografia para garantir que os documentos sejam autênticos e não tenham sido alterados após a assinatura. Isso fornece uma camada robusta de segurança contra fraudes e alterações não autorizadas.</p>
            
            <h3>Conformidade Legal</h3>
            <p>Assinaturas digitais têm validade jurídica em muitos países e atendem aos requisitos legais para contratos e documentos eletrônicos. Isso facilita a conformidade com normas e regulamentações, assegurando que seus documentos sejam reconhecidos oficialmente.</p>
            
            <h3>Eficiência e Agilidade</h3>
            <p>Com a assinatura digital, você pode assinar e gerenciar documentos de qualquer lugar, a qualquer hora. Isso elimina a necessidade de impressões e envio físico, acelerando processos e reduzindo o tempo necessário para concluir transações.</p>
            
            <h3>Redução de Custos</h3>
            <p>A eliminação de papel e os custos associados ao envio físico e armazenamento de documentos resultam em economias significativas. A assinatura digital reduz despesas com impressão, correio e arquivamento.</p>
            
            <h3>Facilidade de Uso</h3>
            <p>Assinar documentos digitalmente é simples e intuitivo. A maioria das soluções de assinatura digital permite que os usuários assinem documentos com poucos cliques, tornando o processo rápido e acessível.</p>
            
            <h3>Acesso Rápido e Prático</h3>
            <p>Documentos assinados digitalmente são facilmente acessíveis e compartilháveis por meio de plataformas online. Isso facilita a colaboração e o gerenciamento de documentos, mesmo em equipes distribuídas geograficamente.</p>
            
            <h3>Preservação e Armazenamento Eficiente</h3>
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
