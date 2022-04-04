import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'


function Navigation() {
  return (
    <div className="left">
      <div className="northwesterntv">
        NORTHWESTERN | TV
      </div>
      <nav className="nav flex-column bg-dark">
        <div className="channels">
        <NavLink className="navbar-brand" to="/">
            <text>Channels</text>
        </NavLink>
          <div>
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
          </div>
      </nav>
    </div>
  );
}

export default Navigation;