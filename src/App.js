import React from "react";
import "./App.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import Home from "./components/Home/Home";

const App = () => {
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
