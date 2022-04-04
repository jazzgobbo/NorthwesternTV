import React, { Component } from 'react';
import listofVideos from './listofVideos.js'; 


const openLink = (url) => {
    window.open(url)
}

const Video = ({ video }) => {
    return (
        // opens link to youtube video
        <div className='container-fluid' onClick={() => openLink(video.link)}>
            <div className="card">
                <div className="card-title"> {video.title} </div>
                <div className="card-body">
                    <div className="row">
                        <iframe width="560" 
                            height="315" 
                            src={video.link}
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                        <div className='card-text col-sm'> {video.organization} </div>
                        <div className='card-text col-sm'> {video.year} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video