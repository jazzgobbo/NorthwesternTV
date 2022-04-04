import React from 'react'
import Video from './Video.js'

const VideoList = ({videos , ChannelCategory}) => {
  return (
    <div className="cards">
      {ChannelCategory.length === 0 ? 
        videos.map((v) => 
        <Video video={v} />) :
        videos.filter(v => ChannelCategory.includes(v.category)).map((v) => 
        <Video video={v} />)
      }
    </div>
  )
}

export default VideoList;