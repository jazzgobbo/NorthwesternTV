import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="left">
      <nav className="nav nav-pills flex-column bg-dark">
        <NavLink className="navbar-brand" to="/">
            Channel
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
      </nav>
    </div>
  );
}

export default Navigation;