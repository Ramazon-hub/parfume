import "./Header.css";
import { Link } from "react-router-dom";

// components
import { Email, Facebook, Telegram, Instagram, Acount } from "../SVG/SVG";

// imgs
import Logo from "../../assets/imgs/logo.png";
// import email from "../../assets/imgs/email.svg";
// import facebook from "../../assets/imgs/facebook.svg";
// import telegram from "../../assets/imgs/telegram.svg";
// import instagram from "../../assets/imgs/instagram.svg";
// import acount from "../../assets/imgs/acount.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar--mobile">
          <ul className="navbar__ul">
            <li className="navbar__list">
              <a
                className="navbar__link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Email />
                {/* <img src={email} alt="email" /> */}
              </a>
            </li>
            <li className="navbar__list">
              <a
                className="navbar__link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
                {/* <img src={facebook} alt="facebook" /> */}
              </a>
            </li>
            <li className="navbar__list">
              <a
                className="navbar__link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Telegram />
                {/* <img src={telegram} alt="telegram" /> */}
              </a>
            </li>
            <li className="navbar__list">
              <a
                className="navbar__link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
                {/* <img src={instagram} alt="instagram" /> */}
              </a>
            </li>
          </ul>
        </nav>

        <Link className="logo__link" to="/">
          <img className="logo__img" src={Logo} alt="logo" />
        </Link>

        <div className="contact">
          <a
            className="contact__link contact__link--mobile"
            href="tel:+998977026123"
            target="_blank"
            rel="noopener noreferrer"
          >
            +998 97 702 61 23
          </a>

          <Link className="contact__acount" to="/register">
            <Acount />
            {/* <img src={acount} alt="acount" /> */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
