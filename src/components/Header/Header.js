import { useRef, useState } from "react";
import "./header.css";
import companyLogo from "../../assets/ibridge-logo.jpg";
import menuIcon from "../../assets/menu.png";

export default function Header() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div>
      <div className="main">
        <div className="header-menu">
          <div className="logo">
            <img src={companyLogo} alt="iBridge Company Logo" />
          </div>

          <button className="menu-button" onClick={onClick}>
            <img src={menuIcon} alt="Menu" className="menu-icon" />
          </button>
          <div className="menu-container">
            <nav
              ref={dropDownRef}
              className={`menu ${isActive ? "active" : "inactive"}`}
            >
              <a href="#">Benefícios</a>
              <a href="#">Sistema</a>
              <a href="#">Depoimentos</a>
              <a href="#">FAQ</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
