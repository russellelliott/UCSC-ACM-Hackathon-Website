import React from "react";
import "./App.css";
import About from "./components/pages/About";
import Hacker from "./components/pages/Hacker";
import Nav from "./components/navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/hacker" element={<Hacker/>} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  useEffect(() => {
    document.title = "UCSC ACM Hackathon"
  }, []);
  return(
    <div>
      <h1 class = "title">UCSC ACM Hackathon</h1>
      <p class = "subtitle">A hackathon brought to you by UCSC ACM.</p>
      <p class = "description">Dummy text go here</p>
    </div>
  );
}