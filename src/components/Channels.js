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
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/TV">
                  TV
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Theatre">
                  Theatre
                </NavLink>
              </li>
     
        </div>
      </nav>
    </div>
  );
}

export default Channels;