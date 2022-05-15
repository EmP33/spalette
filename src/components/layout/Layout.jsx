import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Layout.module.scss";
import Menu from "../Menu/Menu";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div styleName="wrapper">
      <Menu />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default CSSModules(Layout, styles);
