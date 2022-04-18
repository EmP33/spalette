import React from "react";
import styles from "./Footer.module.scss";
import CSSModules from "react-css-modules";

const Footer = () => {
  return (
    <footer styleName="footer">
      <div>
        <a href="https://github.com/EmP33" target="_blank" rel="noreferrer">
          Made by EmP33
        </a>
      </div>
    </footer>
  );
};

export default CSSModules(Footer, styles);
