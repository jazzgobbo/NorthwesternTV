import './App.css';
import React, { useState } from 'react';
import Channels from './src/Channels.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './src/Home.css';
import TopBar from './src/TopBar.js';

const App = () => {
  return (
    <div className="app-body">
      <TopBar />
      <Channels />
      <div className="app-content">
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

export default App;