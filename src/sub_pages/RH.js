import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../pages/Services';
import './Sub_Services.css'
import BackToTop from '../pages/BackToTop';
import Title from '../styled-components/Title';

function RH({bgColor = 'white'}) {
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
    <div className="RH">
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <main className='Subpages' style={style}>
          <Title>Sistema RH Digital</Title>
          <h3 className='advantages'>Vantagens do Sistema RH Digital</h3>
          <p>O Sistema RH Digital é uma solução moderna e eficiente para gerenciar todos os aspectos relacionados a recursos humanos. Ele integra tecnologia para facilitar e otimizar as funções de RH, desde o recrutamento até a gestão de desempenho.</p>
          <p>Veja as principais vantagens de adotar um Sistema RH Digital:</p>
          <div>
            <h3>Automatização de Processos</h3>
            <p>O Sistema RH Digital automatiza tarefas administrativas, como processamento de folha de pagamento, controle de ponto e gestão de benefícios. Isso reduz o tempo gasto em tarefas manuais e minimiza erros.</p>
            <h3>Centralização de Informações</h3>
            <p>Com um sistema digital, todas as informações relacionadas aos colaboradores são centralizadas em uma única plataforma. Isso facilita o acesso a dados e relatórios, melhorando a tomada de decisões e a eficiência dos processos.</p>
            <h3>Melhoria na Comunicação</h3>
            <p>O sistema proporciona uma comunicação mais eficiente entre a equipe de RH e os colaboradores. Funcionalidades como painéis de comunicação, notificações e sistemas de feedback promovem uma interação mais fluida.</p>
            <h3>Facilidade na Análise de Dados</h3>
            <p>Ferramentas de análise integradas permitem que você avalie o desempenho dos colaboradores, identifique tendências e tome decisões baseadas em dados. Isso contribui para uma gestão de recursos humanos mais estratégica e informada.</p>
            <h3>Compliance e Segurança</h3>
            <p>O Sistema RH Digital garante que as práticas de conformidade sejam seguidas, incluindo o gerenciamento de regulamentações trabalhistas e proteção de dados. Isso ajuda a manter a empresa em conformidade com as leis e a proteger informações sensíveis.</p>
            <h3>Escalabilidade e Flexibilidade</h3>
            <p>O sistema pode ser ajustado para atender às necessidades de empresas de diferentes tamanhos e setores. À medida que sua empresa cresce, o Sistema RH Digital pode ser escalado para suportar novas funções e usuários.</p>
            <h3>Melhoria na Experiência do Colaborador</h3>
            <p>Com um sistema digital, os colaboradores têm acesso a uma interface amigável para gerenciar suas informações pessoais, solicitar férias e acessar outros serviços de RH. Isso melhora a satisfação e a experiência geral dos funcionários.</p>
            <p>Adotar um Sistema RH Digital é um passo estratégico para modernizar a gestão de recursos humanos, aumentar a eficiência e melhorar a experiência dos colaboradores. Para saber mais sobre como nosso sistema pode transformar a gestão de RH na sua empresa, entre em contato conosco. Estamos prontos para ajudar!</p>
          </div>
        </main>
      </CSSTransition>
      <BackToTop />
    </div>
  );
}

export default RH;
