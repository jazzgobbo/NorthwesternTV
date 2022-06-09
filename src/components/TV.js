import '/Users/jazzgobbo/Documents/GitHub/NorthwesternTV/src/App.css';
import React, { useState } from 'react';
import Channels from './Channels.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoList from './VideoList.js';
import listofVideos from './listofVideos.js';
import './TV.css';
import TopBar from './TopBar.js';
import Video from './Video.js';

// figure out how to dynamically embed youtube videos
const TV = () => {
  return (
    <div className="tv-parent">
      <TopBar />
      <Channels />
      <div className="tv-content">
        <section id="nstv">
          <div className="title">
            <h2>NSTV</h2>
          </div>


        </section>
        
      </div>
    </div>
  );
}

export default TV;