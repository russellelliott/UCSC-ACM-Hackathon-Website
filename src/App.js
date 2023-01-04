import React from "react";
import "./App.css";
import About from "./components/pages/About";
import Hacker from "./components/pages/Hacker";
import Nav from "./components/navbar/Nav";
import Button from "./components/Button"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Schedule from "./components/schedule/Schedule"
import Subscribe from "./components/Subscribe"

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
      <h1 className = "title">UCSC ACM Hackathon</h1>
      <p className = "subtitle">A hackathon brought to you by UCSC ACM.</p>
      <p className = "description">Dummy text go here</p>

      {/*Buttons for different applications*/}
      <div className = "apply">
        <Button link = "" text = "Test button"/>
      </div>
      <Subscribe/>
      <Schedule/>
    </div>
  );
}