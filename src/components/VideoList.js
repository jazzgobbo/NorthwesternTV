import React from 'react'
import Video from './Video.js'

const VideoList = ({Video,ChannelCategories}) => {
  return (
    <div className="cards">
      {ChannelCategories.length === 0 ? 
        videos.map((v) => 
        <Video video={v} />) :
        videos.filter(v => ChannelCategories.includes(v.category)).map((v) => 
        <Video video={v} />)
      }
    </div>
  )
}

export default VideoList;