import React from "react";
import styles from "./Menu.module.scss";
import CSSModules from "react-css-modules";

import logo from "../../assets/spalette-logo.png";

import Palette from "../Palette/Palette";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <menu styleName="menu">
      <img src={logo} alt="spalette-logo" className="logo" />
      <nav styleName="menu__navigation">
        <ul styleName="palettes">
          <Palette
            primary="#005555"
            secondary="#069a8e"
            tertiary="#a1e3d8"
            base="#f7ff93"
          />
          <Palette
            primary="#001E6C"
            secondary="#035397"
            tertiary="#E8630A"
            base="#FCD900"
          />
          <Palette
            primary="#4700D8"
            secondary="#9900F0"
            tertiary="#F900BF"
            base="#FF85B3"
          />
          <Palette
            primary="#180A0A"
            secondary="#711A75"
            tertiary="#F10086"
            base="#F582A7"
          />
          <Palette
            primary="#005555"
            secondary="#069a8e"
            tertiary="#a1e3d8"
            base="#f7ff93"
          />
          <Palette
            primary="#001E6C"
            secondary="#035397"
            tertiary="#E8630A"
            base="#FCD900"
          />
          <Palette
            primary="#4700D8"
            secondary="#9900F0"
            tertiary="#F900BF"
            base="#FF85B3"
          />
          <Palette
            primary="#180A0A"
            secondary="#711A75"
            tertiary="#F10086"
            base="#F582A7"
          />
          <Palette
            primary="#005555"
            secondary="#069a8e"
            tertiary="#a1e3d8"
            base="#f7ff93"
          />
          <Palette
            primary="#001E6C"
            secondary="#035397"
            tertiary="#E8630A"
            base="#FCD900"
          />
          <Palette
            primary="#4700D8"
            secondary="#9900F0"
            tertiary="#F900BF"
            base="#FF85B3"
          />
          <Palette
            primary="#180A0A"
            secondary="#711A75"
            tertiary="#F10086"
            base="#F582A7"
          />
          <Palette
            primary="#005555"
            secondary="#069a8e"
            tertiary="#a1e3d8"
            base="#f7ff93"
          />
          <Palette
            primary="#001E6C"
            secondary="#035397"
            tertiary="#E8630A"
            base="#FCD900"
          />
          <Palette
            primary="#4700D8"
            secondary="#9900F0"
            tertiary="#F900BF"
            base="#FF85B3"
          />
          <Palette
            primary="#180A0A"
            secondary="#711A75"
            tertiary="#F10086"
            base="#F582A7"
          />
        </ul>
      </nav>
    </menu>
  );
};

export default CSSModules(Menu, styles);
