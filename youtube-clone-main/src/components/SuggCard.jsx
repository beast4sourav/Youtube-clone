import React from 'react'
import "./SuggCard.css"

function SuggCard() {
  return (
    
      <div className="video-container">
        <img src="https://i.ytimg.com/vi/gHrS5X4nKbU/hq720.jpg" alt="" srcset="" />
        <div className="text-container">
          <div className="icon">
            <img src="https://robohash.org/777" alt="" srcset="" />
          </div>
          <div className="text-content">
            <div className="title">This is the title of the video</div>
            <div className="channel-name">Channel Name</div>
            <div className="channel-name">200k 2 month ago</div>
          </div>
        </div>
      </div>
  )
}

export default SuggCard