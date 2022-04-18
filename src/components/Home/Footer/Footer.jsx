import React from "react";
import styles from "./Footer.module.scss";
import CSSModules from "react-css-modules";

const Footer = ({ backgroundColor, colorText }) => {
  return (
    <div styleName="footer" style={{ background: backgroundColor }}>
      <a
        style={{ color: colorText }}
        styleName="footer__ghprofile"
        href="https://github.com/EmP33"
      >
        Github Profile
      </a>
      <h3 style={{ color: colorText }} className="logo">
        Spalette
      </h3>
      <a
        style={{ color: colorText }}
        styleName="footer__ghrepo"
        href="https://github.com/EmP33/spalette"
      >
        Github Repo
      </a>
    </div>
  );
};

export default CSSModules(Footer, styles);
