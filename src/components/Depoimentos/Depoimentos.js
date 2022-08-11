import "./depoimentos.css";
import { FaQuoteLeft } from "react-icons/fa";
import firstDepo from "../../assets/depoimento1.jpg";
import secondDepo from "../../assets/depoimento2.jpg";

export default function Depoimentos() {
  return (
    <div className="container-fluid depo-container">
      <h2 className="depo-h2">Depoimentos dos nossos clientes</h2>
      <p className="depo-p">
        Labore Lorem veniam excepteur id officia enim. Labore Lorem veniam
        excepteur id officia enim.
      </p>

      <div className="row depo-row">
        <div className="col-6 depo-col">
          <figure className="circle">
            <FaQuoteLeft className="quotes" icon="fa-solid fa-quote-left" />
          </figure>
          <div className="depo-dados">
            <p className="depo-p2">
              A parceria com a iBridge foi fundamental para o nosso processo de
              crescimento, com uma ferramenta simples e intuitiva, e um poderoso
              discador automático, efetivamente estamos fazendo mais com menos!
            </p>
            <p className="depo-nome">Gabriela Probst</p>
            <p>Gerente Operacional Espaço Telecom</p>
          </div>
          <img className="depo-foto" src={firstDepo} alt="" />
        </div>
        <div className="col-6 depo-col">
          <figure className="circle">
            <FaQuoteLeft className="quotes" icon="fa-solid fa-quote-left" />
          </figure>
          <div className="depo-dados">
            <p className="depo-p2">
              O mercado automobilístico é muito exigente, e encontramos na
              iBridge um parceiro sólido, comprometido com nossos resultados e
              com um atendimento de excelência.
            </p>
            <p className="depo-nome">Rafael Nascimento</p>
            <p>Gerente de Projetos e Clientes Quest Inteligência</p>
          </div>
          <img className="depo-foto" src={secondDepo} alt="" />
        </div>
      </div>
    </div>
  );
}
