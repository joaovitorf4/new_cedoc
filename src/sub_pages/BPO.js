import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import Title from '../styled-components/Title';
import H3Round from '../styled-components/H3Round';
import background from '../imgs/bg-cedoc.jpg';
import ButtonZap from '../components/ButtonZap';

function BPO({bgImg = `url(${background})`}) {
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
    <div className="BPO">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main className='Subpages' style={style}>
          <Title>BPO - Terceirização de Processos</Title>
          <div id='sub-text'>
            <h2 className='advantages'>Benefícios da Terceirização de Serviços (BPO)</h2>
            <p>A terceirização de serviços, ou BPO (Business Process Outsourcing), é uma estratégia eficaz para otimizar operações e melhorar o desempenho das empresas.</p>
            <p>Veja os principais benefícios dessa abordagem:</p>
          </div>
          <div>
            <H3Round>Foco no Core Business</H3Round>
            <p>Ao terceirizar processos não essenciais, sua empresa pode concentrar seus recursos e esforços nas atividades principais que realmente impulsionam o crescimento e a inovação. Isso permite um foco maior no que você faz melhor.</p>
            <H3Round>Redução de Custos</H3Round>
            <p>A terceirização pode gerar economia significativa em relação a custos operacionais e administrativos. Ao contratar serviços externos, você reduz despesas com pessoal, treinamento e infraestrutura, e paga apenas pelos serviços que utiliza.</p>
            <H3Round>Acesso a Expertise Especializada</H3Round>
            <p>Empresas de BPO oferecem experiência e conhecimento avançado em áreas específicas, como contabilidade, atendimento ao cliente e TI. Isso garante que os serviços sejam realizados por especialistas qualificados, melhorando a qualidade e a eficiência.</p>
            <H3Round>Flexibilidade e Escalabilidade</H3Round>
            <p>A terceirização permite que você ajuste rapidamente a escala dos serviços de acordo com as necessidades do negócio. Se a demanda aumentar ou diminuir, você pode adaptar os recursos sem as complicações de ajustes internos.</p>
            <H3Round>Melhoria na Qualidade dos Serviços</H3Round>
            <p>Terceirizar processos para provedores especializados pode resultar em serviços de maior qualidade e mais eficientes, uma vez que essas empresas possuem processos e tecnologias aprimorados para garantir altos padrões.</p>
            <H3Round>Redução de Riscos</H3Round>
            <p>A terceirização pode ajudar a minimizar riscos associados a áreas complexas e regulamentadas. Os fornecedores de BPO assumem a responsabilidade pela conformidade e pela gestão de riscos, aliviando a carga sobre sua empresa.</p>
            <H3Round>Aumento da Produtividade</H3Round>
            <p>Delegar tarefas operacionais para parceiros externos permite que sua equipe interna se concentre em tarefas mais estratégicas e produtivas. Isso pode levar a um aumento geral na produtividade e na eficiência organizacional.</p>
            <p>Optar pela terceirização de serviços é uma decisão estratégica que oferece vantagens competitivas, redução de custos e maior eficiência. Para saber mais sobre como nossos serviços de BPO podem beneficiar sua empresa, entre em contato conosco. Estamos prontos para ajudar!</p>
          </div>
        </main>
      </CSSTransition>
      <ButtonZap />
      <BackToTop />
    </div>
  );
}

export default BPO;
