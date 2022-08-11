import "./beneficios.css";
import phoneImg from "../../assets/phone-img.jpg";
import personImg from "../../assets/person-img.jpg";
import reportImg from "../../assets/report-img.jpg";
import checkImg from "../../assets/check-img.jpg";
import clockImg from "../../assets/clock-img.jpg";
import lightbulbImg from "../../assets/lightbulb-img.jpg";

export default function Beneficios() {
  return (
    <div className="beneficios-wrapper">
      <p className="beneficios-subhead">Sistema de call center completo!</p>
      <p className="beneficios-head">Aumente sua performance de atendimento.</p>
      <div className="container">
        <div className="row">
          <div className="col beneficios-col">
            <img src={phoneImg} alt="" />
            <h2 className="beneficios-h2">
              Discagem para atendimento eficiente e lucrativo
            </h2>
            <ul className="beneficios-ul">
              <li>Melhore o resultado de suas campanhas;</li>
              <li>Maximize a produtividade dos agentes;</li>
              <li>Melhore as experiências dos clientes;</li>
              <li>
                Não perca mais tempo com caixas postais, sinais de ocupado e
                chamadas não atendidas, aumente o tempo real de conversa dos
                seus agentes;
              </li>
              <li>
                Aborde os clientes no momento ideal com a mensagem certa
                apresentada da maneira mais adequada;
              </li>
              <li>
                Eleve os índices de resposta abordando mais contatos certos para
                realizar chamadas mais valiosas.
              </li>
            </ul>
          </div>
          <div className="col beneficios-col">
            <img src={personImg} alt="" />
            <h2 className="beneficios-h2">
              Discador Preditivo Inteligente, minimiza a espera do agente
            </h2>
            <p className="beneficios-p">
              O discador preditivo da iBridge prevê quando agentes estarão
              disponíveis e conta com novos clientes na linha telefônica prontos
              para serem atendidos. Isso reduz a perda de tempo na discagem e a
              fila de chamadas sem resposta. Telas emergentes mostram aos
              agentes com quem estão interagindo através do histórico do
              cliente. Os agentes podem saudar o cliente pelo nome e ir direto
              ao ponto sem perder tempo com informações preliminares.
            </p>
          </div>
          <div className="col beneficios-col">
            <img src={reportImg} alt="" />
            <h2 className="beneficios-h2">
              CRM de Gestão de Televendas com Relatórios Personalizados
            </h2>
            <ul className="beneficios-ul">
              <li>
                Seu CRM totalmente integrado ao Discador com todas as métricas
                necessárias e usadas nos maiores Call Centers;
              </li>
              <li>
                Relatórios elaborados de desempenho da equipe, para fácil
                entendimento da gestão, para tomada de decisão através da
                análise dos números;
              </li>
              <li>
                API de integração com ferramentas de Automação de Marketing (RD
                Station, Mautic, etc) e BI (PowerBI, Pentaho, etc).
              </li>
            </ul>
          </div>
        </div>
        <div className="row row-2">
          <div className="col beneficios-col">
            <img src={checkImg} alt="" />
            <h2 className="beneficios-h2">Soluções confiáveis</h2>
            <p className="beneficios-p">
              A iBridge atua no desenvolvimento de soluções de telecomunicações
              desde 2008 e hoje nossas soluções estão presentes em mais de 1,4
              mil usuários em todo o território nacional.
            </p>
          </div>
          <div className="col beneficios-col">
            <img src={clockImg} alt="" />
            <h2 className="beneficios-h2">Eficiência no DNA</h2>
            <p className="beneficios-p">
              Reduzir custos de nossos clientes e ampliar a produtividade e o
              nível de satisfação da sua equipe são nossos objetivos. Levar mais
              eficiência aos processos está em nosso DNA.
            </p>
          </div>
          <div className="col beneficios-col">
            <img src={lightbulbImg} alt="" />
            <h2 className="beneficios-h2">Inovação em atendimento</h2>
            <p className="beneficios-p">
              A iBridge ajuda empresas a inovar. Oferecemos uma melhor
              experiência em televendas e telecobrança para sua equipe e para
              seus clientes, automatizando seus processos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
