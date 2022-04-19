import React from "react";
import styles from "./Navbar.module.scss";
import CSSModules from "react-css-modules";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({
  background: backgroundColor,
  text: textColor,
  buttonColor,
}) => {
  const palettes = useSelector((state) => state.palettes.palettes);
  const navigate = useNavigate();

  const drawPaletteHandler = () => {
    navigate(`/${Math.floor(Math.random() * palettes?.length)}`);
  };

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
        <li
          onClick={drawPaletteHandler}
          styleName="draw-color"
          style={{ background: buttonColor }}
        >
          Draw Palette
        </li>
      </ul>
    </div>
  );
};

export default CSSModules(Navbar, styles);
