import '/Users/jazzgobbo/Documents/GitHub/NorthwesternTV/src/App.css';
import React, { useState } from 'react';
import Channels from './Channels.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoList from './VideoList.js';
import listofVideos from './listofVideos.js';
import './TV.css';

// figure out how to dynamically embed youtube videos
const TV = () => {
  return (
    <div className="tv-parent">
      <Channels />
      <div className="tv-content">
        <video>
          <VideoList videos={listofVideos} ChannelCategory="TV"/>  
        </video>
      </div>
    </div>
  );
}

export default TV;