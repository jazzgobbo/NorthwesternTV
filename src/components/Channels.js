import React from "react";
import { NavLink } from "react-router-dom";
import './Channels.css';


const Channels = () => {
  return (
    <div className="left">
      <nav className="nav flex-column bg-dark">
        <div className="channels">
          
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">
                  <text>Home</text>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/TV">
                <text>TV</text>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Theatre">
                  <text>Theatre</text>
                </NavLink>
              </li>
     
        </div>
      </nav>
    </div>
  );
}

export default Channels;