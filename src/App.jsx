import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./App.css";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:name" element={<MovieDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
