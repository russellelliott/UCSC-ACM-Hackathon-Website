import React from "react";
import "../../App.css";
import logo from '../../images/dark-logo.svg';

import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
            <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
          
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/hacker">Hacker</Link>
           </ul>
        </div>
  );

}