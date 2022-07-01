import React from "react";

import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Bottom from "./components/Bottom";
import Login from "./components/Login";
import "antd/dist/antd.css";
import "./app.css";
import Register from "./components/Register";

const App = () => (
  <div className="layout">
    {/* <Navbar />
    <Cards />
    <Bottom /> */}
    {/* <Login /> */}
    <Register />
  </div>
);

export default App;
