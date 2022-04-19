import React from "react";

import Menu from "../Menu/Menu";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Menu palettes={props.palettes} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
