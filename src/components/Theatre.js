import React from "react";
import Channels from './Channels.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoList from './VideoList.js';
import listofVideos from './listofVideos.js';
import TopBar from './TopBar.js';

const Theatre = () => {
  return (
    <div className="theatre-parent">
      <TopBar />
      <Channels />
      <div className="theatre-content">
        
      </div>
    </div>
  );
}



export default Theatre;