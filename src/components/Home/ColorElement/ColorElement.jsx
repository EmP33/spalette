import React, { useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./ColorElement.module.scss";

const ColorElement = ({
  baseColor,
  testerColor,
  usedDivColor,
  colorName,
  usedInText,
}) => {
  const [text, setText] = useState("Copy");

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(testerColor);
    setText(`Copied`);

    setTimeout(() => {
      setText("Copy");
    }, 2000);
  };
  return (
    <li>
      <div style={{ background: baseColor }}>
        {colorName}: {testerColor}
        <div
          onClick={copyToClipboardHandler}
          style={{ background: testerColor }}
          styleName="color-tester"
        >
          <h5>{text}</h5>
        </div>
      </div>
      <div style={{ background: usedDivColor, color: baseColor }}>
        {usedInText}
      </div>
    </li>
  );
};

export default CSSModules(ColorElement, styles);
