import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/LoginPage";
import "antd/dist/antd.css";
import "./app.css";
import Register from "./components/pages/RegisterPage";
import HostRegisterPage from "./components/pages/HostRegisterPage";
import DetailPage from "./components/pages/DetailPage";
import FilteredPage from "./components/pages/FilteredPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-host" element={<HostRegisterPage />} />
        <Route path="/place-detail" element={<DetailPage />} />
        <Route path="/search-result" element={<FilteredPage />} />
      </Routes>
    </Router>
  );
}
