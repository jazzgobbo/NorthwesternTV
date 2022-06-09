import '/Users/jazzgobbo/Documents/GitHub/NorthwesternTV/src/App.css';
import React, { useState } from 'react';
import Channels from './Channels.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import TopBar from './TopBar.js';

const Home = () => {
  return (
    <div className="home-parent">
      <TopBar />
      <Channels />
      
        <div className="text-content">
          <h2> Welcome to <h1>NorthwesternTV</h1> </h2>
          <h3>Happy watching</h3>
          

        </div>
        </div>


  );
}

export default Home;