import React from "react";
import CSSModules from "react-css-modules";
import styles from "./LoadingPage.module.scss";

import logo from "../../assets/spalette-logo.png";
import { RiLoader3Fill } from "react-icons/ri";

const LoadingPage = () => {
  return (
    <div styleName="loading">
      <img src={logo} alt="logo" />
      <RiLoader3Fill className="spinning" />
    </div>
  );
};

export default CSSModules(LoadingPage, styles);
