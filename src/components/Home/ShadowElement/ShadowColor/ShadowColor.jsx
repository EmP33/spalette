import React, { useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./ShadowColor.module.scss";

const ShadowColor = ({ color }) => {
  const [text, setText] = useState("Copy to Clipboard");
  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(color);
    setText(`Copied ${color}`);

    setTimeout(() => {
      setText("Copy to Clipboard");
    }, 2000);
  };
  return (
    <li
      onClick={copyToClipboardHandler}
      styleName="shadow-color"
      style={{ background: color }}
    >
      <h5>{text}</h5>
    </li>
  );
};

export default CSSModules(ShadowColor, styles);
