import React from "react";
import styles from "./Navbar.module.scss";
import CSSModules from "react-css-modules";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { palettesActions } from "../../../store/palettes-slice";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({
  background: backgroundColor,
  text: textColor,
  buttonColor,
}) => {
  const dispatch = useDispatch();
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
      <GiHamburgerMenu
        styleName="navbar-menu-button"
        onClick={() => dispatch(palettesActions.toggleShow())}
      />
      <h2>Spalette</h2>
      <ul>
        <li>Home</li>
        <li>Why Spalette?</li>
        <li>About</li>
        <li
          onClick={drawPaletteHandler}
          styleName="draw-color"
          style={{ background: buttonColor, color: backgroundColor }}
        >
          Draw Palette
        </li>
      </ul>
    </div>
  );
};

export default CSSModules(Navbar, styles);
