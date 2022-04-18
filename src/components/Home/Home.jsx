import React from "react";
import styles from "./Home.module.scss";
import CSSModules from "react-css-modules";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import ColorElement from "./ColorElement/ColorElement";
import ShadowElement from "./ShadowElement/ShadowElement";

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
          <ColorElement
            baseColor={baseColor}
            testerColor={primaryColor}
            usedDivColor={tertiaryColor}
            colorName="color-primary"
          />
          <ColorElement
            baseColor={baseColor}
            testerColor={secondaryColor}
            usedDivColor={tertiaryColor}
            colorName="color-secondary"
          />
          <ColorElement
            baseColor={baseColor}
            testerColor={tertiaryColor}
            usedDivColor={tertiaryColor}
            colorName="color-tertiary"
          />
          <ColorElement
            baseColor={baseColor}
            testerColor={baseColor}
            usedDivColor={tertiaryColor}
            colorName="color-base"
          />
        </ul>
      </section>
      <section styleName="shadows">
        <h2 style={{ color: primaryColor }}>
          SHADOWS OF EVERY COLORS IN THIS PALETTE
        </h2>
        <ul>
          <ShadowElement
            color={primaryColor}
            header="color-primary"
            headerColor={"#fff" || "#000"}
          />
          <ShadowElement
            color={secondaryColor}
            header="color-secondary"
            headerColor={"#fff" || "#000"}
          />
          <ShadowElement
            color={tertiaryColor}
            header="color-tertiary"
            headerColor={"#fff"}
          />
          <ShadowElement
            color={baseColor}
            header="color-base"
            headerColor={"#333"}
          />
        </ul>
      </section>
      <Footer backgroundColor={baseColor} colorText={primaryColor} />
    </div>
  );
};

export default CSSModules(Home, styles);
