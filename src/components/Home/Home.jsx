import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import CSSModules from "react-css-modules";

import { useParams } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import ColorElement from "./ColorElement/ColorElement";
import ShadowElement from "./ShadowElement/ShadowElement";

import ColorButton from "./ColorButton/ColorButton";

import { useSelector, useDispatch } from "react-redux";
import { palettesActions } from "../../store/palettes-slice";
import { getPalette } from "../../store/palettes-slice";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Home = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { id } = params;

  const favorities = useSelector((state) => state.palettes.favorities);
  const palette = useSelector((state) => state.palettes.palette);

  useEffect(() => {
    dispatch(getPalette(id));
  }, [dispatch, id]);

  // return (
  //   <div className="load-home">
  //     <h5>Loading...</h5>
  //   </div>
  // );

  // return (
  //   <div className="load-home">
  //     <h5>Something went wrong..</h5>
  //   </div>
  // );

  const toggleFavoriteHandler = () => {
    if (favorities?.includes(id)) {
      dispatch(palettesActions.removeFavorite(id));
      localStorage.setItem(
        "palettes",
        JSON.stringify(favorities.filter((fav) => fav !== id))
      );
    } else {
      dispatch(palettesActions.setFavorites(id));
      localStorage.setItem("palettes", JSON.stringify([...favorities, id]));
    }
  };

  const primaryColor = palette?.primary || "#1a3c40";
  const secondaryColor = palette?.secondary || "#1d5c63";
  const tertiaryColor = palette?.tertiary || "#417d7a";
  const baseColor = palette?.base || "#ede6db";

  return (
    <div styleName="home">
      <Navbar
        background={primaryColor}
        text={baseColor}
        buttonColor={tertiaryColor}
      />
      <button styleName="fav-button" onClick={toggleFavoriteHandler}>
        {favorities?.includes(id) ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
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
            usedInText="Used in: navbar, colors background, introduction"
          />
          <ColorElement
            baseColor={baseColor}
            testerColor={secondaryColor}
            usedDivColor={tertiaryColor}
            colorName="color-secondary"
            usedInText="Used in: Go down Button background"
          />
          <ColorElement
            baseColor={baseColor}
            testerColor={tertiaryColor}
            usedDivColor={tertiaryColor}
            colorName="color-tertiary"
            usedInText="Used in: block element background, draw palette button"
          />
          <ColorElement
            baseColor={baseColor}
            testerColor={baseColor}
            usedDivColor={tertiaryColor}
            colorName="color-base"
            usedInText="Used in: footer background, colors background, introduction square background, navbar elements"
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
      <section styleName="buttons">
        <h2 style={{ color: baseColor, background: primaryColor }}>Buttons</h2>
        <ul>
          <ColorButton
            backgroundColor={primaryColor}
            textColor={secondaryColor}
          />
          <ColorButton
            backgroundColor={secondaryColor}
            textColor={primaryColor}
          />
          <ColorButton
            backgroundColor={tertiaryColor}
            textColor={primaryColor}
          />
          <ColorButton backgroundColor={baseColor} textColor={primaryColor} />

          <ColorButton
            backgroundColor={primaryColor}
            textColor={tertiaryColor}
          />
          <ColorButton
            backgroundColor={secondaryColor}
            textColor={tertiaryColor}
          />
          <ColorButton
            backgroundColor={tertiaryColor}
            textColor={secondaryColor}
          />
          <ColorButton backgroundColor={baseColor} textColor={secondaryColor} />

          <ColorButton backgroundColor={primaryColor} textColor={baseColor} />
          <ColorButton backgroundColor={secondaryColor} textColor={baseColor} />
          <ColorButton backgroundColor={tertiaryColor} textColor={baseColor} />
          <ColorButton backgroundColor={baseColor} textColor={tertiaryColor} />
        </ul>
      </section>
      <Footer backgroundColor={baseColor} colorText={primaryColor} />
    </div>
  );
};

export default CSSModules(Home, styles);
