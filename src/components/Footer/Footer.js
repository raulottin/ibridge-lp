import "./footer.css";
import footerImg from "../../assets/ibridge-logo-dark.svg";

export default function Footer() {
  return (
    <div className="footer-bg">
      <img className="footer-img" src={footerImg} alt="" />
    </div>
  );
}
