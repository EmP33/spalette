import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Palette.module.scss";

const Palette = ({ primary, secondary, tertiary, base }) => {
  return (
    <li styleName="palette">
      <div style={{ background: primary }}></div>
      <div style={{ background: secondary }}></div>
      <div style={{ background: tertiary }}></div>
      <div style={{ background: base }}></div>
    </li>
  );
};

export default CSSModules(Palette, styles);
