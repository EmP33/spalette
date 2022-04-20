import React, { useState } from "react";
import styles from "./Menu.module.scss";
import CSSModules from "react-css-modules";

import logo from "../../assets/spalette-logo.png";

import Palette from "../Palette/Palette";

import { useSelector } from "react-redux";

const Menu = () => {
  const palettes = useSelector((state) => state.palettes.palettes);
  const favorities = useSelector((state) => state.palettes.favorities);
  const [isfavorities, setIsFavorities] = useState(false);

  const switchPalettesHandler = () => {
    setIsFavorities((prevState) => !prevState);
  };

  return (
    <menu styleName="menu">
      <img src={logo} alt="spalette-logo" className="logo" />
      <button onClick={switchPalettesHandler}>
        {isfavorities ? "Switch to All Palettes" : "Switch to Favorities"}
      </button>
      <nav styleName="menu__navigation">
        <ul styleName="palettes">
          {isfavorities
            ? favorities
                ?.map((fav) => palettes?.find((palette) => palette.id === +fav))
                .map((palette) => (
                  <Palette
                    id={palette.id}
                    key={palette.id}
                    primary={palette.primary}
                    secondary={palette.secondary}
                    tertiary={palette.tertiary}
                    base={palette.base}
                  />
                ))
            : palettes
            ? palettes.map((palette) => (
                <Palette
                  id={palette.id}
                  key={palette.id}
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
