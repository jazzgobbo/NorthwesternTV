import '/Users/jazzgobbo/Documents/GitHub/NorthwesternTV/src/App.css';
import React, { useState } from 'react';
import Navigation from './Navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  return (
    <div className="home-parent">
      <div className="top-bar"></div>
      <nav>{Navigation}</nav>
      <div className="home-content">
            <img src="https://picsum.photos/id/1025/400"
              alt=":P"/>

            <h1 class="font-weight-light">NSTV</h1>
            <p>
                welcome to the crib
            </p>
          </div>
        </div>


  );
}

export default Home;