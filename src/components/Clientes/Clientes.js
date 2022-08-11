import "./clientes.css";
import clientesImg from "../../assets/clientes.jpg";

export default function Clientes() {
  return (
    <div className="container cts-container">
      <div className="row">
        <div className="col">
          <h2 className="cts-h2">Nossos clientes</h2>
          <img className="cts-img" src={clientesImg} alt="" />
        </div>
      </div>
    </div>
  );
}
