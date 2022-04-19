import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Home from "../../components/Home/Home";

import LoadingPage from "../LoadingPage/LoadingPage";

import { getAllPalettes } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import logo from "../../assets/spalette-logo.png";

const HomePage = () => {
  const {
    sendRequest,
    data: palettes,
    status,
    error,
  } = useHttp(getAllPalettes, true);

  useEffect(() => {
    sendRequest();
  }, []);

  if (status === "pending") {
    return <LoadingPage />;
  }

  if (error) {
    return (
      <div className="error-box">
        <img src={logo} alt="spalette-logo" className="error-message" />
        <h2 className="error-message">Something went wrong: {error}</h2>
      </div>
    );
  }

  return (
    <Layout palettes={palettes}>
      <Home />
    </Layout>
  );
};

export default HomePage;
