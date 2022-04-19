import React from "react";
import styles from "./Menu.module.scss";
import CSSModules from "react-css-modules";

import logo from "../../assets/spalette-logo.png";

import Palette from "../Palette/Palette";

import { useSelector } from "react-redux";

const Menu = () => {
  const palettes = useSelector((state) => state.palettes.palettes);

  return (
    <menu styleName="menu">
      <img src={logo} alt="spalette-logo" className="logo" />
      <nav styleName="menu__navigation">
        <ul styleName="palettes">
          {palettes
            ? palettes.map((palette, key) => (
                <Palette
                  id={key}
                  key={key}
                  primary={palette.primary}
                  secondary={palette.secondary}
                  tertiary={palette.tertiary}
                  base={palette.base}
                />
              ))
            : ""}
        </ul>
      </nav>
    </menu>
  );
};

export default CSSModules(Menu, styles);
