import React from "react";
import styles from "./Home.module.scss";
import CSSModules from "react-css-modules";

import Navbar from "./Navbar/Navbar";

const Home = () => {
  const primaryColor = "#1a3c40";
  const secondaryColor = "#1d5c63";
  const tertiaryColor = "#417d7a";
  const baseColor = "#ede6db";

  return (
    <div styleName="home">
      <Navbar
        background={primaryColor}
        text={baseColor}
        buttonColor={tertiaryColor}
      />
      <section styleName="introduction">
        <div styleName="left-side">
          <h1 style={{ color: primaryColor }}>
            Spalette helps in matching the colors on the pages
          </h1>
          <button style={{ background: secondaryColor, color: baseColor }}>
            Go down
          </button>
        </div>
        <div styleName="block" style={{ background: baseColor }}></div>
        <div
          styleName="introduction__divider"
          style={{ background: primaryColor }}
        ></div>
      </section>
      <section styleName="colors" style={{ background: primaryColor }}>
        <h2 style={{ color: baseColor }}>Colors in this site:</h2>
        <ul>
          <li>
            <div>
              color-primary: {primaryColor}{" "}
              <div
                style={{ background: primaryColor }}
                styleName="color-tester"
              ></div>
            </div>
            <div></div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CSSModules(Home, styles);
