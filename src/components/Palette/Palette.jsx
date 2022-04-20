import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Palette.module.scss";
import { Link } from "react-router-dom";

const Palette = ({ primary, secondary, tertiary, base, id }) => {
  console.log(id);
  return (
    <li styleName="palette">
      <Link to={`/${id}`}>
        <div style={{ background: primary }}></div>
        <div style={{ background: secondary }}></div>
        <div style={{ background: tertiary }}></div>
        <div style={{ background: base }}></div>
      </Link>
    </li>
  );
};

export default CSSModules(Palette, styles);
