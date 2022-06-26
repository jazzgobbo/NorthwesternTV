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
      <header className="TV-header">
        <TopBar />
        <Channels />
      </header>
      <div className="tv-content">
        <section id="nstv">
          <div className="title">
                  <h2>Ghost Story</h2>
                  <h3>Starring Jacqui Touchet</h3> 
          </div>
        <video controls muted>
              <source src="http://localhost:4000/video" type="video/mp4"></source>
        </video>
        </section>
        
      </div>
    </div>
  );
}

export default TV;