import React, { useEffect } from "react";
import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import Home from "./components/Home/Home";

import { useDispatch } from "react-redux";
import { palettesActions } from "./store/palettes-slice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const palettes = JSON.parse(localStorage.getItem("palettes"));
    if (palettes) {
      dispatch(palettesActions.fetchFavorities(palettes));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomePage />}>
          <Route path=":id" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
