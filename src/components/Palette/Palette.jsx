import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Palette.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { palettesActions } from "../../store/palettes-slice";

const Palette = ({ primary, secondary, tertiary, base, id }) => {
  const dispatch = useDispatch();
  return (
    <li
      styleName="palette"
      onClick={() => dispatch(palettesActions.toggleShow())}
    >
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
