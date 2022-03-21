import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Query from "./pages/query";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/query" element={<Query />} />
    </Routes>
  );
}

export default App;
