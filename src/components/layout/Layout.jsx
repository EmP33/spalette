import React from "react";

import Menu from "../Menu/Menu";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Menu />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
