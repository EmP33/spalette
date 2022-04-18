import React from "react";
import CSSModules from "react-css-modules";
import styles from "./ShadowElement.module.scss";

import ShadowColor from "./ShadowColor/ShadowColor";

import LightenDarkenColor from "../../../helpers/lightendarkenColor";

const ShadowElement = ({ color, header, headerColor }) => {
  return (
    <li styleName="shadow-element" style={{ background: color }}>
      <h4 style={{ color: headerColor }}>{header}</h4>
      <ul>
        <ShadowColor color={LightenDarkenColor(color, 0.2)} />
        <ShadowColor color={color} />
        <ShadowColor color={LightenDarkenColor(color, -0.2)} />
      </ul>
    </li>
  );
};

export default CSSModules(ShadowElement, styles);
