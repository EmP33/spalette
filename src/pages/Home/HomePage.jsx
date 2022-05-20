import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Home from "../../components/Home/Home";

import { getPalettes } from "../../store/palettes-slice";

import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPalettes());
  }, []);

  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
