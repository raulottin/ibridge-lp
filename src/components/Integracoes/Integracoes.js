import "./integracoes.css";
import integracoesImg from "../../assets/integracoes.jpg";

export default function Integracoes() {
  return (
    <div className="container">
      <div className="row integ-row">
        <div className="col integ-col">
          <h2 className="integ-h2">Nossas Integrações</h2>
          <img
            className="integ-img"
            src={integracoesImg}
            alt="Nossas integrações"
          />
        </div>
      </div>
    </div>
  );
}
