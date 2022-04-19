import React from "react";
import CSSModules from "react-css-modules";
import styles from "./ColorButton.module.scss";

const ColorButton = ({ backgroundColor, textColor }) => {
  return (
    <button
      styleName="button-color"
      style={{ background: backgroundColor, color: textColor }}
    >
      Button
    </button>
  );
};

export default CSSModules(ColorButton, styles);
