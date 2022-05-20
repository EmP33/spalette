import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Home from "../../components/Home/Home";

import LoadingPage from "../LoadingPage/LoadingPage";

import logo from "../../assets/spalette-logo.png";

import { getPalettes } from "../../store/palettes-slice";

import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPalettes());
  }, []);

  // if (status === "pending") {
  // return <LoadingPage />;
  // }

  // return (
  //   <div className="error-box">
  //     <img src={logo} alt="spalette-logo" className="error-message" />
  //     <h2 className="error-message">Something went wrong: {error}</h2>
  //   </div>
  // );

  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
