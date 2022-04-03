import '/Users/jazzgobbo/Documents/GitHub/NorthwesternTV/src/App.css';
import React, { useState } from 'react';
import Navigation from './Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="home-parent">
      <nav>{Navigation}</nav>
      <div className="home-content">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img src="https://picsum.photos/id/1025/400"
              alt=":P"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">NSTV</h1>
            <p>
                welcome to the crib
            </p>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Home;