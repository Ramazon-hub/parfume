import "./Footer.css";

// components
import { Email, Facebook, Telegram, Instagram } from "../SVG/SVG";

// import email from "../../assets/imgs/email.svg";
// import facebook from "../../assets/imgs/facebook.svg";
// import telegram from "../../assets/imgs/telegram.svg";
// import instagram from "../../assets/imgs/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="navbar">
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

        <a
          className="contact__link"
          href="tel:+998977026123"
          target="_blank"
          rel="noopener noreferrer"
        >
          +998 97 702 61 23
        </a>
      </div>
    </footer>
  );
};

export default Footer;
