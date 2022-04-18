import React from "react";
import styles from "./Navbar.module.scss";
import CSSModules from "react-css-modules";

const Navbar = ({
  background: backgroundColor,
  text: textColor,
  buttonColor,
}) => {
  return (
    <div
      styleName="navbar"
      style={{ background: backgroundColor, color: textColor }}
    >
      <h2>Spalette</h2>
      <ul>
        <li>Home</li>
        <li>Why Spalette?</li>
        <li>About</li>
        <li styleName="draw-color" style={{ background: buttonColor }}>
          Draw Palette
        </li>
      </ul>
    </div>
  );
};

export default CSSModules(Navbar, styles);
