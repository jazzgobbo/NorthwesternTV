import '/Users/jazzgobbo/Documents/GitHub/NorthwesternTV/src/App.css';
import React, { useState } from 'react';
import Navigation from './Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoList from './VideoList.js';
import listofVideos from './listofVideos.js';

// figure out how to dynamically embed youtube videos
function TV() {
  return (
    <div className="tv-parent">
      <nav>{Navigation}</nav>
      <div className="tv-content">
       <div className="row align-items-center my-5">
        <video>
          <VideoList videos={listofVideos} ChannelCategory="TV"/>  
        </video>
        </div>
      </div>
    </div>

  );
}

export default TV;