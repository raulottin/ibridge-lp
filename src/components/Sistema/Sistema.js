import "./sistema.css";
import smallCheckImg from "../../assets/smallcheck-img.jpg";
import sistemaImg from "../../assets/sistema-img.JPG";

export default function Sistema() {
  return (
    <div className="container-fluid sis-container">
      <div className="row">
        <div className="col-lg-6 sis-col">
          <h2 className="sis-h2">
            Anim sit officia non reprehenderit eiusmod aliquip.
          </h2>
          <div className="sis-col-p">
            <img className="sis-check-img" src={smallCheckImg} alt="" />
            <p className="sis-p">
              Ex irure magna eu eiusmod aliqua elit exercitation duis ut eiusmod
              eiusmod.{" "}
            </p>
            <img className="sis-check-img" src={smallCheckImg} alt="" />
            <p className="sis-p">
              Ex irure magna eu eiusmod aliqua elit exercitation duis ut eiusmod
              eiusmod.{" "}
            </p>
            <img className="sis-check-img" src={smallCheckImg} alt="" />
            <p className="sis-p">
              Ex irure magna eu eiusmod aliqua elit exercitation duis ut eiusmod
              eiusmod.{" "}
            </p>
          </div>
        </div>
        <div className="col-lg-6 sis-col-img">
          <img className="sis-img" src={sistemaImg} alt="" />
        </div>
      </div>
    </div>
  );
}
