import React from "react";
import "./App.css";
import About from "./components/pages/About";
import Hacker from "./components/pages/Hacker";
import Nav from "./components/navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  return <h1>Home page</h1>;
}